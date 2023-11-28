<template>
    <section class="companyPage" data-subTopAni>
        <div class="topArea" data-aniDelay-basic="6">
            <h2 class="contentSize-padding"><span data-textAni>기업 소개</span></h2>
            <div>
                <strong class="font-hanwha" data-textAni>한화 신한 테라와트아워는</strong>
                <p data-textAni data-aniDelay="4">
                    에너지를 생산하는 발전사업자와<br class="mobile"> 소비하는 기업을 연결하는<br>
                    <b>국내 최대의 전력거래 플랫폼</b>으로<br class="mobile"> 자리매김 하겠습니다.
                </p>
            </div>
        </div>
        <div class="VPPArea contentSize-padding">
            <div class="box-img" data-scrollPosition="70" data-animate="bottomToTop">통합발전소 VPP 이미지</div>
        </div>
        <div class="fixedArea" data-stepAni data-styleIdx>
            <div class="missionArea contentSize-padding">
                <b>사명</b>
                <strong>Powering<br class="mobile"> a Sustainable<br class="mobile"> Future</strong>
            </div>
            <div data-aniDelay-basic="6">
                <div class="visionArea">
                    <b data-textAni>비전</b>
                    <strong data-textAni data-aniDelay="4">
                        Leading Change<br class="mobile"> in the Energy<br class="mobile"> Market
                    </strong>
                </div>
            </div>
        </div>
        <div class="peopleArea contentSize-padding">
            <strong data-textAni data-scrollPosition="70">
                재생에너지, 금융 분야<br>
                최고의 전문가가 함께합니다.
            </strong>
            <ul>
                <li data-animate="bottomToTop" data-scrollPosition="70">
                    <img src="../images/company-people01.png" alt="고성훈 이미지">
                    <b>고성훈</b>
                    <span>Ko Sung Hoon</span>
                    <small>CEO</small>
                    <p>한화컨버전스 에너지플랫폼사업 담당 </p>
                    <p>한화에너지 에너지솔루션 Lab 센터장 </p>
                    <p>한화시스템 전략기획팀장 </p>
                    <p>LGCNS 스마트시티 사업개발</p>
                </li>
                <li data-animate="bottomToTop" data-scrollPosition="70">
                    <img src="../images/company-people02.png" alt="차성종 이미지">
                    <b>차성종</b>
                    <span>Cha Seong Jong</span>
                    <small>CFO</small>
                    <p>신한은행 호남본부장 </p>
                    <p>신한은행 광주기업금융센터장 </p>
                    <p>신한은행 목포금융센터장 </p>
                    <p>신한은행 순천연향동지점장</p>
                </li>
                <li data-animate="bottomToTop" data-scrollPosition="70">
                    <img src="../images/company-people03.png" alt="김영근 이미지">
                    <b>김영근</b>
                    <span>Kim Young Keun</span>
                    <small>전력거래사업팀장</small>
                    <p>한화컨버전스 에너지플랫폼사업팀</p>
                    <p>한화임팩트 IPP사업팀</p>
                </li>
                <li data-animate="bottomToTop" data-scrollPosition="70">
                    <img src="../images/company-people04.png" alt="정윤지 이미지">
                    <b>정윤지</b>
                    <span>Jung Yun Ji</span>
                    <small>경영지원팀장</small>
                    <p>삼일회계법인 Deal (Infra/RE본부)</p>
                    <p>삼일회계법인 감사 (금융 2본부)</p>
                </li>
            </ul>
        </div>
        <hr class="case01" data-animate="hr" data-scrollPosition="70">
        <div class="historyArea contentSize-padding">
            <strong data-textAni data-scrollPosition="70">연혁</strong>
            <ol title="2023" data-animate="bottomToTop" data-scrollPosition="70">
                <li><small>09</small>한화 신한 테라와트아워 설립</li>
                <li><small>04</small>신한자산운용, 한화컨버전스 재생에너지 전력거래사업 전문 합작법인 설립 협약 체결</li>
            </ol>
        </div>
        <div class="bottomArea contentSize-padding">
            <div>
                <a href="./ci/Hanwha Shinhan TWh_4.zip" class="btn-download" download><b>CI</b>(AI)</a>
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
            // 타이틀 초기화
            this.titleElement.classList.remove('active');
            // 서브페이지 탑 애니메이션 초기화
            setTimeout(() => {
                this.titleElement.classList.add('active');
            }, 300);
            this.topElement.style.setProperty('--bgY', 0);
            this.topContents.forEach((element)=>{
                element.classList.remove('active');
                element.classList.remove('ani');
            })
            setTimeout(() => {
                this.topContents.forEach((element)=>{
                    element.classList.add('ani');
                })
            }, 300);
            // 픽스트 컨텐츠 초기화
            document.querySelectorAll('[data-stepAni] > *').forEach((element)=>{
                element.classList.remove('active');
            })
            document.querySelector('[data-stepAni]').style.setProperty('--bgWidth',`300px`)
            document.querySelector('[data-stepAni]').style.setProperty('--bgHeight',`100px`)
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
                    topElement.style.setProperty('--bgY', -((scrollTop - topElementTop) / topElementHeight * 250) + 'px');
                }
            })

            
            window.addEventListener('scroll', this.fixedScrollRemove)
        },
        fixedScrollRemove(){
            const aniFixed = document.querySelector('[data-stepAni]');
            const aniFixedChildren = document.querySelectorAll('[data-stepAni] > *');
            const aniFixedY = aniFixed.getBoundingClientRect().y;

            if(aniFixedY > 0){
                aniFixedChildren[0].classList.remove('active')
                return
            }
            // const scrollTop = window.scrollY;
            aniFixedChildren[0].classList.add('active')
            let scrollPercentage = Math.abs(aniFixedY / (aniFixed.offsetHeight - window.innerHeight - 300));
            if(scrollPercentage < 1){
                aniFixedChildren[0].classList.add('active')
                aniFixedChildren[1].classList.remove('active')
            }else{
                scrollPercentage = 1;
                aniFixedChildren[1].classList.add('active')
            }
            if(scrollPercentage * window.innerWidth > 300){
                aniFixed.style.setProperty('--bgWidth', scrollPercentage * window.innerWidth + 'px');
            }
            if(scrollPercentage * window.innerHeight > 100){
                aniFixed.style.setProperty('--bgHeight', scrollPercentage * window.innerHeight + 'px');
            }
            aniFixed.style.setProperty('--color', scrollPercentage * 255);
            // aniFixedChildren[0].style.transform = `scale(${Math.abs(aniFixed.getBoundingClientRect().y / aniFixedChildren[0].offsetHeight)})`
            // aniFixedChildren.forEach((childrenElement, idx)=>{
            //     if(scrollTop > childrenElement.offsetHeight * idx + aniFixed.offsetTop){
            //         aniFixedChildren[idx].classList.add('active');
            //     }else{
            //         aniFixedChildren[idx].classList.remove('active');
            //     }
            // })
        }
    },
    mounted() {
        this.init();
        this.scrollEvent();
    },
    beforeUnmount() {
        this.init();
        window.removeEventListener('scroll', this.fixedScrollRemove)
    },
}
</script>
<style>
    .companyPage .topArea:has( > div:nth-of-type(1).active)::before{opacity: 0.2;}
    /* .companyPage .topArea > div:nth-of-type(2){z-index: 1;}
    .companyPage .topArea > div:nth-of-type(2)[data-aniType="basic"].active:has( + .active){transform: translateY(0); opacity: 0; transition-delay: var(--aniDelay); pointer-events: none;}
    .companyPage .topArea > div:nth-of-type(3){transform: translateX(100%);}
    .companyPage .topArea > div:nth-of-type(3).active{transform: translateX(0);} */

    /* 픽스드 애니메이션 */
    .companyPage .fixedArea[data-stepAni] > *:nth-child(1){pointer-events: none;}
    .companyPage .fixedArea[data-stepAni] > *:nth-child(1).active{pointer-events: all; transition-property: z-index, opacity; transition-duration: 0s; transition-delay: 0.6s, 0s; transition-timing-function: ease-in-out;;}
    .companyPage .fixedArea[data-stepAni] > *:nth-child(1).active:has( + .active){z-index: -1; opacity: 0; transition-duration: 0.3s; transition-delay: 0.8s, 0.5s;}
    .companyPage .fixedArea[data-stepAni] > *:nth-child(2){width: 0; transition: width var(--aniDuration) ease-in-out; overflow: hidden; pointer-events: none;}
    .companyPage .fixedArea[data-stepAni] > *:nth-child(2):not(.active) > .visionArea > *{opacity: 0;}
    .companyPage .fixedArea[data-stepAni] > *:nth-child(2).active{pointer-events: all; width: 100%;}

    .companyPage .fixedArea:has( > *:nth-child(1):not(.active))::before{display: none;}
    .companyPage .fixedArea[data-stepAni] > *:nth-child(1).active::before{display: none;}
    .companyPage .fixedArea[data-stepAni]{--color: 0;}
    .companyPage .fixedArea[data-stepAni] > *:nth-child(1){color: rgb(var(--color), var(--color), var(--color));}
</style>