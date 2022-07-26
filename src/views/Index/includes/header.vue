<template>
    <nav>
        <div class="container d-flex justify-content-between px-4 py-4" 
        style="background-color: #30329C; color: #FFFFFF; height: 69px;">
            <div class="d-flex">
                <div><img src="../../../assets/Tenple-logo.png" alt="" class="img-fluid"></div>
                <h1 class="ml-3" style="font-weight: 700; font-size: 24px;">Tenple</h1>
            </div>
            <div>
                <ul class="d-flex justify-content-between" style="font-weight: 600; font-size: 14px;">
                    <li class="me-4">Home</li>
                    <router-link to="./template">
                        <li class="me-4">Template</li>
                    </router-link>
                    <li class="me-4">Contact</li>
                    <li class="me-4">About Us</li>
                </ul>
            </div>
        </div>
    </nav>
</template>