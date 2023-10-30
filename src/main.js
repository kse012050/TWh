import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Main from './pages/MainPage'
import Solution from './pages/SolutionPage'
import Recruit from './pages/RecruitPage'
import Board from './pages/BoardPage'
import Inquiry from './pages/InquiryPage'

const routes = [
    { path: '/', component: Main},
    { path: '/solution', component: Solution},
    { path: '/recruit', component: Recruit},
    { path: '/board', component: Board},
    { path: '/inquiry', component: Inquiry},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');

