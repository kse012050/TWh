<template>
    <section class="mainPage">
        <div class="topArea" data-full>
            <div>
                <h2>
                    <b>TWh</b>
                    테라와트아워
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
                            RE100 솔루션
                        </strong>
                        <p>
                            복잡한 RE100 이행,<br>
                            테라와트아워로 쉬워집니다.
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
        <div class="terraArea" data-full>
            <div>
                <p>
                    <strong>테라와트아워는</strong>
                    전문성과 안정성을 갖춘<br>
                    <b>재생에너지 전력거래 전문 기업</b>입니다.
                </p>
                <div>
                    <strong>1GW+</strong>
                    <p>재생에너지 구축, 운영 사업 역량</p>
                </div>
                <div>
                    <strong><b>1500</b>억 규모</strong>
                    <p>RE100 전용 펀드 설정</p>
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
        <div class="boardArea contentSize" data-full>
            <h3>게시판</h3>
            <ul class="boardBox">
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
            this.fullSelectors = document.querySelectorAll('[data-full]');
            let vh = window.innerHeight * 0.01;
            this.mainPage.style.setProperty('--vh', `${vh}px`)
        },
        typingEvent() {
            const typingEle = document.querySelector('.topArea p');
            // const typginBackup = typingEle.innerHTML;
            typingEle.innerHTML = ''
            this.fullEvent();
            /* let count = 0;
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
                                console.log('끝1');
                                this.fullEvent();
                            })
                            document.querySelector('.mainPage .topArea.intro > .bg').addEventListener('animationend',function(){
                                console.log('끝2');
                            })
                        }, 1000)
                    }
                }, 100);
            },1000); */
        },
        fullEvent(){
            const fullSelectors = document.querySelectorAll('[data-full]');
            let isFull = false;
            console.log(fullSelectors);
            fullSelectors.forEach((element, idx)=>{
                let currentIdx = idx;
                element.addEventListener('mousewheel', function(e){
                    if(isFull){return}
                    if(e.wheelDelta < 0 && fullSelectors[currentIdx + 1]){
                        // currentIdx++;
                        fullSelectors[idx + 1].classList.add('active')
                        isFull = true;
                    }else if(e.wheelDelta > 0 && fullSelectors[currentIdx - 1]){
                        // currentIdx--;
                        fullSelectors[currentIdx].classList.remove('active')
                        isFull = true;
                    }
                    // console.log(fullSelectors[currentIdx]);
                    if(isFull){
                        // console.log(currentIdx);
                        // fullSelectors[currentIdx].classList.contains('active') ? 
                        //     fullSelectors[currentIdx + 1].classList.remove('active') :
                        //     fullSelectors[currentIdx].classList.add('active');
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
    body{overflow: hidden;}
    [data-full]{position: fixed; left: 0; top: 0; width: 100%; z-index: -1; transition: 0s 1s z-index;}
    [data-full].active{z-index: 1; transition: 0s;}
    .mainPage .topArea{z-index: 1;}

    /* header{opacity: 0; pointer-events: none;}
    .mainPage .topArea{--color: #222; color: var(--color); position: relative; z-index: 1; background-color: white;}
    .mainPage .topArea::after{content: ''; position: absolute; top: 50%; left: 0; width: 100%; height: 1px; transform: translateY(-50%); background: red;}
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

    .mainPage .solutionArea ul li{transform: translateY(0); transition: 0.5s transform;}
    .mainPage .solutionArea ul li:nth-child(1){transform: translateY(-100%);}
    .mainPage .solutionArea ul li:nth-child(2){transform: translateY(100%);}
    .mainPage .solutionArea ul li div{opacity: 0; transform: translateY(100px);}
    .mainPage .solutionArea.active ul li{transform: translateY(0); transition: 0.5s transform;}
    .mainPage .solutionArea.active ul li div{opacity: 1; transform: translateY(0); transition-property: opacity, transform; transition-duration: 0.5s; transition-delay: 0.3s; }
    .mainPage .terraArea{transform: translateX(100%); background-color: rgba(0, 15, 53, 0.9); transition: 0.5s transform;}
    .mainPage .terraArea.active{transform: translateX(0); }
</style>