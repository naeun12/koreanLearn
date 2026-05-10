<template>
    <div class="row g-3">
        <div class="col-lg-4" v-for="exampleData in ExampleData">
            <div class="h-100 p-3 example-card-design transition-all">
                <!-- Header -->
                <div class="d-flex align-items-center mb-2">
                    <span
                        class="number-badge px-3 py-1 me-2 small text-uppercase"
                        >Ex {{ exampleData.number }}</span
                    >
                    <span class="fw-bold small text-header-color">{{
                        exampleData.title
                    }}</span>
                </div>

                <!-- Title -->
                <div class="h6 fw-bold text-title-color mb-3">
                    {{ exampleData.example }}
                </div>
                <div
                    class="d-flex flex-wrap gap-1 align-items-center mb-3"
                    v-if="exampleData.written || exampleData.pronounced"
                >
                    <span
                        class="p-2 badge-example shadow-sm small"
                        v-html="exampleData.written"
                    >
                    </span>
                    <span
                        class="p-2 badge-example shadow-sm small"
                        v-html="exampleData.pronounced"
                    ></span>
                </div>
                <!-- Description -->
                <div class="text-description-color small mb-3">
                    {{ exampleData.description }}
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
};
</script>
<style src="../../../../../css/users/partials/ExampleAssets.css"></style>
<style src="../../../../../css/users/partials/textColors.css"></style>
