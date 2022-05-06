<template>

    <div class="sized">
    <nav>
        <div class="container d-flex justify-content-between px-4 py-4" 
        style="background-color: #30329C; color: #FFFFFF; height: 69px;">
            <div class="d-flex">
                <div><img src="./assets/img/Tenple-logo.png" alt="" class="img-fluid"></div>
                <h1 class="ml-3" style="font-weight: 700; font-size: 24px;">Tenple</h1>
            </div>
            <div>
                <ul class="d-flex justify-content-between" style="font-weight: 600; font-size: 14px;">
                    <li class="mr-4">Home</li>
                    <li class="mr-4">Template</li>
                    <li class="mr-4">Contact</li>
                    <li class="mr-4">About Us</li>
                </ul>
            </div>
        </div>
    </nav>
    <app-main></app-main>
    <app-section></app-section>
    </div>
</template>

<style>
    *,
::after,
::before {
    box-sizing: border-box
}
    .sized {
        background-color: #FFFFFF;
        width: 624px;
        height: 1500px;
        margin: 0 auto;
    }
</style>