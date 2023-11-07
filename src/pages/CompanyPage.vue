<template>
    <section class="companyPage">
        <div class="topArea">
            <h2 class="contentSize-padding"><span data-textAni='1'>기업 소개</span></h2>
            <div data-textAniParents="1" data-aniDelay="4">
                <strong>한화 신한 테라와트아워는</strong>
                <p>
                    재생에너지 사업 전문성과 기업 안정성을 갖춘
                    재생에너지 전력거래 전문 기업입니다.
                </p>
            </div>
            <div data-textAniParents="1" data-aniDelay="4">
                <b>사명</b>
                <strong>Powering a Sustainable Future</strong>
                <p>
                    안정적이고 전문적인 재생에너지 전력거래로
                    지속가능한 내일을 만들어갑니다.
                </p>
            </div>
            <div data-textAniParents="1" data-aniDelay="4">
                <b>비전</b>
                <strong>
                    Leading change
                    in the energy market
                </strong>
                <p>분산에너지 중심의 에너지 패러다임 전환을 선도하겠습니다.</p>
            </div>
        </div>
        <div class="test">

        </div>
    </section>
</template>
<script>
export default {
    name: 'CompanyPage',
    data() {
        return {
            topClassName: '.companyPage .topArea',
            topElement: undefined
        }
    },
    methods : {
        init(){
            this.topElement = document.querySelector(this.topClassName);
            /* document.querySelectorAll('[data-textAni]').forEach(function(element) {
                element.style.setProperty('--textIdx', element.getAttribute('data-textAni') || 0);
            }) */
        },
        firstStyle(){
            const titleElement = document.querySelector(`${this.topClassName} h2`);
            titleElement.classList.remove('active');
            setTimeout(() => {
                titleElement.classList.add('active');
            }, 300);
        },
        scrollEvent() {
            const topElement = this.topElement;
            const topContents = document.querySelectorAll(`${this.topClassName} > div`);
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
                // console.log((this.topElement.offsetHeight - this.topElement.offsetTop));
                if(scrollTop > topElementTop && scrollTop < topElementHeight + topElementTop){
                    topElement.style.setProperty('--bgY', -((scrollTop - topElementTop) / topElementHeight * 100) + 'px');
                }
                // console.log((this.topElement.offsetHeight - this.topElement.offsetTop) / (window.scrollY));
            })
            console.log(this.topElement.offsetTop);
            console.log(this.topElement.offsetHeight - this.topElement.offsetTop);
        }
    },
    mounted() {
        this.init();
        this.firstStyle();
        this.scrollEvent();
    }
}
</script>
<style scoped>
    .companyPage{--aniDutaion: .6s;}
    /* .companyPage .topArea{height: 160vh;} */
    .companyPage .topArea h2{transform: translateY(-100%); transition: all var(--aniDutaion) ease-in-out;}
    .companyPage .topArea h2.active{transform: translateY(0%);}
    .companyPage .topArea::before{transition-property: opacity, transform; transition-duration: .6s, .5s; transition-delay: 0s, 0.03s; transition-timing-function: ease-in-out, linear;}
    .companyPage .topArea:has( > div:nth-of-type(1).active)::before{opacity: 0.3;}
    .companyPage .topArea:has( > div:nth-of-type(2).active)::before{opacity: 0.1;}
    .companyPage .topArea h2.active:has(+ .active){transform: translateY(-100%);}
    .companyPage .topArea > div{transition: all .6s ease-in-out;}
    .companyPage .topArea > div:nth-of-type(1).active{transform: translateY(0);}
    .companyPage .topArea > div:nth-of-type(2).active{transform: translateY(0);}
    .companyPage .topArea > div:nth-of-type(1).active:has( + .active){transform: translateY(-100%);}
    .companyPage .topArea > div:nth-of-type(2).active:has( + .active){transform: translateY(-100%);}
    .companyPage .topArea > div:nth-of-type(3).active{transform: translateY(0);}
    .companyPage .topArea > div + .active{transform: translateY(-100%);}
</style>