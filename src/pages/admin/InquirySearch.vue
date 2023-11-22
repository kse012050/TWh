<template>
    <section class="inquiryListPage contentSize">
        <h2>사업 문의 관리</h2>

        <div class="admin-tab">
            <p>총 {{ total }}건이 검색되었습니다.</p>
            <inquiry-search />
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
                    <span>{{ idx + 1 + ((page - 1) * 20) }}</span>
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
        </ul>
        <list-pager :page="page" :lastPage="lastPage" :listSearch="listSearch" :pageName="pageName"/>
    </section>
</template>
<script>
import * as api from '../../api/api'
import ListPager from '@/components/admin/ListPager.vue';
import InquirySearch from '@/components/admin/InquirySearch.vue';

export default {
    name: 'InquiryList',
    components: { 
        ListPager,
        InquirySearch
    },
    data() {
        return {
            tabName: 'All',
            inquiryList: [],
            pageName: 'inquiry/search',
            page: Number(this.$route.params.page) || 1,
            listSearch: this.$route.query.search,
            lastPage: undefined,
            total: undefined
        }
    },
    methods: {
        detailMove(e, id){
            e.preventDefault();
            this.$router.push({path: `/admins/inquiry/detail/${id}`})
        },
        list(){
            this.page = Number(this.$route.params.page) || 1;
            this.listSearch = this.$route.query.search;
            api.admin('search',{type: 'inquiry', word: this.$route.query.search})
                .then((result)=>{
                    if(result.statusCode === '200'){
                        this.lastPage = Math.floor(result.list.length / 20) + 1;
                        this.total = result.list.length
                        this.inquiryList = result.list.splice((this.page - 1) * 20, 20)
                    }
                })
        }
    },
    mounted(){
        this.list();
    },
    watch: {
        '$route' (to) {
            if(to.path.includes('inquiry/search') && this.page){
                this.list();
            }
        }
    }
}
</script>
<style lang="">
    
</style>