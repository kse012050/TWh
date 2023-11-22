<template>
    <section class="boardListPage contentSize">
        <h2>게시판 관리</h2>

        <div class="admin-tab">
            <router-link to="/admins/board/1" :class="{active: listType === ''}">전체({{this.listTotal.all}})</router-link>
            <router-link to="/admins/board/1?type=NEWS" :class="{active: listType === 'NEWS'}">보도자료({{this.listTotal.news}})</router-link>
            <router-link to="/admins/board/1?type=BLOG" :class="{active: listType === 'BLOG'}">블로그({{this.listTotal.blog}})</router-link>
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
            <li v-for="(data, idx) in boardList" :key="data.id">
                <router-link :to="`/admins/board/input/${data.id}`">
                    <span>{{ idx + 1 + ((page - 1) * 20) }}</span>
                    <span>{{ data.type !== 'BLOG' ? '보도자료' : '블로그' }}</span>
                    <p>{{ data.title }}</p>
                    <p>{{ data.description }}</p>
                    <time>
                        {{ data.regymdt[0] }}<br>
                        {{ data.regymdt[1] }}
                    </time>
                    <span>{{ data.exposeyn === "Y" ? '노출' : '비노출' }}</span>
                </router-link>
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
            <router-link to="/admins/board/input" class="btn-black">작성</router-link>
        </div>
        <list-pager :page="page" :lastPage="lastPage" :listType="listType" :pageName="pageName"/>
    </section>
</template>
<script>
import ListPager from '@/components/admin/ListPager.vue'
import * as api from '../../api/api'

export default {
    name: 'BoardList',
    components: { ListPager },
    data() {
        return {
            tabName: 'All',
            boardList: [],
            listTotal: {
                all: undefined,
                news: undefined,
                blog: undefined,
            },
            pageName: 'board',
            page: Number(this.$route.params.page) || 1,
            listType: this.$route.query.type || '',
            lastPage: undefined
        }
    },
    methods: {
        list(){
            this.page= Number(this.$route.params.page) || 1;
            this.listType = this.$route.query.type || '';
            api.admin('list',{type: 'boards', page: this.page, listType: this.listType})
                .then((result)=>{
                    if(result.statusCode === '200'){
                        this.boardList = [...result.list]
                        this.boardList.forEach((arr)=>{
                            arr.regymdt = arr.regymdt.split('T');
                            arr.regymdt[0] = arr.regymdt[0].replaceAll('-','.')
                            arr.regymdt[1] = arr.regymdt[1].replace('.000Z','')
                        })
                        this.lastPage = result.meta.last_page
                    }
                })
        }
    },
    mounted(){
        api.admin('list',{type: 'boards', page: 1})
            .then((result)=>{
                if(result.statusCode === '200'){
                    this.listTotal['all'] = result.meta.total
                }
            })
        api.admin('list',{type: 'boards', page: 1, listType: 'NEWS'})
            .then((result)=>{
                if(result.statusCode === '200'){
                    this.listTotal['news'] = result.meta.total
                }
            })
        api.admin('list',{type: 'boards', page: 1, listType: 'BLOG'})
            .then((result)=>{
                if(result.statusCode === '200'){
                    this.listTotal['blog'] = result.meta.total
                }
            })
        this.list();
    },
    watch: {
        '$route' (to) {
            if(to.path.includes('board') && this.page){
                this.list();
            }
        }
    }
}
</script>
<style lang="">
    
</style>