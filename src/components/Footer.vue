<template>
    <div class="bg-gray-800 text-gray-100">
        <div class="max-w-6xl mx-auto px-4 py-8">
            <div class="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start justify-between">
                <!-- Mission Statement -->
                <div class="max-w-xs">
                    <h3 class="font-bold text-xl mb-4 font-serif text-blue-300">AfyaHelp</h3>
                    <p class="text-sm leading-relaxed opacity-90">
                        Let's help you get the healthcare resources you need, right at your fingertips.
                    </p>
                </div>

                <!-- Contact Info -->
                <div class="space-y-2">
                    <h4 class="font-semibold mb-3 text-blue-200">Visit Us</h4>
                    <p class="text-sm">
                        123 Anywhere St.<br>
                        Any City, ST 12345<br>
                        <span class="mt-1 inline-block">📞 123-456-7890</span>
                    </p>
                </div>

                <!-- Email -->
                <div class="space-y-2">
                    <h4 class="font-semibold mb-3 text-blue-200">Contact Us</h4>
                    <a href="mailto:afyahelp@gmail.com" class="text-sm hover:text-blue-300 transition-colors">
                        📧 samwelmonda48@gmail.com
                    </a>
                </div>
            </div>

            <!-- Copyright -->
            <div class="border-t border-white-700 mt-8 pt-6 text-center text-sm opacity-75">
                <p>&copy; 2023 tibaGo. All rights reserved.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
/* Add smooth transitions */
a {
    transition: color 0.3s ease;
}

/* Optional: Add hover effect for phone number */
span:hover {
    color: #93c5fd;
    cursor: pointer;
}
</style>