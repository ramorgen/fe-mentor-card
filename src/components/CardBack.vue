<template>
   <bg-image :pic=picBack
         class="absolute top-[-10px] left-[-7px] w-[447px] h-[245px] scale-[.65] lg:scale-100 shadow-2xl">

      <div class="pl-[360px] pt-[113px] text-sm tracking-widest leading-none text-white">
         {{cardCvC}}
      </div>
   
   </bg-image>
</template>


<script setup>
   import store from '../store.js'
   import picBack from '/src/assets/img/bg-card-back.png'

   const cardCvC = computed(()=>{return store.cardCvC})
</script>
