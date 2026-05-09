<template>
    <nav class="navbar navbar-expand-lg custom-navbar sticky-top">
        <div class="container-fluid px-lg-5">
            <button
                class="navbar-toggler border-0 shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNavContent"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div
                class="collapse navbar-collapse flex-grow-1 basis-0"
                id="mainNavContent"
            >
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Homepage</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/korean-letters"
                            >Korean Letters</a
                        >
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/vocabulary"
                            >Vocabulary
                            <span class="d-none d-xl-inline">(단어)</span></a
                        >
                    </li>
                </ul>
            </div>

            <a class="navbar-brand mx-lg-auto" href="#">
                <img
                    src="../../../../../public/logo/logowithtext.jpg"
                    alt="Logo"
                    width="120"
                    height="30"
                    class="d-inline-block"
                />
            </a>

            <div
                class="collapse navbar-collapse flex-grow-1 basis-0 justify-content-end"
                id="mainNavContentRight"
            >
                <ul class="navbar-nav align-items-center">
                    <li class="nav-item">
                        <a class="nav-link" href="/lesson">Lessons</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a
                            class="nav-link dropdown-toggle px-3 fw-semibold"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Parts of Speech
                            <span class="ms-1 opacity-50 d-none d-xl-inline"
                                >(품사)</span
                            >
                        </a>
                        <ul
                            class="dropdown-menu dropdown-modern shadow-xl border-0 animated-menu"
                        >
                            <li>
                                <a class="dropdown-item" href="/nouns"
                                    >Nouns <span class="kr-tag">명사</span></a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="/verbs"
                                    >Verbs <span class="kr-tag">동사</span></a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="/adjectives"
                                    >Adjectives
                                    <span class="kr-tag">형용사</span></a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="/adverbs"
                                    >Adverbs <span class="kr-tag">부사</span></a
                                >
                            </li>
                            <li>
                                <a class="dropdown-item" href="/particles"
                                    >Particles
                                    <span class="kr-tag">조사</span></a
                                >
                            </li>
                            <li><hr class="dropdown-divider opacity-50" /></li>
                            <li>
                                <a class="dropdown-item" href="/pronouns"
                                    >Pronouns
                                    <span class="kr-tag">대명사</span></a
                                >
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-link, .dropdown-item");
    navLinks.forEach((link) => {
        const linkPath = link.getAttribute("href");
        if (currentPath === linkPath) {
            link.classList.add("custom-active");
            const parentDropdown = link.closest(".dropdown");
            if (parentDropdown) {
                parentDropdown
                    .querySelector(".dropdown-toggle")
                    .classList.add("custom-active");
            }
        }
    });
});
</script>
<style src="../../../../css/users/partials/navigation.scss"></style>
