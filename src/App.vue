<template>
  <div>
    <router-link to="/">메인</router-link>
    <router-link to="/solution">RE100 이행 솔루션</router-link>
    <router-link to="/recruit">발전자원 모집</router-link>
    <router-link to="/board">게시판</router-link>
    <router-link to="/inquiry">사업 문의</router-link>
  </div>
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
