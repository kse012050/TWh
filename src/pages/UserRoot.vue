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
import { positionActive } from '../css/style.js'

export default {
  name: 'UserRoot',
  components: { 
    UserHeader,
    UserFooter
  },
  methods: {
    aniIdx(){
      setTimeout(()=>{
        // 설정 하지 않으면 0s
        document.querySelectorAll('[data-aniDelay]').forEach((element)=>{
          element.style.setProperty('--aniDelay', `${element.getAttribute('data-aniDelay') / 10}s`)
        })
        // 설정 하지 않으면 0.2s
        document.querySelectorAll('[data-aniDelay-list]').forEach((element)=>{
          element.style.setProperty('--aniDelay-list', `${element.getAttribute('data-aniDelay-list') / 10}s`)
        })
        // 설정 하지 않으면 0s
        document.querySelectorAll('[data-aniDelay-basic]').forEach((element)=>{
          element.style.setProperty('--aniDelay-basic', `${element.getAttribute('data-aniDelay-basic') / 10}s`)
        })

        document.querySelectorAll('[data-textAni]').forEach((element)=>{
          let text = element.innerHTML.replaceAll('<span>','').replaceAll('</span>','').split('<br>');
          element.innerHTML = ''
          text.forEach((value, idx)=>{
            const spanElement = document.createElement('span');
            spanElement.style.setProperty('--aniIdx', idx);
            spanElement.innerHTML = `<span>${value}</span>`;
            element.appendChild(spanElement);
          })
        })
 
        positionActive('add');
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