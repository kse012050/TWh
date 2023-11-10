import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './css/import.css'
import Main from './pages/MainPage'
import Company from './pages/CompanyPage'
import Solution from './pages/SolutionPage'
import Recruit from './pages/RecruitPage'
import Board from './pages/BoardPage'
import BoardDetail from './pages/BoardDetail'
import Inquiry from './pages/InquiryPage'

const routes = [
    { path: '/', component: Main},
    { path: '/company', component: Company},
    { path: '/solution', component: Solution},
    { path: '/recruit', component: Recruit},
    { path: '/board', component: Board},
    { path: '/boardDetail/:id', component: BoardDetail},
    { path: '/inquiry', component: Inquiry},
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior() {
        return { top: 0 }
    },
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');

