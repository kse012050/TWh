<template>
    <div class="adminsPage">
        <header>
            <div>
                <h1>한화 신한 테라와트아워</h1>
                <ul>
                    <li><router-link to="noticesList">공지사항 관리</router-link></li>
                    <li><router-link to="boardList">게시판 관리</router-link></li>
                    <li><router-link to="inquiryList">사업 문의 관리</router-link></li>
                </ul>
            </div>
        </header>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>