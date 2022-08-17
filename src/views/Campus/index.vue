<template>
    <div class="container" style="background-color: #FFFFFF; width: 624px; height: 650px;">
        <div class="text-end">
            <input type="text" placeholder="Date" v-model="date" @change="updateDate" class="text-center m-2 mt-4">
        </div>
        <h4 class="text-center"
        style="font-weight: 700; font-size: 30px">ATTENDANCE</h4>
        <div class="text-center">
            <input type="text" placeholder="Service" v-model="day" @change="updateDay" class="text-center my-4">
        </div>

        <div>
            <div>
                <h4 class="mb-3" style="font-weight: 600; font-size: 28px;">Campus Students:</h4>
                <h5 class="mb-3">Brothers: <input type="number" v-model="cambro" @change="updateCampusBros" class="px-2"></h5>
                <h5 class="mb-3">Sisters: <input type="number" v-model="camsis" @change="updateCampusSis" class="px-2"></h5>
            </div>
            <div>
                <h4 class="mb-3" style="font-weight: 600; font-size: 28px;">Staff:</h4>
                <h5 class="mb-3">Brothers: <input type="number" v-model="staffbro" @change="updateStaffBros" class="px-2"></h5>
                <h5 class="mb-3">Sisters: <input type="number" v-model="staffsis" @change="updateStaffSis" class="px-2"></h5>
            </div>
            <div>
                <h2 class="mb-3" style="font-weight: 600; font-size: 28px;">Children</h2>
                <h5 class="mb-3">Boys: <input type="number" v-model="childboys" @change="updateChildBoys" class="px-2"></h5>
                <h5 class="mb-3">Girls: <input type="number" v-model="childgirls" @change="updateChildGirls" class="px-2"></h5>
            </div>
        </div>

        <router-link to="./printcampus">
        <div>
            <button class="btn btn-primary" style="margin-left: 432px; margin-top: 10px;">Save and Proceed</button>
        </div>
        </router-link>
    </div>
</template>

<style>
    input {
        border: 1px solid #288BA8;
    }
</style>

<script>
import PrintDlcf from './print.vue'

export default {
    components:{
        PrintDlcf
    },
    data: function(){
        return {
            date: '',
            day: '',
            cambro: '',
            camsis: '',
            staffbro: '',
            staffsis: '',
            childboys: '',
            childgirls: '',
        }
    },
    methods: {
        updateDate: function() {
            this.$store.dispatch('setDateAction', this.date)
        },
        updateDay: function() {
            this.$store.dispatch('setDayAction', this.day)
        },
        updateCampusBros: function(){
            this.$store.dispatch('setCampusBrosAction', this.cambro)
        },
        updateCampusSis: function(){
            this.$store.dispatch('setCampusSisAction', this.camsis)
        },
        updateStaffBros: function(){
            this.$store.dispatch('setStaffBrosAction', this.staffbro)
        },
        updateStaffSis: function(){
            this.$store.dispatch('setStaffSisAction', this.staffsis)
        },
        updateChildBoys: function(){
            this.$store.dispatch('setChildBoysAction', this.childboys)
        },
        updateChildGirls: function(){
            this.$store.dispatch('setChildGirlsAction', this.childgirls)
        },
        
    },
     computed: {
        store(){
            return this.$store.state
        }
  }
}
</script>