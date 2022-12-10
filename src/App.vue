<template>
   <main class="flex flex-col w-[375px] mx-auto lg:flex-row lg:w-[1440px] lg:h-[900px]">
      <div :style='bgImage' 
            class="w-full h-[240px] lg:w-[485px] lg:h-full bg-cover bg-center bg-no-repeat relative " >
         <div class="lg:absolute lg:left-[160px] lg:top-[186px] lg:w-[33.5rem] ">
            <card-front class="lg:relative"></card-front>
            <card-back class="lg:relative lg:mt-9 lg:ml-auto"></card-back> 
         </div>
      </div>
      <card-input-section />
   </main>
   <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">ramorgen</a>.
   </div>
</template>

<script setup>
   import {useWindowResize} from '../../use/hooks.js' 
   import store from "./store.js"
   import picDesktop from '/src/assets/img/bg-main-desktop.png'
   import picMobile from '/src/assets/img/bg-main-mobile.png'
   const { width, height } = useWindowResize(); 
   store.wWidth=width   
   store.wHeight=height

   store.setDefs()

   
   const bgImage = ref("")
   watch(() => store.wWidth, (newVal) => {
       bgImage.value = newVal > 1060 ? `background-image:url('${picDesktop}')` : `background-image:url('${picMobile}')`
   },{immediate:true})


   
</script>


<style>
   #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
   }

   body:not(.tab-user) button:focus,
   body:not(.tab-user) input:focus,
   body:not(.tab-user) select:focus,
   body:not(.tab-user) textarea:focus {
      outline: none;
   }
</style>
