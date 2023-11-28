<template>
    <template v-for="(data, idx) in popupList" :key="data.id">
        <div v-if="isPopup[idx]" class="content-popup" @click.prevent="isPopup[idx] = false">
            <a :href="data.linkurl" @click.stop>
                <img :src="data.medias[0].imageurl" alt="팝업 이미지">
                <button @click.prevent="isPopup[idx] = false">팝업 닫기</button>
            </a>
        </div>
    </template>
    <section class="mainPage" data-aniDelay-basic="5">
        <ol class="fullPager">
        </ol>
        <div class="topArea" data-full>
            <div class="textArea">
                <h2 class="font-hanwha">
                    <b>TWh</b>
                    한화 신한 테라와트아워
                </h2>
                <p>재생에너지 전력거래,<br class="mobile"> 지속 가능한 내일을 만듭니다.</p>
            </div>
            <div class="bg">
                <video src="../video/video.mp4" loop muted autoplay></video>
            </div>
            <div class="scroll">SCROLL<span></span></div>
        </div>
        <div class="solutionArea" data-full>
            <ul>
                <li>
                    <div>
                        <strong data-textAni>
                            기업을 위한<br>
                            재생에너지<br> 전력거래 솔루션
                        </strong>
                        <p data-textAni data-aniDelay="10">
                            복잡한 RE100 이행,<br>
                            <b class="font-hanwha">테라와트아워</b>로 쉬워집니다.
                        </p>
                        <router-link to="/solution" class="arrow-white" data-aniDelay="18">자세히 보기<span></span></router-link>
                    </div>
                </li>
                <li>
                    <div>
                        <strong data-textAni>
                            발전사업자를 위한<br>
                            수익 최적화 솔루션
                        </strong>
                        <p data-textAni data-aniDelay="10">
                            업계 최고 수준의<br>
                            발전소 매입 조건을 제안합니다.
                        </p>
                        <router-link to="/recruit" class="arrow-white" data-aniDelay="18">자세히 보기<span></span></router-link>
                    </div>
                </li>
            </ul>
        </div>
        <div class="terraTitle">
            <div class="contentSize">
                <strong class="font-hanwha">한화 신한 테라와트아워는</strong>
            </div>
        </div>
        <div class="terra01Area" data-full>
            <div>
                <div class="contentSize">
                    <strong class="font-hanwha" data-textAni>한화 신한 테라와트아워는</strong>
                    <p data-textAni data-aniDelay="2">
                        전문성과 안정성을 갖춘<br>
                        재생에너지 전력거래 전문 기업입니다.
                    </p>
                    <div data-animate="bottomToTop" data-aniDelay="10">
                        <strong data-textAni data-aniDelay="14">1GW<small>+</small></strong>
                        <p data-textAni data-aniDelay="16">재생에너지 구축,<br> 운영 사업 역량</p>
                    </div>
                    <div data-animate="bottomToTop" data-aniDelay="10">
                        <strong data-textAni data-aniDelay="12">1500<small>억 규모</small></strong>
                        <p data-textAni data-aniDelay="14">재생에너지 사업을 위한<br> 펀드 설정</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="terra02Area" data-full>
            <div>
                <div class="contentSize">
                    <strong class="font-hanwha">한화 신한 테라와트아워는</strong>
                    <p data-textAni>
                        RE100 기업 수요와<br class="mobile"> KPX 전력시장을 아우르는<br>
                        재생에너지 전력거래 전문 기업입니다.
                    </p>
                    <div data-animate="bottomToTop" data-aniDelay="8">
                        <p data-textAni data-aniDelay="10">
                            재생에너지전기공급<br>
                            (PPA)
                        </p>
                    </div>
                    <div data-animate="bottomToTop" data-aniDelay="8">
                        <p data-textAni data-aniDelay="12">
                            통합발전소<br>
                            (VPP)
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="companyArea" data-full>
            <div class="contentSize">
                <p data-textAni>
                    재생에너지의<br class="mobile"> 생산과 소비를 연결하는<br>
                    <b>국내 최대의 전력거래<br class="mobile"> 플랫폼(VPP)</b>으로 <br>
                    성장하겠습니다.
                </p>
                <router-link to="/company" class="arrow-white" data-aniDelay="10">기업 소개 보기 <span></span></router-link>
            </div>
        </div>
        <div class="boardArea" data-full>
            <div>
                <div class="contentSize">
                    <h3 data-textAni><b class="font-hanwha">테라와트아워</b>의 최신 소식을<br class="mobile"> 확인해보세요.</h3>
                    <ul class="user-board" data-animate="bottomToTop" data-aniDelay="5">
                        <template v-for="data in boardList" :key="data.id">
                            <li>
                                <router-link :to="`/boardDetail/${data.id}`">
                                    <img v-if="data.medias.length" :src="data.medias[0].imageurl" :alt="`${data.title} 이미지`" onerror="this.onerror=null; this.src='https://placehold.co/380x250'">
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
            },
            clearTimer: undefined
        }
    },
    methods: {
        init(){
            this.fullSelectors = [...document.querySelectorAll('[data-full]'), document.querySelector('footer')]
            this.fullPagerSeletor = document.querySelector('.fullPager');

            this.fullSelectors.forEach((element)=>{
                element.removeAttribute('style');
                element.classList.remove('active');
            })

            
            document.querySelector('.topArea').classList.remove('introStart')
            document.querySelector('.topArea').classList.remove('introCenter')
            document.querySelector('.topArea').classList.remove('introFin')
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
            const typginBackup = typingEle.innerHTML.replace('<br class="mobile">',window.innerWidth <= 1100 ? "\n" : '').split('').map((text) => text === "\n" ? '<br class="mobile">' : text);
            typingEle.innerText = ''
            // this.fullEvent();
            // let count = 0;
            
            setTimeout(()=>{
                document.querySelector('.topArea').classList.add('introCenter');
            }, 500)

            setTimeout(()=>{
                const typingAni = setInterval(() => {
                    typingEle.innerHTML += typginBackup.shift();
            //         count++
                    if(!typginBackup.length){
                        clearInterval(typingAni);
                        setTimeout(()=>{
                            document.querySelector('.topArea').classList.add('introFin');
                            sessionStorage.setItem('intro','true');
                            document.querySelector('.mainPage .topArea').addEventListener('animationend',()=>{
                                this.fullUserEvent();
                            })
                        }, 100)
                    }
                }, 100);
            },2000);
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
            // 이동 막기
            this.fullSelectors.forEach((element)=>{
                element.style.pointerEvents = 'none';
            })
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
            
            //  이동 풀기
            if(this.clearTimer){
                clearTimeout(this.clearTimer);
            }
            // 이동 풀기 - 내렸을 때
            if(delta < 0){
                this.clearTimer = setTimeout(()=>{
                    this.fullSelectors[idx].removeAttribute('style');
                }, 1000) /* 시간 조정시 테라 타이틀도 조정해야한다 */
            }
            // 이동 풀기 - 올렸을 때
            if(delta > 0){
                this.clearTimer = setTimeout(()=>{
                    this.fullSelectors[idx].removeAttribute('style');
                }, 500)
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

            if(this.fullSelectors[currentIdx].localName === 'footer' && delta > 0){
                console.log(this.fullSelectors[currentIdx].classList.contains('active'));
                document.querySelectorAll('[data-full].active, .fullPager').forEach((element)=>{
                    element.removeAttribute('style')
                })
            }



            // terra 타이틀
            if(this.fullSelectors[currentIdx].classList.contains('test')){
                this.fullSelectors[currentIdx].classList.remove('test')
            }
            if(this.fullSelectors[currentIdx].classList.contains('companyArea') && this.fullSelectors[idx].classList.contains('terra02Area')){
                this.fullSelectors[idx].classList.add('test')
            }

            
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
        if(!sessionStorage.getItem('intro')){
            document.querySelector('.topArea').classList.add('introStart')
            this.typingEvent();
        }else{
            this.fullUserEvent();
        }
    },
    beforeUnmount() {
        this.init();
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


    /* 인트로 */
    header:has(+ .mainPage .topArea.introStart){opacity: 0; pointer-events: none;}
    .mainPage .topArea{z-index: 1; background-color: white;}
    .mainPage .topArea.introStart{--color: #222; color: var(--color); position: relative;}
    .mainPage .topArea.introStart h2{animation: opacityAni 0.8s 0.3s ease-in-out forwards; opacity: 0;}
    .mainPage .topArea.introStart > div.textArea p{opacity: 0;}
    .mainPage .topArea.introStart > div.textArea p::after{ content: ''; margin-left: .4rem; border-right: 2px solid #222; animation: opacityAni 0.9s infinite steps(2);}
    .mainPage .topArea.introStart > .bg{clip-path: circle(0% at 50% 50%);}
    .mainPage .topArea.introStart > .scroll{opacity: 0;}

    /* .mainPage .topArea.introStart.introCenter > div.textArea h2{opacity: 0; transition: 0.5s 0.2s opacity ease-in-out;}
    .mainPage .topArea.introStart.introCenter > div.textArea{transform: translateY(calc(-50% + var(--typingHeight) / 2)); transition: 0s 0.7s transform ease-in-out;} */
    .mainPage .topArea.introStart.introCenter > div.textArea p{opacity: 1; transition: 0s 0.7s opacity ease-in-out;}

   
    @keyframes opacityAni {
        0%{opacity: 0;}
        100%{opacity: 1;}
    }
 

    header:has(+ .mainPage .topArea.introStart.introCenter.introFin){opacity: 1; transition: 1s 1.5s opacity; pointer-events: all;}
    .mainPage .topArea.introStart.introCenter.introFin{color: white; transition: 1s 1s color;}
    /* .mainPage .topArea.introStart.introCenter.introFin > div.textArea{transform: translateY(0); transition: 1s transform;} */
    /* .mainPage .topArea.introStart.introCenter.introFin > div.textArea h2{opacity: 1; transition: 1s 0.8s opacity;} */
    .mainPage .topArea.introStart.introCenter.introFin > div.textArea p::after{animation: none; border-color: transparent;}
    .mainPage .topArea.introStart.introCenter.introFin > .bg{animation: topBG 3s forwards;}
    .mainPage .topArea.introStart.introCenter.introFin > .scroll{opacity: 1; transition: 1s 1.5s opacity;}
    @keyframes topBG {
        0%{clip-path: circle(0% at 50% 50%); opacity: 0;}
        100%{clip-path: circle(100% at 50% 50%); opacity: 1;}
    }


    /* 메인 솔루션 애니메이션 */
    .mainPage .solutionArea ul li{transform: translateY(0); transition: 0.6s transform ease-in-out;}
    .mainPage .solutionArea ul li:nth-child(1){transform: translateY(-100%);}
    .mainPage .solutionArea ul li:nth-child(2){transform: translateY(100%);}
    .mainPage .solutionArea:not(.active) ul li a span::after{width: 0;}
    .mainPage .solutionArea.active ul li{transform: translateY(0);}
    /* 메인 테라와트아워는~ */
    .mainPage .terraTitle{z-index: -1; opacity: 0;}
    .mainPage .terraTitle:has(+ .terra01Area.active ~ .companyArea:not(.active)){z-index: 5;}
    .mainPage .terraTitle:has(+ .terra01Area.active){opacity: 1; transition: opacity 0s 1s;}
    .mainPage .terraTitle:has(+ .terra01Area.active ~ .companyArea:not(.active)) > div > strong{pointer-events: all;}
    .mainPage .terraTitle:has(~ .companyArea.active){opacity: 0; transition-delay: 0s;}
    .mainPage .terra01Area.active > div > div > strong{opacity: 0; transition: opacity 0s 1s;}
    .mainPage .terra02Area > div > div > strong{opacity: 0;}
    .mainPage .terra02Area:has(+ .companyArea.active) > div > div > strong {opacity: 1;}
    .mainPage .terra02Area.active.test > div > div > strong{opacity: 1;}
    .mainPage .terraTitle:has(~ .terra02Area.active.test){transition-delay: 0.6s;}

    .mainPage .terra01Area > div{transform: translateX(100%); background: url(../images/main-companyBG1.png) no-repeat center left 100% / cover; transition-property: transform, background; transition-duration: 0.5s, 0.5s; transition-delay: 0s, 0.3s;}
    .mainPage .terra01Area.active > div{transform: translateX(0); background: url(../images/main-companyBG.png) no-repeat center right / cover;}
    .mainPage [class^="terra"][class*="Area"] > div > div > div{transform: translateY(100%); opacity: 0; transition-property: transform, opacity; transition-duration: 0.6s;}
    .mainPage [class^="terra"][class*="Area"].active > div > div > div{transform: translateY(0%); opacity: 1; transition-delay: calc(var(--aniDelay) + (0.2s * var(--styleIdx)));}
    .mainPage .terra02Area > div > div{transform: translateY(100%); opacity: 0; transition-delay: 0s; transition-property: transform, opacity; transition-duration: 0.6s;}
    .mainPage [class^="terra"][class*="Area"].active > div > div{transform: translateY(0%); opacity: 1; transition-property: transform, opacity; transition-duration: 0.6s;}
    .mainPage [class^="terra"][class*="Area"].active:has(+ .active) > div > div{transform: translateY(-100%); opacity: 0; transition-delay: 0s;}
    /* 메인 회사소개 */
    .mainPage .companyArea div{transform: translateY(100%); opacity: 0; transition-property: transform, opacity; transition-duration: 0.6s;}
    .mainPage .companyArea.active div{transform: translateY(0%); opacity: 1;}
    /* 메인 게시판 */
    .mainPage .boardArea div{transform: translateY(100%); transition: var(--aniDuration) transform;}
    .mainPage .boardArea.active div{transform: translateY(0);}

    .mainPage [class*="arrow"]{opacity: 0; transition: var(--aniDuration) opacity ease-in-out}
    .mainPage [class*="arrow"] span{--aniDuration: 0.2s; background-color: transparent;}
    .mainPage [class*="arrow"] span::before{content: ''; position: absolute; left: 0; top: 0; width: 0; height: 100%; background: var(--bc); transition: var(--aniDuration) width ease-in-out;}
    .mainPage [class*="arrow"] span::after{transition: var(--aniDuration) width ease-in-out;}
    .mainPage [class*="Area"]:not(.active) [class*="arrow"] span::after{width: 0;}
    .mainPage .active [class*="arrow"]{opacity: 1; transition-delay: calc(var(--aniDelay) + var(--aniDelay-basic));}
    .mainPage .active [class*="arrow"] span::before{width: 100%; transition-delay: calc(var(--aniDelay) + var(--aniDelay-basic) + 0.4s);}
    .mainPage .active [class*="arrow"] span::after{transition-delay: calc(var(--aniDelay) + var(--aniDelay-basic) + 0.5s);}
</style>