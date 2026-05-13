<template>
    <div class="col-12">
        <h2
            class="h5 text-uppercase fw-bold text-accent-primary-color fs-3 mb-4"
            style="letter-spacing: 1px"
        >
            {{ ExampleTitle }}
        </h2>
        <div class="list-group gap-3">
            <div
                class="list-group-item list-group-flush hover-shadow"
                v-for="corePrincipleData in CorePrincipleData"
                :key="corePrincipleData.number"
            >
                <div
                    class="me-3 shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                    style="width: 32px; height: 32px; flex-shrink: 0"
                >
                    <span class="fw-bold number">{{
                        corePrincipleData.number
                    }}</span>
                </div>
                <div>
                    <strong class="d-block text-accent-primary-color">{{
                        corePrincipleData.title
                    }}</strong>

                    <span
                        class="text-secondary-color small"
                        v-html="corePrincipleData.description"
                    >
                    </span>
                    <strong>
                        <span
                            v-html="corePrincipleData.example"
                            class="text-secondary-color small"
                        >
                        </span>
                    </strong>
                </div>
            </div>
        </div>
        <div
            class="mt-5 p-4 rounded-4 pro-tip position-relative overflow-hidden"
        >
            <div
                class="d-flex align-items-center position-relative"
                style="z-index: 1"
            >
                <div class="me-3 fs-2">💡</div>

                <div>
                    <strong class="d-block mb-1 text-primary-color">{{
                        proTipTitle
                    }}</strong>

                    <p
                        class="mb-0 opacity-75 small"
                        v-html="proTipDescription"
                    ></p>
                </div>

                <button
                    class="example-sentences ms-auto"
                    @click="btnHangulStructure()"
                >
                    Example
                </button>
            </div>

            <div
                class="position-absolute"
                style="
                    width: 100px;
                    height: 100px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    right: -20px;
                    bottom: -20px;
                "
            ></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        CorePrincipleData: {
            type: Array,
            required: true,
        },
        isHangulStructureExampleModal: Boolean,
        proTipTitle: String,
        proTipDescription: String,
        ExampleTitle: String,
    },
    methods: {
        btnHangulStructure() {
            this.$emit("open-example");
        },
    },
};
</script>
<style src="../../../../../../css/users/partials/corePrinciples.css"></style>
<style
    scoped
    src="../../../../../../css/users/assets/lessons/grammarassetscss/examplebutton.css"
></style>
<style scoped src="../../../../../../css/users/partials/textColors.css"></style>
