<template>
   <div :style=bgImage class="bg-no-repeat bg-cover bg-center">
      <slot></slot>
   </div>
</template>


<script setup>
   const props = defineProps({
      pic : String
   })
   const bgImage = `background-image:url('${props.pic}')`;
</script>

