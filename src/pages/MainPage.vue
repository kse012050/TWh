<template>
    <template v-for="(data, idx) in popupList" :key="data.id">
        <div v-if="isPopup[idx]" class="content-popup" @click.prevent="isPopup[idx] = false">
            <a href="" @click.stop>
                <img :src="data.medias[0].imageurl" alt="팝업 이미지">
                <button @click.prevent="isPopup[idx] = false">팝업 닫기</button>
            </a>
        </div>
    </template>
    <section class="mainPage">
        <ol class="fullPager">
        </ol>
        <div class="topArea" data-full>
            <div>
                <h2 class="font-hanwha">
                    <b>TWh</b>
                    한화 신한 테라와트아워
                </h2>
                <p class="cursor">재생에너지 전력거래,<br class="mobile"> 지속 가능한 내일을 만듭니다.</p>
            </div>
            <div class="bg"></div>
            <div class="scroll">SCROLL<span></span></div>
        </div>
        <div class="solutionArea" data-full>
            <ul>
                <li>
                    <div data-aniDelay="3">
                        <strong data-textAni="1">
                            기업을 위한<br>
                            재생에너지<br> 전력거래 솔루션
                        </strong>
                        <p data-textAni="3">
                            복잡한 RE100 이행,<br>
                            <span class="font-hanwha">테라와트아워</span>로 쉬워집니다.
                        </p>
                        <router-link to="/solution" class="arrow-white" data-aniDelay="10">자세히 보기<span></span></router-link>
                    </div>
                </li>
                <li>
                    <div data-aniDelay="3">
                        <strong data-textAni="1">
                            발전사업자를 위한<br>
                            수익 최적화 솔루션
                        </strong>
                        <p data-textAni="3">
                            업계 최고 수준의<br>
                            발전소 매입 조건을 제안합니다.
                        </p>
                        <router-link to="/recruit" class="arrow-white" data-aniDelay="10">자세히 보기<span></span></router-link>
                    </div>
                </li>
            </ul>
        </div>
        <div class="terra01Area" data-full>
            <div>
                <div class="contentSize">
                    <strong class="font-hanwha" data-aniDelay="3" data-textAni="1">한화 신한 테라와트아워는</strong>
                    <p data-aniDelay="3" data-textAni="2">
                        전문성과 안정성을 갖춘<br>
                        재생에너지 전력거래 전문 기업입니다.
                    </p>
                    <div data-aniDelay="10">
                        <strong data-aniDelay="3" data-textAni="5">1GW<small>+</small></strong>
                        <p data-aniDelay="3" data-textAni="6">재생에너지 구축,<br> 운영 사업 역량</p>
                    </div>
                    <div data-aniDelay="10">
                        <strong data-aniDelay="3" data-textAni="5">1500<small>억 규모</small></strong>
                        <p data-aniDelay="3" data-textAni="6">재생에너지 사업을 위한<br> 펀드 설정</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="terra02Area" data-full>
            <div>
                <div class="contentSize">
                    <strong class="font-hanwha" data-aniDelay="3" data-textAni="1">한화 신한 테라와트아워는</strong>
                    <p data-aniDelay="3" data-textAni="2">
                        RE100 기업 수요와<br class="mobile"> KPX 전력시장을 아우르는<br>
                        재생에너지 전력거래 전문 기업입니다.
                    </p>
                    <div data-aniDelay="10">
                        <p data-aniDelay="3" data-textAni="5">
                            재생에너지전기공급<br>
                            (PPA)
                        </p>
                    </div>
                    <div data-aniDelay="10">
                        <p data-aniDelay="3" data-textAni="5">
                            통합발전소<br>
                            (VPP)
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="companyArea" data-full>
            <div class="contentSize">
                <p data-aniDelay="3" data-textAni="1">
                    재생에너지의<br class="mobile"> 생산과 소비를 연결하는<br>
                    <b>국내 최대의 전력거래 플랫폼(VPP)</b>으로 <br>
                    성장하겠습니다.
                </p>
                <router-link to="/company" class="arrow-white" data-aniDelay="8">기업 소개 보기 <span></span></router-link>
            </div>
        </div>
        <div class="boardArea" data-full>
            <div>
                <div class="contentSize">
                    <h3 data-aniDelay="3" data-textAni="1"><b class="font-hanwha">테라와트아워</b>의 최신 소식을<br class="mobile"> 확인해보세요.</h3>
                    <ul class="user-board" data-aniDelay="6">
                        <template v-for="data in boardList" :key="data.id">
                            <li>
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
                    <router-link to="/board" class="arrow-black" data-aniDelay="10">게시판 보기<span></span></router-link>
                </div>
            </div>
        </div>
    </section>
    <button class="goToTop" @click="goToTop">최상위로 이동</button>
