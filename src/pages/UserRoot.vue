<template>
  <div class="userPage">
    <user-header />
    <router-view></router-view>
    <user-footer />
  </div>
</template>
<script>
import { globalStyle, userStyle, userResize } from '../css/style.js'
import UserHeader from "@/components/UserHeader.vue";
import UserFooter from '@/components/UserFooter.vue';

export default {
  name: 'UserRoot',
  components: { 
    UserHeader,
    UserFooter
  },
  methods: {
    aniIdx(){
      setTimeout(()=>{
        document.querySelectorAll('[data-aniDelay]').forEach((element)=>{
          element.style.setProperty('--aniDelay', `0.${element.getAttribute('data-aniDelay')}s`)
        })
        document.querySelectorAll('[data-textAniParents]').forEach((parents)=>{
          parents.childNodes.forEach((element, idx)=>{
            element.setAttribute('data-textAni', idx + (Number(parents.getAttribute('data-textAniParents')) || 0))
          })
        })
        
        document.querySelectorAll('[data-aniIdx]').forEach((parents)=>{
          parents.style.setProperty('--aniTotal', parents.childNodes.length);
          parents.childNodes.forEach((element, idx)=>{
            element.style.setProperty('--aniIdx', Number(parents.getAttribute('data-aniIdx') || 0) + idx);
            window.getComputedStyle(element).getPropertyValue('--aniDelay') || element.style.setProperty('--aniDelay', `0.6s`);
          })
        })
        document.querySelectorAll('[data-textAni]').forEach((element)=>{
          // element.style.setProperty('--textIdx', element.getAttribute('data-textAni') || 0);
          window.getComputedStyle(element).getPropertyValue('--aniDelay') || element.style.setProperty('--aniDelay', `0.6s`);
          let text = element.innerHTML.replaceAll('<span>','').replaceAll('</span>','').split('<br>');
          element.innerHTML = ''
          text.forEach((value, idx)=>{
            const spanElement = document.createElement('span');
            spanElement.style.setProperty('--textIdx', Number(element.getAttribute('data-textAni') || 0) + idx);
            spanElement.innerHTML = `<span>${value}</span>`;
            element.appendChild(spanElement);
          })
        })
      },0)
    },
    
  },
  mounted() {
    this.aniIdx();
    globalStyle();
    userStyle();
    userResize();
  },
  updated(){
    globalStyle();
    userStyle();
  },
  watch: {
    '$route' () {
      this.aniIdx();
    }
  }
}
</script>
<style>
    
</style>