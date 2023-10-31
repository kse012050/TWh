<template>
    <section class="mainPage">
        <div class="topArea" data-full>
            <h2>
                <b>TWh</b>
                테라와트아워
            </h2>
            <p>재생에너지 전력거래, 지속 가능한 내일을 만듭니다.</p>
        </div>
        <ul data-full>
            <li>
                <strong>
                    기업을 위한RE100
                    솔루션
                </strong>
                <p>
                    복잡한 RE100 이행,
                    테라와트아워로 쉬워집니다.
                </p>
                <a href="#">자세히 보기</a>
            </li>
            <li>
                <strong>
                    발전사업자를 위한
                    수익 최적화 솔루션
                </strong>
                <p>
                    업계 최고 수준의
                    발전소 매입 조건을 제안합니다.
                </p>
                <a href="#">자세히 보기</a>
            </li>
        </ul>
        <div data-full>
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
        <div data-full>
            <p>
                재생에너지의 생산과 소비를 연결하는
                <b>국내 최대의 전력거래 플랫폼(VPP)</b>으로 
                성장하겠습니다.
            </p>
            <a href="#">기업 소개보기</a>
        </div>
        <div data-full>
            <h3>게시판</h3>
            <ul>
                <li>
                    <a href="#">
                        <img src="" alt="">
                        <small>보도자료</small>
                        <p>재생에너지 전력거래 전문 합작법인‘한화 신한 테라와트아워’</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="" alt="">
                        <small>인터뷰</small>
                        <p>‘한화 신한 테라와트아워’ 고성훈 대표 고성훈 대표</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="" alt="">
                        <small>보도자료</small>
                        <p>한화컨버전스-신한자산 운용, 전문 합작법인 설립 협약</p>
                    </a>
                </li>
            </ul>
            <a href="#">게시판 보기</a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'MainPage',
    data() {
        return {
            mainPage: undefined,
            fullSelectors: undefined,
        }
    },
    methods: {
        fullPageSelector() {
            this.mainPage = document.querySelector('.mainPage');
            this.fullSelectors = document.querySelectorAll('[data-full]');
            // const element = this.$refs;
            // console.log(element);
            // console.log(this.$refs.full);
            console.log(this.fullSelectors);
            let vh = window.innerHeight * 0.01;
            this.mainPage.style.setProperty('--vh', `${vh}px`)
            // this.fullSelectors.forEach(function(element) {
            //     element.style.setProperty('--vh', `${vh}px`)
            // })
        }
    },
    mounted() {
        this.fullPageSelector();
    }
}
</script>
<style>
    
</style>