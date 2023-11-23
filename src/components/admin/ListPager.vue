<template>
    <div class="admin-board-pager" data-styleIdx="a">
        <router-link :to="`/admins/${pageName}/1${type}`">첫 페이지</router-link>
        <router-link :to="`/admins/${pageName}/${page === 1 ? 1 : Number(page) - 1}${type}`">이전 페이지</router-link>
        <ol>
            <template v-for="n in 5" :key="n">
                <li v-if="pageNumber(n) <= lastPage" :class="[{active: pageNumber(n) === page}]">
                    <router-link :to="`/admins/${pageName}/${pageNumber(n)}${type}`">
                        {{ pageNumber(n) }}
                    </router-link>
                </li>
            </template>
        </ol>
        <router-link :to="`/admins/${pageName}/${page === lastPage ? lastPage : Number(page) + 1}${type}`">다음 페이지</router-link>
        <router-link :to="`/admins/${pageName}/${lastPage}${type}`">마지막 페이지</router-link>
    </div>
</template>
<script>
export default {
    name: 'ListPager',
    props: {
        pageName: String,
        page: Number,
        lastPage: Number,
        listType: String,
        listSearch: String
    },
    data(){
        return{
            type: undefined,
            search: this.$route.query.search
        }
    },
    methods: {
        pageNumber(n){
            return Math.floor((this.page - 1) / 5) * 5 + n;
        }
    },
    updated(){
        this.listType && (this.type = `?type=${this.listType}`);
        this.search && (this.type = `?search=${this.search}`);
        // this.type = this.listType ? `?type=${this.listType}` :  '';
        // this.search && (this.type = `?search=${this.search}`);
    }
}
</script>
<style>
    
</style>