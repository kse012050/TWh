<template>
    <div class="adminsPage">
        <header>
            <div>
                <h1>한화 신한 테라와트아워</h1>
                <ul>
                    <li><router-link to="/admins/notices">공지사항 관리</router-link></li>
                    <li><router-link to="/admins/board">게시판 관리</router-link></li>
                    <li><router-link to="/admins/inquiry">사업 문의 관리</router-link></li>
                </ul>
                <button @click="logout">로그아웃</button>
            </div>
        </header>
        <modal-logout v-if="isLogout"/>
        <router-view></router-view>
    </div>
</template>
<script>
import { globalStyle } from '../../css/style.js'
import ModalLogout from '@/components/modal/ModalLogout.vue'

export default {
    name: 'AdminRoot',
    components: { ModalLogout },
    data(){
        return{
            isLogout: false
        }
    },
    methods: {
        logout(){
            this.isLogout = true
            sessionStorage.removeItem('adminName')
            sessionStorage.removeItem('token')
        },
    },
    mounted() {
        !sessionStorage.getItem('token') && this.$router.push({path: '/admin'})
        globalStyle();
    },
    updated(){
        globalStyle();
    },

}
</script>
<style>
    
</style>