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
            <li v-for="data in noticeList" :key="data.id">
                <a :href="`notices/input/${data.id}`">
                    <span>{{ data.id }}</span>
                    <div><img :src="data.medias[0]?.imageurl" alt="미리 보기 이미지"></div>
                    <p>{{ data.description }}</p>
                    <time>
                        {{ data.startdate[0] }}<br>
                        {{ data.startdate[1] }}
                    </time>
                    <span>{{ data.useYn === "Y" ? '노출' : '비노출' }}</span>
                </a>
            </li>
        </ul>
        <div class="content-btn">
            <button class="btn-black">작성</button>
        </div>
        <list-pager :page="page" :lastPage="lastPage"/>
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
            page: Number(this.$route.params.page) || 1,
            lastPage: undefined
        }
    },
    methods: {

    },
    mounted() {
        console.log(Math.floor(3 / 5));
        api.admin('list',{type: 'notice', page: this.page})
            .then((result)=>{
                this.noticeList = [...result.list]
                this.noticeList.forEach((arr)=>{
                    arr.startdate = arr.startdate.split('T');
                    arr.startdate[0] = arr.startdate[0].replaceAll('-','.')
                    arr.startdate[1] = arr.startdate[1].replace('.000Z','')
                })
                this.lastPage = result.meta.last_page
            })

    }
}
</script>
<style lang="">
    
</style>