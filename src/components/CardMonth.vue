<template>
   <card-input 
      ref="month"  class="w-[80px]" v-model='cardExpM' type="number" 
      placeHolder="MM" @blurred="blurred">
         EXP. DATE
   </card-input>
</template>


<script setup>
   import store from '../store.js'

   const month = ref(null)
   const isError = ref(true)

   const cardExpM = computed({
      get() {
         return store._cardExpM
      },
      set(newValue) {
         isValid(newValue)
       },
   })

   const isValid = (value) => {
      if( /\b([1-9]|1[0-2])\b/.test(value)){
         store._cardExpM=store.cardExpM = value
         store.expErrorMessage=""
         isError.value=false
         month.value.setError(false)
         return
      }
      store._cardExpM=""
      store.cardExpM = "00"
      isError.value=true
      store.expErrorMessage = 'Invalid: (valid: 1-12)'
      month.value.setError(true)
   }

   const blurred = (value) => {
      isValid(value)
   }
   const validate = () => {
      isValid(store._cardExpM)
      store.expErrorMessage = isError.value ? 'Invalid value(s) : MM?/YY?/CVC?' : ''
      return !isError.value
   }
 
   defineExpose({
      isError, validate
   })
</script>


<style scoped>

</style>