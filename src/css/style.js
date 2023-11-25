function styleIdx(){
    document.querySelectorAll('[data-styleIdx]').forEach((parents)=>{
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

export function globalStyle(){
    styleIdx();
}


function hanshwFontSize(){
    document.querySelectorAll('.font-hanwha').forEach((element)=>{
        element.removeAttribute('style');
        element.style.setProperty('font-size',parseInt(getComputedStyle(element).fontSize) - 2 + 'px');
    })
}

function fullStyle(){
    document.getElementById('app').style.setProperty('--fullHeight', `${window.innerHeight}px`)
}

function isScroll(){
    let scrollWidth;
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        scrollWidth = '0'
    } else {
        scrollWidth = '17'
    }
    document.querySelector('html').style.setProperty('--scrollWidth', `${scrollWidth}px`)
}

export function userStyle(){
    fullStyle();
    isScroll();
    hanshwFontSize();
}

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

export function scrollPosition(){
    const scrollTop = window.scrollY;
    const headerElementHeight = document.querySelector('header').offsetHeight;
    document.querySelectorAll('[data-scroll]').forEach((element)=>{
        if(scrollTop > element.offsetTop - headerElementHeight){
            element.classList.add('active');
        }else{
            element.classList.remove('active');
        }
    })
}

export function scrollPositionRemove(){
    window.removeEventListener('scroll', scrollPosition)
}