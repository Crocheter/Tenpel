import { createRouter, createWebHistory} from 'vue-router';
import Index from '../views/Index/index.vue';
import Campus from '../views/Campus/index.vue';
import Template from '../views/Templates/index.vue';
import PrintDlcf from '../views/Campus/print.vue';

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        { path:'/', component: Index},
        { path:'/campus', component: Campus},
        { path:'/template', component: Template},
        { path:'/printcampus', component: PrintDlcf}
    ]
})

export default routes;