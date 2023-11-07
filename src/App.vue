<template>
  <header>
    <div>
      <h1><router-link to="/" class="logo">한화 신한 테라와트아워 로고 이미지</router-link></h1>
      <nav>
        <ul>
          <li><router-link to="/company">기업 소개</router-link></li>
          <li><router-link to="/solution">전력거래 솔루션</router-link></li>
          <li><router-link to="/recruit">발전자원 모집</router-link></li>
          <li><router-link to="/board">게시판</router-link></li>
          <li><router-link to="/inquiry">사업 문의</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
  <router-view></router-view>
  <footer>
    <div class="contentSize">
      <ul>
        <li><router-link to="">기업 소개</router-link></li>
        <li><router-link to="">RE100 이행 솔루션</router-link></li>
        <li><router-link to="">발전자원 모집</router-link></li>
        <li><router-link to="">게시판</router-link></li>
        <li><router-link to="">사업 문의</router-link></li>
      </ul>
      <select name="" id="">
        <option value="">패밀리사이드</option>
      </select>
    </div>
    <div class="contentSize">
      <address>
        <h2 class="logo">한화 신한 테라와트아워 로고 이미지</h2>
        <dl>
          <dt>대표자명</dt>
          <dd>고성훈</dd>
        </dl>
        <dl>
          <dt>사업자 주소</dt>
          <dd>04541 서울시 중구 삼일대로 363 장교빌딩 1906호 </dd>
        </dl>
        <dl>
          <dt>사업자 번호</dt>
          <dd>243-81-02905</dd>
        </dl>
        <dl>
          <dt>대표 전화</dt>
          <dd>02-318-2309</dd>
        </dl>
        <dl>
          <dt>대표 이메일</dt>
          <dd></dd>
        </dl>
      </address>
      <div>
        <ul>
          <li><router-link to="">개인정보 처리방침</router-link></li>
          <li><router-link to="">개인정보 수집 및 처리 목적</router-link></li>
          <li><router-link to="">사업 문의</router-link></li>
        </ul>
        <ul>
          <li><a href="">인스타그램 링크</a></li>
          <li><a href="">페이스북 링크</a></li>
        </ul>
      </div>
    </div>
    <p class="contentSize">© 2023 TWh, INC. All rights reserved.</p>
  </footer>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    headerStyle(){
      const header = document.querySelector('header');
      this.$route.path === '/' ? header.classList.add('white') : header.classList.remove('white')
    },
    fullStyle(){
      document.getElementById('app').style.setProperty('--fullHeight', `${window.innerHeight}px`)
    },
    styleIdx(){
      setTimeout(()=>{
        document.querySelectorAll('[data-aniDelay]').forEach((element)=>{
          element.style.setProperty('--aniDelay', `0.${element.getAttribute('data-aniDelay')}s`)
        })
        document.querySelectorAll('[data-textAniParents]').forEach((parents)=>{
          parents.style.setProperty('--test', '44');
          // console.log(parents.style);
          parents.childNodes.forEach((element, idx)=>{
            element.setAttribute('data-textAni', idx + (Number(parents.getAttribute('data-textAniParents')) || 0))
          })
        })
        document.querySelectorAll('[data-textAni]').forEach((element)=>{
          element.style.setProperty('--textIdx', element.getAttribute('data-textAni') || 0);
          window.getComputedStyle(element).getPropertyValue('--aniDelay') || element.style.setProperty('--aniDelay', `0.6s`);
          const text = element.innerHTML;
          element.innerHTML = ''
          const spanElement = document.createElement('span');
          spanElement.innerHTML = text;
          element.appendChild(spanElement);
        })
      },0)
    }
  },
  mounted() {
    this.fullStyle();
    this.headerStyle();
    this.styleIdx();
  },
  updated(){
    console.log('?');
  },
  watch: {
    '$route' () {
      this.headerStyle();
    }
  }
}
</script>

<style>
</style>
