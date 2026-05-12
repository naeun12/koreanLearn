<template>
    <div class="col-lg-4">
        <div
            class="card h-100 border-0 shadow-sm rounded-4 sidebar-tips text-white overflow-hidden"
        >
            <div class="card-body p-4 position-relative">
                <div
                    class="opacity-25 position-absolute end-0 bottom-0 display-1 fw-bold mb-n4 me-n3"
                >
                    🗣️
                </div>

                <h3 class="fw-bold mb-3 text-accent-primary-color fs-3">
                    <i class="bi bi-hand-index-thumb icon-color icon-color"></i>
                    {{ TipTitle }}
                </h3>

                <p class="text-primary-color fs-5">
                    {{ TipDescription }}
                </p>

                <ul
                    class="list-unstyled mt-4 d-flex text-description-color flex-column gap-3"
                >
                    <li
                        class="d-flex align-items-start gap-3"
                        v-for="Tip in Tips"
                    >
                        <div>
                            <i
                                :class="Tip.icon"
                                class="icon-color icon-color-badge"
                            ></i>
                            <span class="ms-2 text-secondary-color">{{
                                Tip.text
                            }}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        Tips: Array,
        TipTitle: String,
        TipDescription: String,
    },
};
</script>
