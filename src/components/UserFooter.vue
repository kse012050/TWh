<template>
    <footer>
        <div class="contentSize">
            <ul>
                <li><router-link to="/company">기업 소개</router-link></li>
                <li><router-link to="/solution">전력거래 솔루션</router-link></li>
                <li><router-link to="/recruit">발전자원 모집</router-link></li>
                <li><router-link to="/board">게시판</router-link></li>
                <li><router-link to="/inquiry">사업 문의</router-link></li>
            </ul>
            <div>
                <button @click="isFamilySite = !isFamilySite">FAMILY SITE+</button>
                <div :class="{active: isFamilySite}">
                    <ul title="제조/건설">
                        <li><a href="https://www.hanwhacorp.co.kr/index.jsp" target="_blank">(주)한화</a></li>
                        <!-- <li><a href="https://www.hanwha-defense.co.kr/kor/index.do" target="_blank">한화디펜스</a></li> -->
                        <li><a href="https://www.hanwhavision.com/ko/" target="_blank">한화비전</a></li>
                        <li><a href="https://www.hanwhapowersystems.co.kr/" target="_blank">한화파워시스템</a></li>
                        <li><a href="https://www.hanwhaimpact.com/kr/index" target="_blank">한화임팩트</a></li>
                        <li><a href="https://www.yncc.co.kr/ko/index.do" target="_blank">여천NCC</a></li>
                        <li><a href="https://www.hwenc.co.kr/" target="_blank">한화건설</a></li>
                        <li><a href="https://hanwhaconvergence.com/kr/" target="_blank">한화컨버전스</a></li>
                    </ul>
                    <ul title="">
                        <li><a href="https://www.hanwhaaerospace.co.kr/" target="_blank">한화에어로스페이스</a></li>
                        <li><a href="https://www.hanwhasystems.com/kr/index.do" target="_blank">한화시스템</a></li>
                        <li><a href="https://www.hanwha-pm.com/ko/index.asp" target="_blank">한화정밀기계</a></li>
                        <li><a href="https://www.hanwhasolutions.com/ko/" target="_blank">한화솔루션</a></li>
                        <li><a href="https://www.htpchem.com/" target="_blank">한화토탈에너지스</a></li>
                        <li><a href="https://hec.hanwha.co.kr/main.do" target="_blank">한화에너지</a></li>
                    </ul>
                    <ul title="금융">
                        <li><a href="https://www.hanwhalife.com/index.jsp" target="_blank">한화생명</a></li>
                        <li><a href="https://www.hwgeneralins.com/" target="_blank">한화손해보험</a></li>
                        <li><a href="https://www.hanwhawm.com/main/main/index.cmd" target="_blank">한화투자증권</a></li>
                        <li><a href="http://www.hanwhafund.co.kr/webapp/hw_kor/hw_sys/hw_main.jsp" target="_blank">한화자산운용</a></li>
                        <li><a href="https://www.hanwhasbank.com/main.act" target="_blank">한화저축은행</a></li>
                    </ul>
                    <ul title="서비스/레저">
                        <li><a href="https://www.hwrc.co.kr/hwrc/index.do" target="_blank">한화호텔&리조트</a></li>
                        <li><a href="https://www.hanwhaconnect.co.kr/" target="_blank">한화커넥트</a></li>
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
                    <dd><a href="tel:+82023182309">02-318-2309</a></dd>
                </dl>
                <dl>
                    <dt>대표 이메일</dt>
                    <dd><a href="mailto:sales@twh.co.kr">sales@twh.co.kr</a></dd>
                </dl>
            </address>
            <p>© 2023 TWh, INC. All rights reserved.</p>
            <div>
                <ul>
                    <li><button @click="isModal = true">개인정보 처리방침</button></li>
                    <li><router-link to="">개인정보 수집 및 처리 목적</router-link></li>
                    <li><router-link to="/inquiry">사업 문의</router-link></li>
                </ul>
                <ul>
                    <li><a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQF3yP5RSRYMNQAAAYwUZ8RQTPbf7yhNYwsZUIyJgcHpUcq1oQU2eEFwSgjRPeJ_mELCb5E_EnnERhMOGqdeulevUJrAT2XcB02liw-lWvDTLl4A6_odepl1OdDY8cmmvI9KBDc=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fhanwhashinhantwh" target="_blank">링크드린 링크</a></li>
                    <!-- <li><a href="">페이스북 링크</a></li> -->
                </ul>
            </div>
            <modal-info v-if="isModal" :isModal="isModal" @modalClose="modalClose"/>
        </div>
        <button v-if="!isGoToTop"  class="goToTop" @click="goToTopEvent">최상위로 이동</button>
    </footer>
</template>
<script>
import ModalInfo from '@/components/modal/ModalInfo.vue';

export default {
    name: 'UserFooter',
    components: { 
        ModalInfo
    },
    data(){
        return {
            isFamilySite: false,
            isGoToTop: document.querySelector('.mainPage'),
            isModal: false,
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
        },
        modalClose(){
            this.isModal = false;
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