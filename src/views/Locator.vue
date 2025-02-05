<template>
  <div>
    <h2 class="text-xl font-semibold mb-4">Nearby Hospitals</h2>
    <div id="map" class="w-full h-96 rounded-lg shadow-lg"></div>
    <p v-if="loading" class="mt-2 text-gray-600">Loading hospitals...</p>
    <p v-if="error" class="mt-2 text-red-500">{{ error }}</p>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Custom markers
const defaultIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

const hospitalIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34]
});

// Component state
const map = ref(null);
const loading = ref(false);
const error = ref(null);
const userLocation = ref({ lat: -1.286389, lng: 36.817223 }); // Default to Nairobi
const bounds = ref(null);
const userMarker = ref(null);

// Map initialization
const initMap = () => {
  // Initialize the map with a center and zoom level
  map.value = L.map('map').setView([userLocation.value.lat, userLocation.value.lng], 14);
  bounds.value = L.latLngBounds([]);

  // Add the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map.value);

  // Add user location marker
  userMarker.value = L.marker([userLocation.value.lat, userLocation.value.lng], { 
    icon: defaultIcon 
  })
    .addTo(map.value)
    .bindPopup("Your location")
    .openPopup();

  // Extend bounds with user location
  bounds.value.extend(userMarker.value.getLatLng());
};

// Calculate distance using Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRadians = (degrees) => degrees * (Math.PI / 180);
  const R = 6371; // Earth's radius in km
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

// Fetch hospitals with error handling
const fetchHospitals = async () => {
  try {
    if (!map.value) {
      throw new Error('Map is not initialized');
    }

    loading.value = true;
    error.value = null;
    
    const overpassQuery = `
      [out:json];
      nwr(around:10000,${userLocation.value.lat},${userLocation.value.lng})["amenity"="hospital"];
      out center;
    `;

    const response = await fetch(
      `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`
    );
    
    if (!response.ok) throw new Error('Failed to fetch hospitals');
    
    const data = await response.json();
    
    data.elements.forEach(element => {
      const coords = element.center || element;
      const marker = L.marker([coords.lat, coords.lon], { 
        icon: hospitalIcon 
      })
        .addTo(map.value)
        .bindPopup(element.tags?.name || 'Unnamed Hospital');

      // Calculate distance
      const distance = calculateDistance(
        userLocation.value.lat,
        userLocation.value.lng,
        coords.lat,
        coords.lon
      );

      // Add click event to zoom and show distance
      marker.on('click', () => {
        // Zoom to the clicked hospital
        map.value.flyTo([coords.lat, coords.lon], 16, {
          duration: 1
        });

        // Show distance in the popup
        marker.bindPopup(`
          <strong>${element.tags?.name || 'Unnamed Hospital'}</strong><br>
          Distance: ${distance.toFixed(2)} km
        `).openPopup();
      });

      // Extend bounds with hospital location
      bounds.value.extend(marker.getLatLng());
    });

    // Adjust map view to show all markers
    if (data.elements.length > 0) {
      map.value.flyToBounds(bounds.value, {
        padding: [50, 50],
        maxZoom: 16,
        duration: 2
      });
    } else {
      // If no hospitals found, center on user location
      map.value.setView(userMarker.value.getLatLng(), 14);
      error.value = 'No nearby hospitals found';
    }
  } catch (err) {
    error.value = 'Error loading hospital data. Please try again later.';
    console.error('Hospital fetch error:', err);
  } finally {
    loading.value = false;
  }
};

// Get user location
const getUserLocation = () => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      console.warn('Geolocation not supported');
      resolve();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        userLocation.value = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        resolve();
      },
      () => {
        console.warn('Geolocation permission denied');
        resolve();
      },
      { timeout: 10000 } // 10 seconds timeout
    );
  });
};

// Handle map view changes
const setupMapEvents = () => {
  map.value.on('moveend', () => {
    if (!bounds.value.contains(map.value.getCenter())) {
      map.value.flyToBounds(bounds.value, {
        padding: [50, 50],
        maxZoom: 16,
        duration: 1
      });
    }
  });
};

// Component lifecycle
onMounted(async () => {
  await getUserLocation(); // Wait for user location
  initMap(); // Initialize the map
  await fetchHospitals(); // Fetch hospitals after the map is ready
  setupMapEvents(); // Set up map events
});

onUnmounted(() => {
  if (map.value) {
    map.value.remove();
    map.value = null;
  }
});
</script>

<style>
/* Custom styles for leaflet controls and popups */

/* Adjust Leaflet zoom control margins */
.leaflet-control-zoom {
  margin-right: 1rem; /* equivalent to mr-4 */
  margin-top: 1rem;   /* equivalent to mt-4 */
}

/* Adjust popup content styles */
.leaflet-popup-content {
  font-size: 0.875rem; /* equivalent to text-sm */
  font-weight: 500;    /* equivalent to font-medium */
}
</style>