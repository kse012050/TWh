<template>
    <router-view />
</template>

<script>
export default {
  name: 'App',
  methods: {
    fullStyle(){
      document.getElementById('app').style.setProperty('--fullHeight', `${window.innerHeight}px`)
    },
    styleIdx(){
      setTimeout(()=>{
        document.querySelectorAll('[data-styleIdx]').forEach((parents)=>{
          parents = Array.from(parents);
          parents.style.setProperty('--styleTotal', parents.childNodes.length);
          console.log(parents.getAttribute('date-styleIdx'));
          parents.getAttribute('date-styleIdx') && parents.
          // console.log(parents.childNodes.filter((elementName)=> elementName === 'a'));
          parents.childNodes.forEach((element, idx)=>{
            element.style.setProperty('--styleIdx', Number(parents.getAttribute('data-styleIdx') || 0) + idx);
            window.getComputedStyle(element).getPropertyValue('--aniDelay') || element.style.setProperty('--aniDelay', `0.6s`);
          })
        })
      },0)
    }
  },
  mounted() {
    this.fullStyle();
  },
  watch: {
    '$route' () {
      this.styleIdx();
    }
  }
}
</script>

<style>
</style>
