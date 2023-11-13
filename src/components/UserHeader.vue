<template>
    <header>
        <div>
            <h1><router-link to="/" class="logo">한화 신한 테라와트아워 로고 이미지</router-link></h1>
            <nav :class="{active: isMenu}">
                <ul>
                    <li><router-link to="/">홈</router-link></li>
                    <li><router-link to="/company">기업 소개</router-link></li>
                    <li><router-link to="/solution">전력거래 솔루션</router-link></li>
                    <li><router-link to="/recruit">발전자원 모집</router-link></li>
                    <li><router-link to="/board">게시판</router-link></li>
                    <li><router-link to="/inquiry">사업 문의</router-link></li>
                </ul>
                <button @click="isMenu = !isMenu">메뉴 닫기</button>
            </nav>
            <button @click="isMenu = !isMenu">메뉴 열기</button>
        </div>
    </header>
</template>
<script>
export default {
    name: 'UserHeader',
    data(){
        return {
            isMenu: false
        }
    },
    methods: {
        headerStyle(){
            const header = document.querySelector('header');
            this.$route.path === '/' ? header.classList.add('white') : header.classList.remove('white')
        },
    },
    mounted() {
        this.headerStyle();
    },
    watch: {
        '$route' () {
            this.headerStyle();
        }
    }
}
</script>
<style>
    
</style>