<template>
<card-input 
      ref="cvc"  class="ml-4 w-[180px]" v-model='cardCvC' type="number" placeHolder="e.g. 123" 
      @blurred="blurred">CVC</card-input>
</template>


<script setup>
   import store from '../store.js'

   const isError = ref(true)
   const errorMessage = ref("")
   const cvc = ref(null)
   
   const cardCvC = computed({
      get() {
         return store._cardCvC
      },
      set(newValue) {
         store._cardCvC=store.cardCvC = newValue
         isValid(newValue)
      },
   })
   const setError = (b) => {
      cvc.value.setError(b)
      isError.value=b
      store.expErrorMessage = b ? 'Invalid: (valid: 100-999)' : ''
   }

   const isValid = (value) => {
      store.expErrorMessage=""
      cvc.value.setError(false)
      isError.value=false
      if (value.length > 3){
         store.cardCvC = "000"
         store._cardCvC = ""
         setError(true)
      }
   }

   const blurred = (value) => {
      if (value.length===0 || (value.length < 3)){
         setError(true)
      }
   }
   const validate = () => {
      blurred(store._cardCvC)
      store.expErrorMessage = isError.value ? 'Invalid value(s) : MM?/YY?/CVC?' : ''
      return !isError.value

   }

   defineExpose({
      isError, validate
   })
</script>


<style scoped>

</style>