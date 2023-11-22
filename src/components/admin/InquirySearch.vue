<template>
    <div class="search">
        <input type="search" placeholder="검색어를 입력하세요." v-model="searchValue">
        <router-link :to="`/admins/inquiry/search?search=${searchValue}`">검색</router-link>
    </div>
</template>
<script>
export default {
    name: 'InquirySearch',
    data(){
        return{
            searchValue: ''
        }
    },
    methods: {
       
    }
}
</script>
<style>
    
</style>