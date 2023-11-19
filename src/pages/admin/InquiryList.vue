<template>
    <section class="inquiryListPage contentSize">
        <h2>사업 문의 관리</h2>

        <div class="admin-tab">
            <button :class="tabName === 'All' ? 'active' :''" @click="tabClick('All')">전체({{this.allList.length}})</button>
            <button :class="tabName === 'GENERAL' ? 'active' :''" @click="tabClick('GENERAL')">일반({{this.generalList.length}})</button>
            <button :class="tabName === 'RE100' ? 'active' :''" @click="tabClick('RE100')">RE100({{this.re100List.length}})</button>
            <button :class="tabName === 'RECURUT' ? 'active' :''" @click="tabClick('RECURUT')">발전소 매입({{this.recurutList.length}})</button>
            <div class="search">
                <input type="search" placeholder="검색어를 입력하세요.">
                <button>검색</button>
            </div>
        </div>
        <div class="admin-board-title">
            <b>No.</b>
            <b>성함</b>
            <b>회사</b>
            <b>연락처</b>
            <b>이메일</b>
            <b>상담목적</b>
            <b>개인정보이용방침 동의</b>
            <b>마케팅 정보 수신 동의</b>
            <b>상세보기</b>
            <b>회신 여부</b>
        </div>
        <ul class="admin-board-list" data-noneListText="작성된 사업문의가 없습니다.">
            <li v-for="data in inquiryList" :key="data.id">
                <a :href="`inquiry/input/${data.id}`">
                    <span>{{ data.id }}</span>
                    <span>{{ data.name }}</span>
                    <span>{{ data.company }}</span>
                    <span>{{ data.phonenum }}</span>
                    <button>{{ data.email }}</button>
                    <span>{{ 
                        data.consultpurpose === 'GENERAL' ? '일반' :
                            data.consultpurpose === 'RE100' ? 'RE100' :
                                data.consultpurpose === 'RECURUT' && '발전소 매입'
                    }}</span>
                    <span>{{ data.privacyagree ? '동의' : '비동의' }}</span>
                    <span>{{ data.maketagree ? '동의' : '비동의' }}</span>
                    <button @click="detailMove">상세보기</button>
                    <span class="unread">읽지 않음</span>
                </a>
            </li>
          <!--   <li>
                <a href="inquiry/input/0">
                    <span>999</span>
                    <span>홍길동</span>
                    <span>한화컨버전스</span>
                    <span>010-3333-5555</span>
                    <button>afdsfadsfasdfasdfasdf@gmail.com</button>
                    <span>발전소 매입</span>
                    <span>동의</span>
                    <span>미동의</span>
                    <button @click="detailMove">상세보기</button>
                    <span class="unread">읽지 않음</span>
                </a>
            </li>
            <li>
                <a href="inquiry/input/0">
                    <span>999</span>
                    <span>홍길동</span>
                    <span>한화컨버전스</span>
                    <span>010-3333-5555</span>
                    <button>afdsfadsfasdfasdfasdf@gmail.com</button>
                    <span>발전소 매입</span>
                    <span>동의</span>
                    <span>미동의</span>
                    <button>상세보기</button>
                    <span>회신 완료</span>
                </a>
            </li>
            <li>
                <a href="inquiry/input/0">
                    <span>999</span>
                    <span>홍길동</span>
                    <span>한화컨버전스</span>
                    <span>010-3333-5555</span>
                    <button>afdsfadsfasdfasdfasdf@gmail.com</button>
                    <span>발전소 매입</span>
                    <span>동의</span>
                    <span>미동의</span>
                    <button>상세보기</button>
                    <span class="noReply">회신 안함</span>
                </a>
            </li> -->
        </ul>
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
    data() {
        return {
            tabName: 'All',
            inquiryList: [],
            allList: [],
            generalList: [],
            re100List: [],
            recurutList: [],
        }
    },
    methods: {
        detailMove(e){
            e.preventDefault();
            this.$router.push({path: '/admins/inquiry/detail/0'})
        },
        tabClick(value){
            this.tabName = value;
            this.tabName === 'All' && (this.inquiryList = [...this.allList]);
            this.tabName === 'GENERAL' && (this.inquiryList = [...this.generalList]);
            this.tabName === 'RE100' && (this.inquiryList = [...this.re100List]);
            this.tabName === 'RECURUT' && (this.inquiryList = [...this.recurutList]);
            console.log(this.tabName);
        }
    },
    mounted(){
        api.admin('list',{type: 'inquiry', page: 1})
            .then((result)=>{
                if(result.statusCode === '200'){
                    this.inquiryList = [...result.list];
                    this.allList = [...result.list];
                    this.generalList = result.list.filter((value)=>value.consultpurpose === 'GENERAL');
                    this.re100List = result.list.filter((value)=>value.consultpurpose === 'RE100');
                    this.recurutList = result.list.filter((value)=>value.consultpurpose === 'RECURUT');
                }
            })
    }
}
</script>
<style lang="">
    
</style>