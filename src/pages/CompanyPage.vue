<template>
    <section class="companyPage" data-subTopAni>
        <div class="topArea">
            <h2 class="contentSize-padding"><span data-textAni='1'>기업 소개</span></h2>
            <div data-textAniParents="1" data-aniDelay="4" data-aniType="basic">
                <strong class="font-hanwha">한화 신한 테라와트아워는</strong>
                <p>
                    재생에너지 사업 전문성과 기업 안정성을 갖춘<br>
                    재생에너지 전력거래 전문 기업입니다.
                </p>
            </div>
        </div>
        <div class="VPPArea contentSize-padding">
            <p>
                에너지를 생산하는<br class="mobile"> 발전사업자와<br>
                소비하는 기업을 연결하는<br>
                <b>국내 최대의 전력거래<br class="mobile"> 플랫폼</b>으로<br>
                자리매김 하겠습니다.
            </p>
            <div class="box-img">통합발전소 VPP 이미지</div>
        </div>
        <div class="missionArea contentSize-padding">
            <b>사명</b>
            <strong>Powering<br class="mobile"> a Sustainable<br class="mobile"> Future</strong>
            <p>
                안정적이고 전문적인 재생에너지 전력거래로<br>
                지속가능한 내일을 만들어갑니다.
            </p>
        </div>
        <div class="visionArea contentSize-padding">
            <b>비전</b>
            <strong>
                Leading change<br>
                in the energy<br class="mobile"> market
            </strong>
            <p>분산에너지 중심의<br class="mobile"> 에너지 패러다임 전환을 선도하겠습니다.</p>
        </div>
        <div class="peopleArea contentSize-padding">
            <strong>
                재생에너지, 금융 분야<br>
                최고의 전문가가 함께합니다.
            </strong>
            <ul>
                <li>
                    <img src="../images/company-people01.png" alt="고성훈 이미지">
                    <b>고성훈</b>
                    <span>Ko Sung Hoon</span>
                    <small>CEO</small>
                    <p>한화컨버전스 에너지플랫폼사업 담당 </p>
                    <p>한화에너지 에너지솔루션 Lab 센터장 </p>
                    <p>한화시스템 전략기획팀장 </p>
                    <p>LGCNS 스마트시티 사업개발</p>
                </li>
                <li>
                    <img src="../images/company-people02.png" alt="차성종 이미지">
                    <b>차성종</b>
                    <span>Cha Seong Jong</span>
                    <small>CFO</small>
                    <p>신한은행 호남본부장 </p>
                    <p>신한은행 광주기업금융센터장 </p>
                    <p>신한은행 목포금융센터장 </p>
                    <p>신한은행 순천연향동지점장</p>
                </li>
                <li>
                    <img src="../images/company-people03.png" alt="김영근 이미지">
                    <b>김영근</b>
                    <span>Kim Young Keun</span>
                    <small>전력거래사업팀장</small>
                    <p>한화컨버전스 에너지플랫폼사업팀</p>
                    <p>한화임팩트 IPP사업팀</p>
                </li>
                <li>
                    <img src="../images/company-people04.png" alt="정윤지 이미지">
                    <b>정윤지</b>
                    <span>Jung Yun Ji</span>
                    <small>경영지원팀장</small>
                    <p>삼일회계법인 Deal (Infra/RE본부)</p>
                    <p>삼일회계법인 감사 (금융 2본부)</p>
                </li>
            </ul>
        </div>
        <hr class="case01">
        <div class="historyArea contentSize-padding">
            <strong>연혁</strong>
            <ol title="2023">
                <li><small>09</small>한화 신한 테라와트아워 설립</li>
                <li><small>04</small>신한자산운용, 한화컨버전스 재생에너지 전력거래사업 전문 합작법인 설립 협약 체결</li>
            </ol>
        </div>
        <div class="bottomArea contentSize-padding">
            <div>
                <a href="" class="btn-download"><b>CI</b>(AI)</a>
                <!-- <a href="" class="btn-download"><b>PR</b>(PDF)</a> -->
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'CompanyPage',
    data() {
        return {
            topClassName: '[data-subTopAni] .topArea',
            topElement: undefined,
            topContents: undefined,
            titleElement: undefined,
        }
    },
    methods : {
        init(){
            this.topElement = document.querySelector(this.topClassName);
            this.titleElement = document.querySelector(`${this.topClassName} h2`);
            this.topContents = document.querySelectorAll(`${this.topClassName} > div`);
            this.titleElement.classList.remove('active');
            setTimeout(() => {
                this.titleElement.classList.add('active');
            }, 300);
            this.topContents.forEach((element)=>{
                element.classList.remove('active');
            })
        },
        scrollEvent() {
            const topElement = this.topElement;
            const topContents = this.topContents;
            const headerElement = document.querySelector('header');
            topElement.style.setProperty('--totalContent', topContents.length);
            window.addEventListener('scroll', ()=>{
                const scrollTop = window.scrollY;
                const topElementTop = topElement.offsetTop;
                const topElementHeight = topElement.offsetHeight;
                const headerElementHeight = headerElement.offsetHeight;
                topContents.forEach((_, idx)=>{
                    if(scrollTop > (topElementHeight - window.innerHeight) / topContents.length * idx + headerElementHeight){
                        topContents[idx].classList.add('active');
                    }else{
                        topContents[idx].classList.remove('active');
                    }
                })
                if(scrollTop > topElementTop && scrollTop < topElementHeight + topElementTop){
                    topElement.style.setProperty('--bgY', -((scrollTop - topElementTop) / topElementHeight * 100) + 'px');
                }
            })
        }
    },
    mounted() {
        this.init();
        this.scrollEvent();
    }
}
</script>
<style>
    .companyPage .topArea:has( > div:nth-of-type(1).active)::before{opacity: 0.2;}
    /* .companyPage .topArea > div:nth-of-type(2){z-index: 1;}
    .companyPage .topArea > div:nth-of-type(2)[data-aniType="basic"].active:has( + .active){transform: translateY(0); opacity: 0; transition-delay: var(--aniDelay); pointer-events: none;}
    .companyPage .topArea > div:nth-of-type(3){transform: translateX(100%);}
    .companyPage .topArea > div:nth-of-type(3).active{transform: translateX(0);} */
</style>