</template>

<script>
import * as api from '../api/api'

export default {
    name: 'MainPage',
    data() {
        return{
            // isFull: false,
            isPopup: [],
            popupList: [],
            boardList: [],
            fullSelectors: [...document.querySelectorAll('[data-full]'), document.querySelector('footer')],
            fullPagerSeletor: document.querySelector('.fullPager'),
            eventListeners: [],
            touchStart: {
                x: undefined,
                y: undefined
            }
        }
    },
    methods: {
        init(){
            this.fullSelectors = [...document.querySelectorAll('[data-full]'), document.querySelector('footer')]
            this.fullPagerSeletor = document.querySelector('.fullPager');
        },
        popup(){
            api.user('list',{type: 'notice'})
                .then((result)=>{
                    if(result.statusCode === '200'){
                        this.popupList = [...result.list]
                        this.popupList = this.popupList.filter((value)=> value.medias.length !== 0);
                        this.popupList.forEach(()=>{
                            this.isPopup.push(true);
                        })
                    }
                })
        },
        board(){
            api.user('list',{type: 'board'})
                .then((result)=>{
                    if(result.statusCode === '200'){
                        this.boardList = [...result.list.splice(0, 3)];
                    }
                })
        },
        fullPager() {
            const fullSelectors = document.querySelectorAll('[data-full]');
            this.fullPagerSeletor.replaceChildren(); // 자식 요소 초기화
            fullSelectors.forEach((_, idx)=>{
                const fullPageList = document.createElement('li');
                fullPageList.innerText = `${idx} Page`;
                idx === 0 && fullPageList.classList.add('active');
                this.fullPagerSeletor.appendChild(fullPageList);
            })
        },
        typingEvent() {
            const typingEle = document.querySelector('.topArea p');
            // const typginBackup = typingEle.innerHTML;
            typingEle.innerHTML = ''
            this.fullEvent();
            // let count = 0;
            // setTimeout(()=>{
            //     const typingAni = setInterval(() => {
            //         typingEle.innerHTML += typginBackup[count];
            //         count++
            //         if(!typginBackup[count]){
            //             clearInterval(typingAni);
            //             setTimeout(()=>{
            //                 typingEle.classList.remove('cursor');
            //                 document.querySelector('.topArea').classList.add('intro');
            //                 document.querySelector('.mainPage .topArea').addEventListener('animationend',()=>{
            //                     this.fullEvent();
            //                 })
            //             }, 1000)
            //         }
            //     }, 100);
            // },1000);
        },
        fullUserEvent(){
            // const fullSelectors = document.querySelectorAll('[data-full]');
            this.fullSelectors.forEach((element, idx)=>{
                const fullCallback = this.fullEvent.bind(null, idx);
                element.addEventListener('mousewheel', fullCallback)
                element.addEventListener('touchstart', fullCallback);
                element.addEventListener('touchend', fullCallback)
                
                this.eventListeners.push({ element, fullCallback: fullCallback});
            })
        },
        fullEvent(idx, e){
            let delta;
            if(e.type === 'mousewheel'){
                delta = e.wheelDelta;
            }

            if(e.type === 'touchstart'){
                this.touchStart['x'] = e.touches[0].clientX;
                this.touchStart['y'] = e.touches[0].clientY;
                return
            }

            if(e.type === 'touchend'){
                delta = (this.touchStart['y'] - e.changedTouches[0].clientY) * -1;
                const touchEndX = Math.abs(this.touchStart['x'] - e.changedTouches[0].clientX);
                const touchEndY = Math.abs(delta);
                if(touchEndX > touchEndY){
                    return;
                }
            }
            this.fullMoveEvent(idx, delta)
        },
        fullMoveEvent(idx, delta){
            const currentIdx = idx;
            
            if(delta < 0 && this.fullSelectors[idx + 1]){
                idx++;
                this.fullSelectors[idx].classList.add('active')
            }else if(delta > 0 && this.fullSelectors[idx - 1]){
                idx--;
                this.fullSelectors[currentIdx].classList.remove('active')
            }

            // 페이저, 해더 페이저 스타일
            if(this.fullSelectors[idx].localName !== 'footer'){
                // 페이저
                this.fullPagerSeletor.childNodes.forEach((element)=>{
                    element.classList.remove('active');
                })
                this.fullPagerSeletor.childNodes.item(idx).classList.add('active');

                // 해더 페이저 스타일
                this.fullSelectors[idx].classList.contains('boardArea') ?
                    document.querySelector('header').classList.remove('white') :
                    document.querySelector('header').classList.add('white');
            }

            // 푸터 이동
            if(this.fullSelectors[idx].localName === 'footer'){
                document.querySelectorAll('[data-full].active, .fullPager').forEach((element)=>{
                    element.style.top = -document.querySelector('footer').offsetHeight + 'px'
                })
            }

            if(this.fullSelectors[currentIdx].localName === 'footer'){
                document.querySelectorAll('[data-full].active, .fullPager').forEach((element)=>{
                    element.removeAttribute('style')
                })
            }

            // 이동 막기
            this.fullSelectors.forEach((element)=>{
                element.style.pointerEvents = 'none';
            })
            setTimeout(()=>{
                this.fullSelectors[idx].removeAttribute('style');
            }, 1000)
        },
        goToTop(){
            document.querySelector('header').classList.add('white');
            document.querySelectorAll('.active').forEach((element)=>{
                element.classList.remove('active');
            })
            document.querySelectorAll('.mainPage > [style]').forEach((element)=>{
                element.removeAttribute('style');
            })

            this.fullPagerSeletor.childNodes.item(0).classList.add('active');
        }
    },
    mounted() {
        this.init();
        this.popup();
        this.board();
        this.fullPager();
        this.fullUserEvent();
    },
    beforeUnmount() {
        this.eventListeners.forEach(({ element, fullCallback }) => {
            element.removeEventListener('mousewheel', fullCallback);
        });
    },
}
</script>
<style>
    body:has(.mainPage){overflow: hidden;}
    [data-full]{position: fixed; left: 0; top: 0; width: 100%; z-index: -1; transition: 0s 1s z-index;}
    [data-full]:not(.topArea):not(.active){pointer-events: none;}
    [data-full].active{z-index: 3; transition-property: z-index, top; transition-duration: 0s, 0.5s; transition-delay: 0s, 0s;}
    .mainPage .topArea{z-index: 1;}

    header + .mainPage .fullPager{--color: #999; /* opacity: 0; */ transition: .5s;}
    header + .mainPage .fullPager li{pointer-events: none;}
    header + .mainPage .fullPager:has( + .topArea.intro){opacity: 1;}
    header + .mainPage .fullPager:has( + .topArea.intro) li{pointer-events: all;}

    .mainPage ~ footer{position: fixed; left: 0; bottom: 0; width: 100%;}
    .mainPage:has( .boardArea.active) ~ footer{z-index: 2;}
    .mainPage:has( .boardArea.active) ~ footer.active::before{content: ''; position: absolute; left: 0; bottom: 100%; width: 100%; height: calc(100vh - 100%);}
    .mainPage:has( ~ footer.active) [data-full].active{z-index: 1; transition-property: z-index, top; transition-duration: 0s, 0.5s; transition-delay: 0.5s, 0s;}


    .mainPage .topArea{color: white;}
    /* 인트로 */
   /*  header:has(+ .mainPage){opacity: 0; pointer-events: none;}
    .mainPage .topArea{--color: #222; color: var(--color); position: relative; z-index: 1; background-color: white;}
    .mainPage .topArea > div{transform: translateY(calc(-50% + var(--typingHeight) / 2));}
    .mainPage .topArea > div h2{opacity: 0;}
    .mainPage .topArea > div p.cursor::after{content: ''; position: absolute; right: -0.2em; top: 0; width: 2px; height: 100%; background-color: var(--color);
    animation: cursor 1s steps(2) infinite;}
    .mainPage .topArea > .bg{clip-path: circle(0% at 50% 50%);}

    @keyframes cursor {
        0%{opacity: 0;}
        100%{opacity: 1;}
    }

    header:has(+ .mainPage .topArea.intro){opacity: 1; transition: 1s 2.5s opacity; pointer-events: all;}
    .mainPage .topArea.intro{--color: white; transition: 1s 2s color;}
    .mainPage .topArea.intro > div{transform: translateY(0); transition: 1s transform;}
    .mainPage .topArea.intro > div h2{opacity: 1; transition: 1s 0.8s opacity;}
    .mainPage .topArea.intro > .bg{animation: topBG 3s 1.3s forwards;}
    @keyframes topBG {
        0%{clip-path: circle(0% at 50% 50%); opacity: 0;}
        100%{clip-path: circle(100% at 50% 50%); opacity: 1;}
    } */

    /* 메인 솔루션 애니메이션 */
    .mainPage .solutionArea ul li{transform: translateY(0); transition: 0.6s transform ease-in-out;}
    .mainPage .solutionArea ul li:nth-child(1){transform: translateY(-100%);}
    .mainPage .solutionArea ul li:nth-child(2){transform: translateY(100%);}
    .mainPage .solutionArea ul li a{opacity: 0; transition: 0.6s opacity ease-in-out;}
    .mainPage .solutionArea ul li a span{background: transparent;}
    .mainPage .solutionArea ul li a span::before{content: ''; position: absolute; left: 0; top: 0; width: 0; height: 100%; background: white; transition: 0.2s width ease-in-out;}
    .mainPage .solutionArea ul li a span::after{transition: 0.2s width ease-in-out;}
    .mainPage .solutionArea:not(.active) ul li a span::after{width: 0;}
    .mainPage .solutionArea.active ul li{transform: translateY(0);}
    .mainPage .solutionArea.active ul li a{opacity: 1; transition-delay: var(--aniDelay);}
    .mainPage .solutionArea.active ul li a span::before{width: 100%; transition-delay: calc(var(--aniDelay) + 0.4s);}
    .mainPage .solutionArea.active ul li a span::after{transition-delay: calc(var(--aniDelay) + 0.5s);}
    /* 메인 테라와트아워는~ */
    .mainPage .terra01Area > div{transform: translateX(100%); background: url(../images/main-companyBG1.png) no-repeat center left 100% / cover; transition-property: transform, background; transition-duration: 0.5s, 0.5s; transition-delay: 0s, 0.3s;}
    .mainPage .terra01Area.active > div{transform: translateX(0); background: url(../images/main-companyBG.png) no-repeat center right / cover;}
    .mainPage [class^="terra"][class*="Area"] > div > div > div{transform: translateY(100%); opacity: 0; transition-property: transform, opacity; transition-duration: 0.6s;}
    .mainPage [class^="terra"][class*="Area"].active > div > div > div{transform: translateY(0%); opacity: 1; transition-delay: calc(var(--aniDelay) + (0.2s * var(--styleIdx)));}
    .mainPage .terra02Area > div > div{transform: translateY(100%); opacity: 0; transition-delay: 0s; transition-property: transform, opacity; transition-duration: 0.6s;}
    .mainPage [class^="terra"][class*="Area"].active > div > div{transform: translateY(0%); opacity: 1; transition-property: transform, opacity; transition-duration: 0.6s;}
    .mainPage [class^="terra"][class*="Area"].active:has(+ .active) > div > div{transform: translateY(-100%); opacity: 0; transition-delay: 0s;}
    /* 메인 회사소개 */
    .mainPage .companyArea div{transform: translateY(100%); opacity: 0; transition-property: transform, opacity; transition-duration: 0.6s;}
    .mainPage .companyArea div a{opacity: 0; transition: 0.6s opacity ease-in-out;}
    .mainPage .companyArea div a span{background: transparent;}
    .mainPage .companyArea div a span::before{content: ''; position: absolute; left: 0; top: 0; width: 0; height: 100%; background: white; transition: 0.2s width ease-in-out;}
    .mainPage .companyArea div a span::after{transition: 0.2s width ease-in-out;}
    .mainPage .companyArea:not(.active) div a span::after{width: 0;}
    .mainPage .companyArea.active div{transform: translateY(0%); opacity: 1;}
    .mainPage .companyArea.active div a{opacity: 1; transition-delay: var(--aniDelay);}
    .mainPage .companyArea.active div a span::before{width: 100%; transition-delay: calc(var(--aniDelay) + 0.4s);}
    .mainPage .companyArea.active div a span::after{transition-delay: calc(var(--aniDelay) + 0.5s);}
    /* 메인 게시판 */
    .mainPage .boardArea div{transform: translateY(100%); transition: var(--aniDutaion) transform;}
    .mainPage .boardArea div ul{opacity: 0; transition: var(--aniDutaion) opacity ease-in-out;}
    .mainPage .boardArea div a{opacity: 0; transition: 0.6s opacity ease-in-out;}
    .mainPage .boardArea div a span{background: transparent;}
    .mainPage .boardArea div a span::before{content: ''; position: absolute; left: 0; top: 0; width: 0; height: 100%; background: var(--bc); transition: 0.2s width ease-in-out;}
    .mainPage .boardArea div a span::after{transition: 0.2s width ease-in-out;}
    .mainPage .boardArea:not(.active) div a span::after{width: 0;}
    .mainPage .boardArea.active div{transform: translateY(0);}
    .mainPage .boardArea.active div ul{opacity: 1; transition-delay: var(--aniDelay);}
    .mainPage .boardArea.active div a{opacity: 1; transition-delay: var(--aniDelay);}
    .mainPage .boardArea.active div a span::before{width: 100%; transition-delay: calc(var(--aniDelay) + 0.4s);}
    .mainPage .boardArea.active div a span::after{transition-delay: calc(var(--aniDelay) + 0.5s);}
    .mainPage:has(~ footer.active) [data-full].active{transition-duration: 0.5s;}
</style>