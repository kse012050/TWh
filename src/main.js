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
import AdminNotices from './pages/admin/AdminNotices'
import NoticesList from './pages/admin/NoticesList'
import NoticesDetail from './pages/admin/NoticesDetail'
import NoticesInput from './pages/admin/NoticesInput'
import AdminBoard from './pages/admin/AdminBoard'
import BoardList from './pages/admin/BoardList'
import BoardInput from './pages/admin/BoardInput'
import AdminInquiry from './pages/admin/AdminInquiry'
import InquiryList from './pages/admin/InquiryList'
import InquiryDetail from './pages/admin/InquiryDetail'
import InquiryInput from './pages/admin/InquiryInput'

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
        path: '/admins', component: AdminRoot,
        children: [
            {
                path: 'notices',
                component: AdminNotices,
                children: [
                    {
                        path: '',
                        component: NoticesList
                    },
                    {
                        path: 'detail/:id',
                        component: NoticesDetail
                    },
                    {
                        path: 'input/:id',
                        component: NoticesInput
                    },
                ]
            },
            {
                path: 'board',
                component: AdminBoard,
                children: [
                    {
                        path: '',
                        component: BoardList
                    },
                    {
                        path: 'input',
                        component: BoardInput
                    },
                    {
                        path: 'input/:id',
                        component: BoardInput
                    },
                ]
            },
            {
                path: 'inquiry',
                component: AdminInquiry,
                children: [
                    {
                        path: '',
                        component: InquiryList
                    },
                    {
                        path: 'detail/:id',
                        component: InquiryDetail
                    },
                    {
                        path: 'input',
                        component: InquiryInput
                    },
                    {
                        path: 'input/:id',
                        component: InquiryInput
                    }
                ]
            },
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

