<template>
   <div class="w-full">
      <label :for="inpId" class="block mb-1.5 text-[12px] tracking-widest font-medium" :class="labelOffsetLeft" >
         <slot></slot>
      </label>
      <input
         :id="inpId"
         class="transition rounded-md  w-full placeholder:text-gray-400 placeholder:opacity-70 "
         :class="[errorFlag ? 'border-[#ff5252] focus:ring-[#ff5252]' : 'border-gray-300 focus:ring-[rgb(185,102,193)]']"
         :type="type"
         :value="modelValue"
         :placeholder="placeHolder"
         :maxlength=maxLength
         @input="$emit('update:modelValue', $event.target.value)"
         @blur="$emit('blurred',$event.target.value)"
      />
   </div>
</template>

<script setup>
   import {useRandom} from '../../../use/hooks.js' 
   import { onMounted, ref } from 'vue'

   defineEmits(['update:modelValue','blurred'])
   
   const props=defineProps({
      type:{
         type: String,
         default: 'text'
      },
      modelValue:{
         type: String,
         default: ''
      },
      placeHolder:{
         type: String,
         default:""
      },
      labelOffsetLeft:{
         type: String,
         default:""
      },
      maxLength:{
         type: String,
         default:"100"
      }
   })

   const errorFlag = ref(false)
   const setError = (isError) => {
      errorFlag.value = isError
   }

   const inpId=ref()
   onMounted(() => {
      inpId.value='ip'+ useRandom()
   })
   defineExpose({
      setError
   })

</script>


<style  scoped>
   input::-webkit-outer-spin-button,
   input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }

   input[type=number] {
      -moz-appearance: textfield;
   }
</style>