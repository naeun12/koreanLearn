<template>
    <div class="row g-3">
        <div
            class="col-lg-4"
            v-for="(exampleData, index) in ExampleData"
            :key="index"
        >
            <div class="h-100 p-3 example-card-design transition-all">
                <div class="d-flex align-items-center mb-2">
                    <span
                        class="text-accent-primary-color py-1 me-2 small text-uppercase"
                    >
                        Ex {{ exampleData.number }}
                    </span>
                    <span class="fw-bold small text-accent-primary-color">
                        {{ exampleData.title }}
                    </span>
                </div>

                <!-- Main Example Text -->
                <div class="h6 fw-bold text-primary-color mb-3">
                    {{ exampleData.example }}
                </div>
                <div
                    class="badge-container mb-3"
                    v-if="exampleData.written || exampleData.pronounced"
                >
                    <div class="example-row-bg">
                        <div class="badge-item">
                            <span
                                class="written text-secondary-color"
                                v-html="exampleData.written"
                            ></span>
                            <span
                                class="pronounced text-secondary-color"
                                v-html="exampleData.pronounced"
                            ></span>
                        </div>
                        <!-- If you have multiple words, you could v-for here instead -->
                    </div>
                </div>

                <!-- Description -->
                <div class="text-secondary-color small">
                    {{ exampleData.description }}
                </div>
                <div v-if="exampleData.sound !== ''">
                    <button
                        @click="listenSound(exampleData.sound)"
                        class="btn btn-audio btn-sm w-100 d-flex align-items-center justify-content-center gap-2"
                    >
                        <i class="bi bi-volume-up-fill"></i>
                        <span>Listen</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        ExampleData: Array,
    },
    methods: {
        listenSound(file) {
            const audio = new Audio(`/sounds/volcabulary/${file}`);
            audio.play();
        },
    },
};
</script>
<style src="../../../../../css/users/partials/ExampleAssets.css"></style>
<style scoped src="../../../../../css/users/partials/textColors.css"></style>
<style scoped src="../../../../../css/btn-audio.css"></style>
