<template>
    <section class="inquiryListPage contentSize">
        <h2>사업 문의 관리</h2>

        <div class="admin-tab">
            <router-link to="/admins/inquiry/1" :class="{active: listType === ''}">전체({{this.listTotal.all}})</router-link>
            <router-link to="/admins/inquiry/1?type=GENERAL" :class="{active: listType === 'GENERAL'}">일반({{this.listTotal.general}})</router-link>
            <router-link to="/admins/inquiry/1?type=RE100" :class="{active: listType === 'RE100'}">RE100({{this.listTotal.re100}})</router-link>
            <router-link to="/admins/inquiry/1?type=RECURUT" :class="{active: listType === 'RECURUT'}">발전소 매입({{this.listTotal.recurut}})</router-link>
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
            <li v-for="(data, idx) in inquiryList" :key="data.id">
                <router-link :to="`/admins/inquiry/input/${data.id}`">
                    <span>{{ idx + 1 }}</span>
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
                    <button @click="(e)=>detailMove(e, data.id)">상세보기</button>
                    <span :class="
                        {
                            unread: data.inquirystate === '1',
                            noReply: data.inquirystate === '2'
                        }
                    ">
                        {{
                            data.inquirystate === '1' ? '읽지 않음' :
                                (data.inquirystate === '2' ? '회신 안함' :
                                    '회신 완료')
                        }}
                        <!-- {{ data.inquirystate }} -->
                    </span>
                </router-link>
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
        <list-pager :page="page" :lastPage="lastPage"/>
    </section>
</template>
<script>
import ListPager from '@/components/admin/ListPager.vue';
import * as api from '../../api/api'

export default {
    name: 'InquiryList',
    components: { ListPager },
    data() {
        return {
            tabName: 'All',
            inquiryList: [],
            listTotal: {
                all: undefined,
                general: undefined,
                re100: undefined,
                recurut: undefined,
            },
            page: Number(this.$route.params.page) || 1,
            listType: this.$route.query.type || '',
            lastPage: undefined
        }
    },
    methods: {
        detailMove(e, id){
            e.preventDefault();
            this.$router.push({path: `/admins/inquiry/detail/${id}`})
        },
        list(){
            this.listType = this.$route.query.type || ''
            api.admin('list',{type: 'inquiry', page: this.page, listType: this.listType})
                .then((result)=>{
                    if(result.statusCode === '200'){
                        this.inquiryList = [...result.list]
                        this.lastPage = result.meta.last_page
                    }
                })
        }
    },
    mounted(){
        api.admin('list',{type: 'inquiry', page: 1})
            .then((result)=>{
                if(result.statusCode === '200'){
                    this.listTotal['all'] = result.meta.total
                }
            })
        api.admin('list',{type: 'inquiry', page: 1, listType: 'GENERAL'})
            .then((result)=>{
                if(result.statusCode === '200'){
                    this.listTotal['general'] = result.meta.total
                }
            })
        api.admin('list',{type: 'inquiry', page: 1, listType: 'RE100'})
            .then((result)=>{
                if(result.statusCode === '200'){
                    this.listTotal['re100'] = result.meta.total
                }
            })
        api.admin('list',{type: 'inquiry', page: 1, listType: 'RECURUT'})
            .then((result)=>{
                if(result.statusCode === '200'){
                    this.listTotal['recurut'] = result.meta.total
                }
            })
        this.list();
    },
    watch: {
        '$route' (to) {
            if(to.path.includes('inquiry') && this.page){
                this.list();
            }
        }
    }
}
</script>
<style lang="">
    
</style>