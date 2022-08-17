<template>
    <div class="row">
        <div class="item col-3 mx-4 mt-2" @click="$router.push('campus')">
            <div class="one"></div>
            <h3 class="mt-2" style="width: 145px;">Campus Fellowships</h3>
        </div>
    </div>
</template>

<style scoped>
    .row{
        width: 624px;
        height: 1500px;
        margin: 0 auto;
        background-color: #3651797c;
    }
    .item .one {
        width: 300px; 
        height: 300px; 
        background-color: #FFFFFF;
        box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
    }
</style>