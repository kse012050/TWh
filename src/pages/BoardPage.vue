<template>
    <section class="boardPage contentSize">
        <h2 data-textAni>게시판</h2>
        <div data-animate="bottomToTop" data-aniDelay="4">
            <button :class="{active: tabName === 'NEWS'}" @click.prevent="tabClick('NEWS')">뉴스</button>
            <button :class="{active: tabName === 'BLOG'}" @click.prevent="tabClick('BLOG')">블로그</button>
            <button :class="{active: tabName === 'BUSINESS'}" @click.prevent="tabClick('BUSINESS')">경영공시</button>
        </div>
        <ul class="user-board" data-animate="bottomToTop" data-aniDelay="8">
            <template v-for="(data, idx) in showList" :key="data.id">
                <li v-if="idx + 1 <= showCount">
                    <router-link :to="`/boardDetail/${data.id}`">
                        <img v-if="data.medias.length" :src="data.medias[0].imageurl" :alt="`${data.title} 이미지`" onerror="this.onerror=null; this.src='../images/thumbnail.png'">
                        <small>
                            {{ data.type === 'NEWS' ? '보도자료' : ''}}
                            {{ data.type === 'BLOG' ? '인터뷰' : ''}}
                            {{ data.type === 'BUSINESS' ? '경영공시' : ''}}
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
            businessList: [],
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
                        this.businessList = [...result.list.filter((value)=> value.type === 'BUSINESS')];
                        this.showList = [...this.newsList]
                    }
                })
        },
        tabClick(value){
            this.tabName = value;
            this.tabName === 'NEWS' && (this.showList = [...this.newsList]);
            this.tabName === 'BLOG' && (this.showList = [...this.blogList]);
            this.tabName === 'BUSINESS' && (this.showList = [...this.businessList]);
            document.querySelector('.user-board').removeAttribute('style');
            document.querySelector('.user-board').classList.add('changeTab');
            setTimeout(()=>{
                document.querySelector('.user-board').classList.remove('changeTab');
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
   .boardPage .user-board.changeTab{opacity: 0; transform: translateY(30%); transition-duration: 0s;}
</style>