<template>
    <section class="boardPage contentSize">
        <h2 data-textAni="0">게시판</h2>
        <div data-aniDelay="4">
            <button :class="{active: tabName === 'NEWS'}" @click.prevent="tabClick('NEWS')">뉴스</button>
            <button :class="{active: tabName === 'BLOG'}" @click.prevent="tabClick('BLOG')">블로그</button>
        </div>
        <ul class="user-board">
            <template v-for="(data, idx) in showList" :key="data.id">
                <li v-if="idx + 1 <= showCount">
                    <router-link :to="`/boardDetail/${data.id}`">
                        <img v-if="data.medias.length" :src="data.medias[0].imageurl" alt="">
                        <small>
                            {{
                                data.type === "NEWS" ? '보도자료' : '인터뷰'
                            }}
                        </small>
                        <p>{{ data.title }}</p>
                    </router-link>
                </li>
            </template>
        </ul>
        <button class="btn-border" v-if="showList.length > showCount" @click.prevent="showMore">더보기</button>
    </section>
</template>
<script>
import * as api from '../api/api'

export default {
    name: 'BoardPage',
    data(){
        return{
            tabName: 'NEWS',
            showList: [],
            newsList: [],
            blogList: [],
            showCount: 9
        }
    },
    methods: {
        list(){
            api.user('list',{type: 'board'})
                .then((result)=>{
                    if(result.statusCode === '200'){
                        this.newsList = [...result.list.filter((value)=> value.type === 'NEWS')];
                        this.blogList = [...result.list.filter((value)=> value.type === 'BLOG')];
                        this.showList = [...this.newsList]
                        // this.tabClick(this.tabName);
                    }
                })
        },
        tabClick(value){
            this.tabName = value;
            this.tabName === 'NEWS' && (this.showList = [...this.newsList]);
            this.tabName === 'BLOG' && (this.showList = [...this.blogList]);
            document.querySelector('.user-board').classList.add('test');
            document.querySelector('.user-board').classList.remove('test01');
            setTimeout(()=>{
                document.querySelector('.user-board').classList.add('test01');
            },10)
        },
        showMore(){
            this.showCount += 3;
        }
    },
    mounted(){
        this.list();
        setTimeout(()=>{
            document.querySelector('.boardPage').classList.add('active');
        },10)
    }
}
</script>
<style>
    .boardPage > div{opacity: 0; transform: translateY(100%); transition-property: transform, opacity; transition-duration: 0.6s; transition-delay: var(--aniDelay);}
    .boardPage.active > div{opacity: 1; transform: translateY(0);}
    .boardPage ul{--aniDelay: 0.6s; opacity: 0; transform: translateY(50%); transition-property: transform, opacity; transition-duration: 0.6s; transition-delay: var(--aniDelay);}
    .boardPage.active ul{opacity: 1; transform: translateY(0);}
    .boardPage.active ul.test{--aniDelay: 0s; opacity: 0; transform: translateY(50%); transition-duration: 0s;}
    .boardPage.active ul.test.test01{opacity: 1; transform: translateY(0); transition-duration: 0.6s;}
</style>