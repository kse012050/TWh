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
// import NoticesDetail from './pages/admin/NoticesDetail'
import NoticesInput from './pages/admin/NoticesInput'
import AdminBoard from './pages/admin/AdminBoard'
import BoardList from './pages/admin/BoardList'
import BoardInput from './pages/admin/BoardInput'
import AdminInquiry from './pages/admin/AdminInquiry'
import InquiryList from './pages/admin/InquiryList'
import InquirySearch from './pages/admin/InquirySearch'
import InquiryDetail from './pages/admin/InquiryDetail'
import InquiryInput from './pages/admin/InquiryInput'

const routes = [
    {path: '/', component: UserRoot,
        children: [
            {
                path: '/',
                name: 'TWh - 한화 신한 테라와트아워',
                component: Main,
            },
            {
                path: '/company',
                name: '기업 소개 - TWh',
                component: Company,
                meta: { requiresAuth: true },
            },
            {
                path: '/solution',
                name: '전력거래 솔루션 - TWh',
                component: Solution
            },
            {
                path: '/recruit',
                name: '발전자원 모집 - TWh',
                component: Recruit
            },
            {
                path: '/board',
                name: '게시판 - TWh',
                component: Board
            },
            {
                path: '/boardDetail/:id',
                name: '게시판 상세 - TWh',
                component: BoardDetail
            },
            {
                path: '/inquiry',
                name: '사업 문의 - TWh',
                component: Inquiry
            }
        ]
    },
    {path: '/admin', name: '관리자 로그인 - TWh', component: SignIn},
    {
        path: '/admins', component: AdminRoot,
        children: [
            {
                path: 'notices',
                component: AdminNotices,
                children: [
                    {
                        path: '',
                        name: '공지사항 관리 - 관리자 - TWh',
                        component: NoticesList
                    },
                    {
                        path: ':page',
                        name: '공지사항 - 관리자 - TWh',
                        component: NoticesList
                    },
                    {
                        path: 'input',
                        name: '공지사항 작성 - 관리자 - TWh',
                        component: NoticesInput
                    },
                    {
                        path: 'input/:id',
                        name: '공지사항 수정 - 관리자 - TWh',
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
                        name: '게시판 관리 - 관리자 - TWh',
                        component: BoardList
                    },
                    {
                        path: ':page',
                        name: '게시판 - 관리자 - TWh',
                        component: BoardList
                    },
                    {
                        path: 'input',
                        name: '게시판 작성 - 관리자 - TWh',
                        component: BoardInput
                    },
                    {
                        path: 'input/:id',
                        name: '게시판 수정 - 관리자 - TWh',
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
                        name: '사업 문의 관리 - 관리자 - TWh',
                        component: InquiryList
                    },
                    {
                        path: ':page',
                        name: '사업 문의 - 관리자 - TWh',
                        component: InquiryList
                    },
                    {
                        path: 'search',
                        name: '사업 문의 검색 결과 - 관리자 - TWh',
                        component: InquirySearch
                    },
                    {
                        path: 'search/:page',
                        name: '사업 문의 검색 - 관리자 - TWh',
                        component: InquirySearch
                    },
                    {
                        path: 'detail/:id',
                        name: '사업 문의 상세 - 관리자 - TWh',
                        component: InquiryDetail
                    },
                    {
                        path: 'input',
                        name: '',
                        component: InquiryInput
                    },
                    {
                        path: 'input/:id',
                        name: '사업 문의 수정 - 관리자 - TWh',
                        component: InquiryInput
                    }
                ]
            },
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from) {
        if(to.fullPath === from.fullPath){
            return;
        }
        return { top: 0 }
    },
    routes
})

const app = createApp(App);
app.use(router);
app.mount('#app');

