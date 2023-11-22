<template>
    <section class="noticesListPage contentSize">
        <h2>공지사항 관리</h2>
        <div class="admin-board-title">
            <b>No.</b>
            <b>이미지</b>
            <b>설명</b>
            <b>작성일시</b>
            <b>노출여부</b>
        </div>
        <ul class="admin-board-list" data-noneListText="작성된 공지사항이 없습니다.">
            <li v-for="(data, idx) in noticeList" :key="data.id">
                <router-link :to="`/admins/notices/input/${data.id}`">
                    <span>{{ idx + 1 + ((page - 1) * 20) }}</span>
                    <div><img :src="data.medias[0]?.imageurl" alt="미리 보기 이미지"></div>
                    <p>{{ data.description }}</p>
                    <time>
                        {{ data.regymdt[0] }}<br>
                        {{ data.regymdt[1] }}
                    </time>
                    <span>{{ data.exposeyn === "Y" ? '노출' : '비노출' }}</span>
                </router-link>
            </li>
        </ul>
        <div class="content-btn">
            <router-link to="/admins/notices/input" class="btn-black">작성</router-link>
        </div>
        <list-pager :page="page" :lastPage="lastPage" :listType="listType" :pageName="pageName"/>
    </section>
</template>
<script>
import ListPager from '@/components/admin/ListPager.vue';
import * as api from '../../api/api'

export default {
    components: { ListPager },
    name: 'NoticesList',
    data(){
        return{
            noticeList: [],
            pageName: 'notices',
            page: Number(this.$route.params.page) || 1,
            listType: this.$route.query.type || '',
            lastPage: undefined
        }
    },
    methods: {

    },
    mounted() {
        this.page= Number(this.$route.params.page) || 1;
        this.listType = this.$route.query.type || '';
        api.admin('list',{type: 'notice', page: this.page})
            .then((result)=>{
                if(result.statusCode === '200'){
                    this.noticeList = [...result.list]
                    this.noticeList.forEach((arr)=>{
                        arr.regymdt = arr.regymdt.split('T');
                        arr.regymdt[0] = arr.regymdt[0].replaceAll('-','.')
                        arr.regymdt[1] = arr.regymdt[1].replace('.000Z','')
                    })
                    this.lastPage = result.meta.last_page
                }
            })

    }
}
</script>
<style lang="">
    
</style>