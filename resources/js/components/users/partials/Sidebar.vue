<template>
    <div class="floating-sidebar d-flex flex-column align-items-end">
        <!-- MODULE LIST -->
        <transition-group name="pop-list" tag="div" class="module-list mb-3">
            <div
                v-for="(item, index) in modules"
                :key="item.target"
                v-if="isOpen"
                class="mb-3 d-flex align-items-center justify-content-end module-item-wrapper"
            >
                <!-- Filled Tooltip Label -->
                <span class="filled-label me-3">{{ item.name }}</span>

                <button
                    class="btn filled-sidebar-btn shadow-sm"
                    @click="navigate(item.target)"
                >
                    <!-- Korean char OR icon -->
                    <span v-if="item.char" class="korean-icon-text">
                        {{ item.char }}
                    </span>

                    <i v-else :class="item.icon"></i>
                </button>
            </div>
        </transition-group>

        <!-- MAIN TOGGLE -->
        <div class="main-toggle-container d-flex align-items-center">
            <span class="filled-main-label me-3">
                {{ ModuleTitle }}
            </span>

            <!-- FIXED TOGGLE BUTTON -->
            <button
                class="btn filled-sidebar-btn shadow-sm"
                @click="toggleMenu"
            >
                <i class="bi bi-grid-fill"></i>
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        modules: {
            type: Array,
            default: () => [],
        },
        ModuleTitle: {
            type: String,
            default: "Modules",
        },
    },

    data() {
        return {
            isOpen: false,
        };
    },

    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },

        navigate(target) {
            // 🔥 send to parent
            this.$emit("navigate", target);

            // optional: auto close after click
            this.isOpen = false;
        },
    },
};
</script>
<style src="../../../../css/users/partials/SideBar.css"></style>
