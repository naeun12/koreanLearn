<template>
    <div class="row g-4">
        <div
            class="col-lg-6 col-xl-4"
            v-for="greetingcontent in greetingscontent"
            :key="greetingcontent.id"
        >
            <div
                class="card-greeting-content glass-effect p-3 shadow-sm border-0 h-100"
            >
                <div class="row align-items-center g-0">
                    <div class="ps-3 text-start">
                        <div class="icon-wrapper shadow-sm w-100 h-100 mb-4">
                            <div class="glass-overlay"></div>
                            <img
                                :src="greetingcontent.image"
                                alt="Greeting Illustration"
                                class="img-fluid greeting-image"
                            />
                        </div>

                        <h1 class="fw-bold text-accent-primary-color fs-3 mb-2">
                            {{ greetingcontent.korean }}
                        </h1>

                        <h2 class="text-primary-color">
                            {{ greetingcontent.meaning }}
                        </h2>

                        <p class="text-secondary-color">
                            {{ greetingcontent.usage }}
                        </p>

                        <button
                            @click="greetingVoice(greetingcontent.sound)"
                            class="btn btn-audio btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                        >
                            <i class="bi bi-volume-up-fill"></i>
                            <span>Listen</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cardDetails: {
            type: Array,
            required: true,
        },
    },

    computed: {
        greetingscontent() {
            return this.cardDetails;
        },
    },

    methods: {
        greetingVoice(file) {
            const audio = new Audio(`/sounds/greetings/${file}`);
            audio.play();
        },
    },
};
</script>
<style
    scoped
    src="../../../../css/users/assets/lessons/lessongreetings.css"
></style>
<style
    scoped
    src="../../../../css/users/partials/game/gamefinalresultmodal.css"
></style>
<style scoped src="../../../../css/btn-audio.css"></style>
<style src="../../../../css/users/partials/card/card.css"></style>
<style src="../../../../css/users/partials/sidebar.css"></style>
