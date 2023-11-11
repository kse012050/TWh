import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './css/import.css'
import Main from './pages/MainPage'
import UserRoot from './pages/UserRoot'
import Company from './pages/CompanyPage'
import Solution from './pages/SolutionPage'
import Recruit from './pages/RecruitPage'
import Board from './pages/BoardPage'
import BoardDetail from './pages/BoardDetail'
import Inquiry from './pages/InquiryPage'
import SignIn from './pages/admin/SignIn'
import AdminRoot from './pages/admin/AdminRoot'
import NoticesList from './pages/admin/NoticesList'
import NoticesDetail from './pages/admin/NoticesDetail'
import NoticesInput from './pages/admin/NoticesInput'

const routes = [
    {path: '/', component: UserRoot,
        children: [
            {
                path: '/',
                component: Main
            },
            {
                path: '/company',
                component: Company
            },
            {
                path: '/solution',
                component: Solution
            },
            {
                path: '/recruit',
                component: Recruit
            },
            {
                path: '/board',
                component: Board
            },
            {
                path: '/boardDetail/:id',
                component: BoardDetail
            },
            {
                path: '/inquiry',
                component: Inquiry
            }
        ]
    },
    {path: '/admin', component: SignIn},
    {
        path: '/admins/', component: AdminRoot,
        children: [
            {
                path: 'noticesList',
                component: NoticesList
            },
            {
                path: 'noticesDetail',
                component: NoticesDetail
            },
            {
                path: 'noticesInput',
                component: NoticesInput
            }
        ]
    }
    // { path: '/', component: Main},
    // { path: '/company', component: Company},
    // { path: '/solution', component: Solution},
    // { path: '/recruit', component: Recruit},
    // { path: '/board', component: Board},
    // { path: '/boardDetail/:id', component: BoardDetail},
    // { path: '/inquiry', component: Inquiry},
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

