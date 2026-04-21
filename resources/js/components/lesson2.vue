<template>
    <div>
        <navigation></navigation>

        <div class="container-fluid mt-4 px-4">
            <div class="row">
                <aside class="col-lg-3 col-xl-2 mb-4">
                    <div class="modern-sidebar shadow-sm border p-3 bg-white rounded-4">
                        <div class="sidebar-brand d-flex align-items-center mb-4">
                            <span class="logo-box fs-3 me-2">🇰🇷</span>
                            <span class="brand-text fw-bold fs-5 tracking-tight">K-LEARN</span>
                        </div>

                        <p class="text-uppercase text-muted smaller-text fw-bold mb-3">Learn</p>
                       <nav class="nav-links d-flex flex-column gap-2">
                            <a href="#" class="nav-item active">
                                <i class="bi bi-star-fill me-2 text-warning"></i>
                                LEVEL 1
                                <span class="badge rounded-pill bg-white text-primary ms-auto border">Beginner</span>
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-unlock me-2 text-muted"></i>
                                LEVEL 2
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-lock me-2 text-muted"></i>
                                LEVEL 3
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-lock me-2 text-muted"></i>
                                LEVEL 4
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-lock me-2 text-muted"></i>
                                LEVEL 5
                            </a>
                            <a href="#" class="nav-item">
                                <i class="bi bi-lock me-2 text-muted"></i>
                                LEVEL 6
                            </a>
                        </nav>

                       
                    </div>
                </aside>

                <main class="col-lg-9 col-xl-10">
                    <div class="p-5 bg-white shadow-sm rounded-4 border min-vh-75">
                        <h1 class="display-5 fw-bold">Hello, K-Learner! 👋</h1>
                        <p class="lead text-muted">Ready to master Hangul today? Start your journey to learn Korean with
                            us!</p>
                        <hr class="my-4">
                        <div class="row g-4 mt-2">
                            <div class="col-md-4">
                                <div class="p-3 border rounded bg-light">Current Progress: 15%</div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
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
        document.title = "Korean Learning Platform - Lesson";
    },
    created() {
        document.title = "Korean Learning Platform - Home";
    }
}
</script>
<style  src="../../css/users/lesson.css"></style>
