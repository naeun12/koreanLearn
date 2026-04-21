<template>
    <div>
        <navigation></navigation>
        <div class="container mt-5">
            <h1>Welcome to the Korean Learning Platform</h1>
            <p>Start your journey to learn Korean with us!</p>
        </div>
    </div>
</template>
<script>
import navigation from './partials/navigation.vue';
export default {
    components: {
        navigation
    },
    mounted() {
        document.title = "Korean Learning Platform - Home";
    },
    created() {
        document.title = "Korean Learning Platform - Home";
    }
}
</script>
