import { createStore } from 'vuex'

const store = createStore({
    state: {
        date: '',
        day: '',
        cambro: '',
        camsis: '',
        staffbro: '',
        staffsis: '',
        childboys: '',
        childgirls: '',
    },

    mutations: {
        setDateMutation(state, date){
            state.date = date;
        },
        setDayMutation(state, day){
            state.day = day;
        },
        setCampusBrosMutation(state, cambro){
            state.cambro = cambro;
        },
        setCampusSisMutation(state, camsis){
            state.camsis = camsis;
        },
        setStaffBrosMutation(state, staffbro){
            state.staffbro = staffbro;
        },
        setStaffSisMutation(state, staffsis){
            state.staffsis = staffsis;
        },
        setChildBoysMutation(state, childboys){
            state.childboys = childboys;
        },
        setChildGirlsMutation(state, childgirls){
            state.childgirls = childgirls;
        },
    },

    actions: {
        setDateAction(context, date){
            context.commit('setDateMutation', date);
        },
        setDayAction(context, day){
            context.commit('setDayMutation', day);
        },
        setCampusBrosAction(context, cambro){
            context.commit('setCampusBrosMutation', cambro);
        },
        setCampusSisAction(context, camsis){
            context.commit('setCampusSisMutation', camsis);
        },
        setStaffBrosAction(context, staffbro){
            context.commit('setStaffBrosMutation', staffbro);
        },
        setStaffSisAction(context, staffsis){
            context.commit('setStaffSisMutation', staffsis);
        },
        setChildBoysAction(context, childboys){
            context.commit('setChildBoysMutation', childboys);
        },
        setChildGirlsAction(context, childgirls){
            context.commit('setChildGirlsMutation', childgirls);
        },
    }
})

export default store;

// const store = new Vuex.Store({
//     state: {
//       firstname: '',
//       lastname: '',
//       gender: '',
//       devType: '',
//     }, 
    
//     mutations:{
//      setFirstNameMutation(state, firstname){
//          state.firstname = firstname;
//      },
//       setLastNameMutation(state, lastname){
//         state.lastname = lastname;
//       },
//       setGenderMutation(state, gender){
//         state.gender = gender;
//       },
//       setDevTypeMutation(state, devType){
//         state.devType = devType;
//       }
//     },
    
    
//     actions:{
//       setFirstNameAction(context, firstname){
//         context.commit('setFirstNameMutation', firstname);
//       },
//       setLastNameAction(context, lastname){
//         context.commit('setLastNameMutation', lastname);
//       }, setGenderAction(context, gender){
//         context.commit('setGenderMutation', gender);
//       },
//       setDevTypeAction(context, devType){
//         context.commit('setDevTypeMutation', devType);
//       }
//     }
    
    
//   })
 
 
 
//  var app = new Vue({
//    el: "#app",
//    store,
//    created(){
    
//    },
//    data: function(){
//      return{
//        step: 1,
//        totalSteps: 3,
//        errors: [],
//        appName: 'Multi-Step Multi-Component Form',
//      }
//    },
   
//    methods: {
//       reset(){
//    this.$store.dispatch('setFirstNameAction', null);      this.$store.dispatch('setLastNameAction', null);
//    this.$store.dispatch('setGenderAction', null);
//         this.$store.dispatch('setDevTypeAction', null); 
        
//    }, 
     
//     prevStep: function(){
//       this.step--;
//     }, 
//     nextStep: function(){
//       this.errors = [];
//       if(this.step == 1){
//            if(!this.$store.state.firstname) {
//     this.errors.push('Please enter your First Name');
//       return false;
//     }
        
//  if(!this.$store.state.lastname)              {
//             this.errors.push('Please enter your Last Name');
//            return false;
//   }
        
//       }
//       if(this.step == 2){
//          if(!this.$store.state.gender){
//             this.errors.push('Please enter your gender!');
//             return false;
//          }
        
//           if(!this.$store.state.devType){
//              this.errors.push('Please select a developer type.');
//              return false;
//           }
//       }
//       if(this.step == 3){
         
//       }
//       this.step++;  
//      }
//    },
   
   
//    computed: {
//     store(){
//       return this.$store.state
//     }
//    }
   
   
   
//  })