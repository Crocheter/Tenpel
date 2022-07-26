<template>
    <div class="container" style="background-color: #FFFFFF;">
        <div class="text-end">
            <input type="text" placeholder="Date" v-model="date" @change="updateDate">
        </div>
        <h4>Attendance</h4>
        <div class="text-center">
            <input type="text" placeholder="Service" v-model="day" @change="updateDay">
        </div>

        <div>
            <div>
                <h4 class="mb-3">Campus Students:</h4>
                <h5 class="mb-3">Brothers: <input type="number" v-model="cambro" @change="updateCampusBros"></h5>
                <h5 class="mb-3">Sisters: <input type="number" v-model="camsis" @change="updateCampusSis"></h5>
            </div>
            <div>
                <h4 class="mb-3">Staff:</h4>
                <h5 class="mb-3">Brothers: <input type="number" v-model="staffbro" @change="updateStaffBros"></h5>
                <h5 class="mb-3">Sisters: <input type="number" v-model="staffsis" @change="updateStaffSis"></h5>
            </div>
            <div>
                <h2 class="mb-3">Children</h2>
                <h5 class="mb-3">Boys: <input type="number" v-model="childboys" @change="updateChildBoys"></h5>
                <h5 class="mb-3">Girls: <input type="number" v-model="childgirls" @change="updateChildGirls"></h5>
            </div>
        </div>

        <router-link to="./printcampus">
        <div>
            <button class="btn btn-primary">Save and Proceed</button>
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