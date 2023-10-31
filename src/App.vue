<template>
  <header class="white">
    <div>
      <h1><router-link to="/">한화 신한 테라와트아워 로고 이미지</router-link></h1>
      <nav>
        <ul>
          <li><router-link to="/">메인</router-link></li>
          <li><router-link to="/solution">RE100 이행 솔루션</router-link></li>
          <li><router-link to="/recruit">발전자원 모집</router-link></li>
          <li><router-link to="/board">게시판</router-link></li>
          <li><router-link to="/inquiry">사업 문의</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
</style>
