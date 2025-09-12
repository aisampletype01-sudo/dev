import { createRouter, createWebHashHistory } from 'vue-router';

import main from '@/views/pages/main.vue'
import sub1 from '@/views/pages/subPage.vue'
import sub2 from '@/views/pages/subPage2.vue'

const routes = [
    {
        path:'/',
        name:'main',
        props:true,
        component: main
    },
    {
        path:'/sub1',
        name:'subpage',
        props:true,
        component: sub1
    },
    {
        path:'/sub2',
        name:'subpage2',
        props:true,
        component: sub2
    }
]

const router = createRouter({
  // history: createWebHashHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
});

export default router;