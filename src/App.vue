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
      },0)
    }
  },
  mounted() {
    this.fullStyle();
    window.addEventListener('resize',this.fullStyle)
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
