<template>
    <section class="boardListPage contentSize">
        <h2>게시판 관리</h2>

        <div class="admin-tab">
            <button class="active">전체(99)</button>
            <button>보도자료(33)</button>
            <button>블로그(66)</button>
        </div>
        <div class="admin-board-title">
            <b>No.</b>
            <b>카테고리</b>
            <b>제목</b>
            <b>내용</b>
            <b>작성일시</b>
            <b>노출여부</b>
        </div>
        <ul class="admin-board-list" data-noneListText="작성된 게시판이 없습니다.">
            <li v-for="data in boardList" :key="data.id">
                <a :href="`board/input/${data.id}`">
                    <span>{{ data.id }}</span>
                    <span>{{ data.type !== 'BLOG' ? '보도자료' : '블로그' }}</span>
                    <p>{{ data.title }}</p>
                    <p>{{ data.description }}</p>
                    <time>
                        2023.12.01<br>
                        12:34:56
                    </time>
                    <span>{{ data.useYn === "Y" ? '노출' : '비노출' }}</span>
                </a>
            </li>
            <!-- <li>
                <a href="board/input/0">
                    <span>999</span>
                    <span>보도자료</span>
                    <p>재생에너지 전력거래 전문 합작법인‘한화 신 한 테라와트아워’출범</p>
                    <p>[헤럴드경제=김은희 기자] 한화와 신한이 세운 재생에너지 전력거래 전문 합작법인 ‘한화 신한 테라와트아워’...</p>
                    <time>
                        2023.12.01<br>
                        12:34:56
                    </time>
                    <span>노출</span>
                </a>
            </li> -->
        </ul>
        <div class="content-btn">
            <router-link to="board/input" class="btn-black">작성</router-link>
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
    name: 'BoardList',
    data() {
        return {
            tabName: 'All',
            boardList: [],
            allList: [],
            newsList: [],
            blogList: [],
            page: Number(this.$route.query.page) || 1,
            lastPage: undefined
        }
    },
    methods: {

    },
    mounted(){
        api.admin('list',{type: 'boards', page: 1})
            .then((result)=>{
                if(result.statusCode === '200'){
                    this.allList = [...result.list]
                }
            })
        api.admin('list',{type: 'boards', page: 1, listType: 'NEWS'})
            .then((result)=>{
                if(result.statusCode === '200'){
                    this.newsList = [...result.list]
                }
            })
        api.admin('list',{type: 'boards', page: 1, listType: 'BLOG'})
            .then((result)=>{
                if(result.statusCode === '200'){
                    this.blogList = [...result.list]
                }
            })

    }
}
</script>
<style lang="">
    
</style>