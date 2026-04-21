<template>
    <div v-if="visible" class="loader-overlay">
        <div class="loader-content">
            <div class="morph-loader"></div>
            <p class="loader-status">{{ message }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    message: {
        type: String,
        default: 'Processing...'
    },
    visible: {
        type: Boolean,
        default: true
    }
});
</script>

<style scoped>
.loader-overlay {
    /* Fixed position makes it stay in the middle of the SCREEN */
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;

    /* Glassmorphism effect */
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);

    /* Centering logic */
    display: flex;
    align-items: center;
    /* Vertical center */
    justify-content: center;
    /* Horizontal center */

    /* Sit on top of everything else in the app */
    z-index: 9999;
}

.loader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.morph-loader {
    width: 60px;
    /* Slightly larger for screen center */
    height: 60px;
    background: #0d6efd;
    border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
    animation: morph 2s infinite linear alternate, spin 6s infinite linear;
    box-shadow: 0 10px 30px rgba(13, 110, 253, 0.4);
}

.loader-status {
    margin-top: 20px;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    /* Slightly larger text */
    font-weight: 500;
    color: #1e293b;
    animation: pulse 1.5s infinite ease-in-out;
}

@keyframes morph {
    0% {
        border-radius: 40% 60% 60% 40% / 70% 30% 70% 30%;
    }

    100% {
        border-radius: 60% 40% 40% 60% / 30% 70% 30% 70%;
    }
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes pulse {

    0%,
    100% {
        opacity: 0.5;
    }

    50% {
        opacity: 1;
    }
}
</style>