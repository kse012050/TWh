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
                        2023.12.01<br>
                        12:34:56
                    </time>
                    <span>{{ data.useYn === "Y" ? '노출' : '비노출' }}</span>
                </a>
            </li>
        </ul>
        <div class="content-btn">
            <button class="btn-black">작성</button>
        </div>
        <div class="admin-board-pager" data-styleIdx="a">
            <a href="">첫 페이지</a>
            <a href="">이전 페이지</a>
            <ol>
                <li class="active"><a href="">1</a></li>
                <li><a href="">2</a></li>
                <li><a href="">3</a></li>
                <li><a href="">4</a></li>
                <li><a href="">5</a></li>
            </ol>
            <a href="">다음 페이지</a>
            <a href="">마지막 페이지</a>
        </div>
    </section>
</template>
<script>
import * as api from '../../api/api'

export default {
    name: 'NoticesList',
    data(){
        return{
            noticeList: [],
        }
    },
    methods: {

    },
    mounted() {
        api.admin('list',{type: 'notice', page: 1})
            .then((result)=>{
                this.noticeList = {...result.list}
            })

    }
}
</script>
<style lang="">
    
</style>