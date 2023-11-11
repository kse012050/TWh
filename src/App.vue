<template>
    <router-view />
</template>

<script>
export default {
  name: 'App',
  methods: {
    fullStyle(){
      document.getElementById('app').style.setProperty('--fullHeight', `${window.innerHeight}px`)
    }
  },
  mounted() {
    this.fullStyle();
  }
}
</script>

<style>
</style>
