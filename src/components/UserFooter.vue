<template>
    <footer>
        <div class="contentSize">
            <ul>
                <li><router-link to="">기업 소개</router-link></li>
                <li><router-link to="">전력거래 솔루션</router-link></li>
                <li><router-link to="">발전자원 모집</router-link></li>
                <li><router-link to="">게시판</router-link></li>
                <li><router-link to="">사업 문의</router-link></li>
            </ul>
            <div>
                <button @click="isFamilySite = !isFamilySite">FAMILY SITE+</button>
                <div :class="{active: isFamilySite}">
                    <ul title="제조/건설">
                        <li><a href="">(주)한화</a></li>
                        <li><a href="">한화디펜스</a></li>
                        <li><a href="">한화비전</a></li>
                        <li><a href="">한화파워시스템</a></li>
                        <li><a href="">한화임팩트</a></li>
                        <li><a href="">여천NCC</a></li>
                        <li><a href="">한화건설</a></li>
                    </ul>
                    <ul title="">
                        <li><a href="">한화에어로스페이스</a></li>
                        <li><a href="">한화시스템</a></li>
                        <li><a href="">한화정밀기계</a></li>
                        <li><a href="">한화솔루션</a></li>
                        <li><a href="">한화토탈에너지스</a></li>
                        <li><a href="">한화에너지</a></li>
                    </ul>
                    <ul title="금융">
                        <li><a href="">한화생명</a></li>
                        <li><a href="">한화손해보험</a></li>
                        <li><a href="">한화투자증권</a></li>
                        <li><a href="">한화자산운용</a></li>
                        <li><a href="">한화저축은행</a></li>
                    </ul>
                    <ul title="서비스/레저">
                        <li><a href="">한화호텔&리조트</a></li>
                        <li><a href="">한화커넥트</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="contentSize">
            <address>
                <h2 class="logo">한화 신한 테라와트아워 로고 이미지</h2>
                <dl>
                    <dt>대표자명</dt>
                    <dd>고성훈</dd>
                </dl>
                <dl>
                    <dt>사업자 주소</dt>
                    <dd>04541 서울시 중구 삼일대로 363 장교빌딩 1107호</dd>
                </dl>
                <dl>
                    <dt>사업자 번호</dt>
                    <dd>243-81-02905</dd>
                </dl>
                <dl>
                    <dt>대표 전화</dt>
                    <dd>02-318-2309</dd>
                </dl>
                <dl>
                    <dt>대표 이메일</dt>
                    <dd>sales@twh.co.kr</dd>
                </dl>
            </address>
            <p>© 2023 TWh, INC. All rights reserved.</p>
            <div>
                <ul>
                    <li><router-link to="">개인정보 처리방침</router-link></li>
                    <li><router-link to="">개인정보 수집 및 처리 목적</router-link></li>
                    <li><router-link to="">사업 문의</router-link></li>
                </ul>
                <ul>
                    <li><a href="">인스타그램 링크</a></li>
                    <!-- <li><a href="">페이스북 링크</a></li> -->
                </ul>
            </div>
        </div>
        <button v-if="!isGoToTop"  class="goToTop" @click="goToTopEvent">최상위로 이동</button>
    </footer>
</template>
<script>
export default {
    name: 'UserFooter',
    data(){
        return {
            isFamilySite: false,
            isGoToTop: document.querySelector('.mainPage')
        }
    },
    methods: {
        goToTopActive(){
            const goToTopElement = document.querySelector('.goToTop');
            window.addEventListener('scroll',()=>{
                window.scrollY < window.innerHeight ? 
                    goToTopElement.classList.remove('active') :
                    goToTopElement.classList.add('active');
            })
        },
        goToTopEvent(){
            window.scrollTo({top: 0,behavior: "smooth"});
        }
    },
    mounted() {
        this.goToTopActive();
    },
    watch: {
        '$route' () {
            this.isFamilySite = false;
            this.isGoToTop = document.querySelector('.mainPage');
        }
    }
    
}
</script>
<style>
    
</style>