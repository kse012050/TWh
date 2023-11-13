<template>
    <section class="mainPage">
        <ol class="fullPager">
        </ol>
        <div class="topArea" data-full>
            <div>
                <h2 class="font-hanwha">
                    <b>TWh</b>
                    한화 신한 테라와트아워
                </h2>
                <p class="cursor">재생에너지 전력거래, 지속 가능한 내일을 만듭니다.</p>
            </div>
            <div class="bg"></div>
        </div>
        <div class="solutionArea" data-full>
            <ul>
                <li>
                    <div>
                        <strong>
                            기업을 위한<br>
                            재생에너지 전력거래 솔루션
                        </strong>
                        <p>
                            복잡한 RE100 이행,<br>
                            <span class="font-hanwha">테라와트아워</span>로 쉬워집니다.
                        </p>
                        <a href="#" class="arrow-white">자세히 보기<span></span></a>
                    </div>
                </li>
                <li>
                    <div>
                        <strong>
                            발전사업자를 위한<br>
                            수익 최적화 솔루션
                        </strong>
                        <p>
                            업계 최고 수준의<br>
                            발전소 매입 조건을 제안합니다.
                        </p>
                        <a href="#" class="arrow-white">자세히 보기<span></span></a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="terra01Area" data-full>
            <div>
                <div class="contentSize">
                    <p>
                        <strong class="font-hanwha">한화 신한 테라와트아워는</strong>
                        전문성과 안정성을 갖춘<br>
                        재생에너지 전력거래 전문 기업입니다.
                    </p>
                    <div>
                        <strong>1GW+</strong>
                        <p>재생에너지 구축,<br> 운영 사업 역량</p>
                    </div>
                    <div>
                        <strong>1500<small>억 규모</small></strong>
                        <p>재생에너지 사업을 위한<br> 펀드 설정</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="terra02Area" data-full>
            <div>
                <div class="contentSize">
                    <p>
                        <strong class="font-hanwha">한화 신한 테라와트아워는</strong>
                        RE100 기업 수요와 KPX 전력시장을 아우르는<br>
                        재생에너지 전력거래 전문 기업입니다.
                    </p>
                    <div>
                        <p>
                            재생에너지전기공급<br>
                            (PPA)
                        </p>
                    </div>
                    <div>
                        <p>
                            통합발전소<br>
                            (VPP)
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="companyArea" data-full>
            <p>
                재생에너지의 생산과 소비를 연결하는
                <b>국내 최대의 전력거래 플랫폼(VPP)</b>으로 
                성장하겠습니다.
            </p>
            <a href="#" class="arrow-white">기업 소개보기 <span></span></a>
        </div>
        <div class="boardArea" data-full>
            <div>
                <div class="contentSize">
                    <h3><b class="font-hanwha">테라와트아워</b>의 최신 소식을 확인해보세요.</h3>
                    <ul class="user-board">
                        <li>
                            <a href="#">
                                <img src="../images/delete/board01.png" alt="">
                                <small>보도자료</small>
                                <p>재생에너지 전력거래 전문 합작법인‘한화 신한 테라와트아워’</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../images/delete/board02.png" alt="">
                                <small>인터뷰</small>
                                <p>‘한화 신한 테라와트아워’ 고성훈 대표 고성훈 대표</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="../images/delete/board03.png" alt="">
                                <small>보도자료</small>
                                <p>한화컨버전스-신한자산 운용, 전문 합작법인 설립 협약</p>
                            </a>
                        </li>
                    </ul>
                    <a href="#" class="arrow-black">게시판 보기<span></span></a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MainPage',
    data() {
        return {
            mainPage: undefined,
            // fullSelectors: undefined,
        }
    },
    methods: {
        fullPageStyle() {
            this.mainPage = document.querySelector('.mainPage');
            const fullPager = document.querySelector('.fullPager');
            const fullSelectors = document.querySelectorAll('[data-full]');
            let vh = window.innerHeight * 0.01;
            this.mainPage.style.setProperty('--vh', `${vh}px`);
            // fullSelectors.innerHTML = ''
            fullPager.replaceChildren();
            fullSelectors.forEach((_, idx)=>{
                const fullPageList = document.createElement('li');
                fullPageList.innerText = `${idx} Page`;
                idx === 0 && fullPageList.classList.add('active');
                fullPager.appendChild(fullPageList);
            })
        },
        typingEvent() {
            const typingEle = document.querySelector('.topArea p');
            const typginBackup = typingEle.innerHTML;
            typingEle.innerHTML = ''
            // this.fullEvent();
            let count = 0;
            setTimeout(()=>{
                const typingAni = setInterval(() => {
                    typingEle.innerHTML += typginBackup[count];
                    count++
                    if(!typginBackup[count]){
                        clearInterval(typingAni);
                        setTimeout(()=>{
                            typingEle.classList.remove('cursor');
                            document.querySelector('.topArea').classList.add('intro');
                            document.querySelector('.mainPage .topArea').addEventListener('animationend',()=>{
                                this.fullEvent();
                            })
                        }, 1000)
                    }
                }, 100);
            },1000);
        },
        fullEvent(){
            const fullSelectors = [...document.querySelectorAll('[data-full]'), document.querySelector('footer')];
            const fullPager = document.querySelectorAll('.fullPager li');
            // const fullSelectors = document.querySelectorAll('[data-full]');
            let isFull = false;
            fullSelectors.forEach((element, idx)=>{
                element.addEventListener('mousewheel', function(e){
                    if(isFull){return}
                    let currentIdx = idx;
                    if(e.wheelDelta < 0 && fullSelectors[currentIdx + 1]){
                        currentIdx++;
                        if(fullSelectors[currentIdx].localName === 'footer'){
                            const footerEle = document.querySelector('footer');
                            document.querySelectorAll('[data-full].active').forEach((element)=>{
                                element.style.top = -footerEle.offsetHeight + 'px'
                            })
                        }
                        fullSelectors[currentIdx].classList.contains('boardArea') && document.querySelector('header').classList.remove('white');
                        fullSelectors[currentIdx].classList.add('active')
                        isFull = true;
                    }else if(e.wheelDelta > 0 && fullSelectors[currentIdx - 1]){
                        fullSelectors[currentIdx].classList.remove('active')
                        isFull = true;
                        if(fullSelectors[currentIdx].localName === 'footer'){
                            document.querySelectorAll('[data-full].active').forEach((element)=>{
                                element.removeAttribute('style')
                            })
                        }else{
                            fullSelectors[currentIdx].classList.contains('boardArea') && document.querySelector('header').classList.add('white');
                            currentIdx--;
                        }
                    }
                    if(isFull){
                        // console.log(currentIdx);
                        // fullSelectors[currentIdx].classList.contains('active') ? 
                        //     fullSelectors[currentIdx + 1].classList.remove('active') :
                        //     fullSelectors[currentIdx].classList.add('active');
                        fullSelectors[currentIdx].localName !== 'footer' && fullPager.forEach((element, idx)=>{
                            element.classList.remove('active');
                            idx === currentIdx && element.classList.add('active');
                        })
                        setTimeout(()=>{
                            isFull = false;
                        },1000)
                    }
                    // console.log(this);
                    // console.log(idx);
                })

            })
        },
        
    },
    mounted() {
        this.fullPageStyle();
        this.typingEvent();
        // this.fullEvent();
        window.addEventListener('resize',this.fullPageStyle)
    }
}
</script>
<style>
    body:has(.mainPage){overflow: hidden;}
    [data-full]{position: fixed; left: 0; top: 0; width: 100%; z-index: -1; transition: 0s 1s z-index;}
    [data-full]:not(.topArea):not(.active){pointer-events: none;}
    [data-full].active{z-index: 3; transition-property: z-index, top; transition-duration: 0s, 0.5s; transition-delay: 0s, 0s;}
    .mainPage .topArea{z-index: 1;}

    header + .mainPage .fullPager{--color: #999; opacity: 0;}
    header + .mainPage .fullPager li{pointer-events: none;}
    header + .mainPage .fullPager:has( + .topArea.intro){opacity: 1;}
    header + .mainPage .fullPager:has( + .topArea.intro) li{pointer-events: all;}

    .mainPage + footer{position: fixed; left: 0; bottom: 0; width: 100%;}
    .mainPage:has( .boardArea.active) + footer{z-index: 2;}
    .mainPage:has( .boardArea.active) + footer.active::before{content: ''; position: absolute; left: 0; bottom: 100%; width: 100%; height: calc(100vh - 100%);}
    .mainPage:has( + footer.active) [data-full].active{z-index: 1; transition-property: z-index, top; transition-duration: 0s, 0.5s; transition-delay: 0.5s, 0s;}

    header:has(+ .mainPage){opacity: 0; pointer-events: none;}

    /* .mainPage{color: white;} */
    .mainPage .topArea{--color: #222; color: var(--color); position: relative; z-index: 1; background-color: white;}
    /* .mainPage .topArea::after{content: ''; position: absolute; top: 50%; left: 0; width: 100%; height: 1px; transform: translateY(-50%); background: red;} */
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
    }

    .mainPage .solutionArea ul li{transform: translateY(0); transition: 0.5s transform;}
    .mainPage .solutionArea ul li:nth-child(1){transform: translateY(-100%);}
    .mainPage .solutionArea ul li:nth-child(2){transform: translateY(100%);}
    .mainPage .solutionArea ul li div{opacity: 0; transform: translateY(100px);}
    .mainPage .solutionArea.active ul li{transform: translateY(0); transition: 0.5s transform;}
    .mainPage .solutionArea.active ul li div{opacity: 1; transform: translateY(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-delay: 0.3s; }
    .mainPage [class^="terra"][class*="Area"] > div > div > *{transform: translateY(100%); opacity: 0; transition-property: transform, opacity; transition-duration: 0.5s;}
    .mainPage [class^="terra"][class*="Area"].active > div > div > *{transform: translateY(0%); opacity: 1; transition-delay: 0.5s;}
    .mainPage [class^="terra"][class*="Area"].active:has(+ .active) > div > div > *{transform: translateY(-100%); opacity: 0; transition-delay: 0s;}
    .mainPage .terra01Area > div{transform: translateX(100%); background: url(../images/main-companyBG1.png) no-repeat center left 100% / cover; transition-property: transform, background; transition-duration: 0.5s, 0.5s; transition-delay: 0s, 0.3s;}
    .mainPage .terra01Area > div > div > *{transition-delay: 0.5s;}
    .mainPage .terra01Area.active > div{transform: translateX(0); background: url(../images/main-companyBG.png) no-repeat center left 0% / cover;}
    .mainPage .companyArea p{transform: translateY(calc(100vh - 100%)); transition: 0.5s transform;}
    .mainPage .companyArea a{opacity: 0; transition: 0s 0s opacity;}
    .mainPage .companyArea.active p{transform: translateY(0%);}
    .mainPage .companyArea.active a{opacity: 1; transition: 0.5s 0.3s opacity;}
    .mainPage .boardArea div{transform: translateY(100%); transition: 0.5s transform;}
    .mainPage .boardArea.active div{transform: translateY(0);}
    .mainPage:has(+ footer.active) [data-full].active{transition-duration: 0.5s;}
</style>