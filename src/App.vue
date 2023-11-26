<template>
    <router-view />
</template>

<script>
export default {
  name: 'App',
  methods: {
    pageTitle(){
      document.title = this.$route.name
    }
  },
  created(){
    this.pageTitle();
  },
  watch: {
    '$route' () {
      this.pageTitle();
    }
  }
}
</script>

<style>
</style>
