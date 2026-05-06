<template>
    <div v-if="OpenResult" class="result-modal-backdrop">
        <div class="result-modal-content">
            <div class="celebration-header">
                <div class="result-icon-wrapper">
                    <div class="modern-celebration-icon">
                        <div class="ribbon-icon"></div>
                        <div class="confetti-burst"></div>
                    </div>
                </div>
                <h2 class="fw-bold mb-1">Quiz Finished</h2>
                <div
                    class="status-badge"
                    :class="score >= 5 ? 'pass' : 'retry'"
                >
                    {{ score >= 5 ? "Excellent Work!" : "Keep Practicing" }}
                </div>
            </div>
            <div class="score-visualization my-5">
                <div class="score-circle-glow">
                    <div class="score-content">
                        <span class="score-main">{{ score }}</span>
                        <span class="score-divider"></span>
                        <span class="score-total">10</span>
                    </div>
                </div>
                <p
                    class="text-muted mt-3 mb-0 small text-uppercase fw-bold ls-1"
                >
                    Final Score
                </p>
            </div>
            <div class="result-actions">
                <button class="btn-retry-premium" @click="$emit('retry')">
                    <i class="bi bi-arrow-clockwise me-2"></i> Try Again
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        score: {
            type: Number,
            default: 0,
        },
        OpenQuiz: Boolean,
        OpenResult: Boolean,
    },
    methods: {},
};
</script>
<style
    scoped
    src="../../../../../css/users/partials/game/gamefinalresultmodal.css"
></style>
