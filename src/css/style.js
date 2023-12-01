
// css용 index
function styleIdx(){
    document.querySelectorAll('[data-styleIdx], [data-animate-list], [data-stickyAni]').forEach((parents)=>{
        let children = []
        parents.getAttribute('data-styleIdx') ?
            parents.childNodes.forEach((element)=>{
                element.tagName.toLowerCase() === parents.getAttribute('data-styleIdx') && children.push(element)
            }) : 
            (children = [...parents.childNodes]);
        parents.style.setProperty('--styleTotal', children.length);
        children.forEach((element, idx)=>{
            element.style.setProperty('--styleIdx', idx);
        })
    })
}

// 관리자, 유저 공통
export function globalStyle(){
    styleIdx();
}


// 한화 폰트 크기조정
function hanshwFontSize(){
    if (!(/iPhone/i.test(navigator.userAgent))) {
        document.querySelectorAll('.font-hanwha').forEach((element)=>{
            element.removeAttribute('style');
            element.style.setProperty('font-size',parseInt(getComputedStyle(element).fontSize) - 2 + 'px');
        })
    }else{
        document.querySelector('.companyPage').classList.add('ios');
    }
}


// 현재 보고 있는 화면의 세로 크기
function fullStyle(){
    document.getElementById('app').style.setProperty('--fullWidth', `${window.innerWidth}px`)
    document.getElementById('app').style.setProperty('--fullHeight', `${window.innerHeight}px`)
}

// desktop, mobile에 따른 스크롤 존재 유무 ( 스크롤 크기 )
function isScroll(){
    let scrollWidth;
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        scrollWidth = '0'
    } else {
        scrollWidth = '17'
    }
    document.querySelector('html').style.setProperty('--scrollWidth', `${scrollWidth}px`)
}

// 유저페이지 공통 함수
export function userStyle(){
    fullStyle();
    isScroll();
    hanshwFontSize();
}

// 유제 퍼이지 리사이즈 함수
export function userResize(){
    window.addEventListener('resize', function(){
        fullStyle();
        isScroll();
        hanshwFontSize();
    });
}


export function scrollPositionAdd(){
    window.addEventListener('scroll', scrollPosition)
}

// 스크롤 위치에 따른 active 클래스
export function scrollPosition(){
    if(!document.querySelectorAll('[data-scrollPosition]').length){
        return
    }
    // const scrollTop = window.scrollY;
    const headerElementHeight = document.querySelector('header').offsetHeight;
    document.querySelectorAll('[data-scrollPosition]').forEach((element)=>{
        const setPosition = element.getAttribute('data-scrollPosition') ? window.innerHeight * (element.getAttribute('data-scrollPosition') / 100) : 0;
        if(element.getBoundingClientRect().y < headerElementHeight + setPosition){
            element.classList.add('active');
        }else{
            element.classList.remove('active');
        }
    })
}

export function scrollPositionRemove(){
    window.removeEventListener('scroll', scrollPosition)
}

const positionActiveMap = {
    add(){
        window.addEventListener('scroll', scrollPosition)
    },
    remove(){
        window.removeEventListener('scroll', scrollPosition)
    }
}

export function positionActive(type){
    return positionActiveMap[type]()
}