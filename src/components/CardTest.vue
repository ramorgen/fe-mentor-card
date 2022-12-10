<template>
   <div class="w-full h-[240px] relative bg-no-repeat bg-cover bg-center ">
      <div style="background-image:url('/src/assets/img/bg-card-front.png')" 
         class="absolute w-[447px] h-[245px]  scale-[.65] translate-x-[-60px] translate-y-20 z-10">
      <div class="pl-8 pt-8">
         <svg class="w-[84px] h-[47px]"  fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
      </div>
      <div class="text-[27px] pl-8 pt-16   lg:pl-8 lg:pt-16 tracking-[0.145em] leading-none lg:text-[27px] text-white">
         {{cardNumber}}
      </div>
      <div class="pl-8 pt-8  text-sm tracking-widest leading-none w-[410px] text-white flex justify-between">
         <div>
            {{cardName}}
         </div>
         <div>
            {{cardExpM}}/{{cardExpY}}
         </div>
      </div>

   </div>
      <div style="background-image:url('/src/assets/img/bg-card-back.png')" 
            class="absolute top-[-10px] left-[-7px] w-[447px] h-[245px] scale-[.65] lg:scale-100 ">
      
         <div class="pl-[360px] pt-[113px] text-sm tracking-widest leading-none text-white">
            {{cardCvC}}
         </div>

      </div>

   </div>
</template>


<script setup>
   import store from '../store.js'
   const cardName = computed(()=>{return store.cardName})
   const cardNumber = computed(()=>{return store.cardNumber})
   const cardExpM = computed(()=>{return store.cardExpM})
   const cardExpY = computed(()=>{return store.cardExpY})


   const cardCvC = computed(()=>{return store.cardCvC})
</script>


<style scoped>

</style>