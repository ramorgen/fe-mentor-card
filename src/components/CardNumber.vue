<template>
   <card-input 
      ref="cNumber" class="mt-8" v-model='cardNumber' type="text" placeHolder="e.g. 1234 5678 9123 0000" 
      :maxLength = maxLength @blurred="blurred">
      CARDNUMBER
   </card-input>
   <p class="text-[#ff5252]" v-if="(errorMessage.length>0)">{{errorMessage}}</p>
</template>


<script setup>
   import { nextTick } from 'vue';
   import store from '../store.js'

   const isError = ref(true)
   const errorMessage = ref("")
   const cNumber = ref(null)
   const maxLength = ref("19")
   const setError = (b) => {
      cNumber.value.setError(b)
      isError.value=b
      errorMessage.value= b ? "Invalid: number must have 16 digits" : ""
   }

   const cardNumber = computed({
      get() {
         return store._cardNumber
      },
      set(newValue) {
         let f=formatValue(newValue.replace(/[^0-9 ]/gm, ""))
         store.cardNumber = f     // set the formatted number on card
         nextTick(()=>{
            store._cardNumber = f  // set the formatted number in input
         })
      }
   })

   const checkEmpty = () => {
      if (store.cardNumber.length<19 || parseInt(store.cardNumber)===0){
         setError(true)
      } else {
         setError(false)
      }
   }
   const blurred = () => {
      checkEmpty()
   }
   const validate = () => {
      checkEmpty()
      return !isError.value
   }
   
   // credits: https://www.peterbe.com/plog/cc-formatter
  const formatValue = value => {
      let v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
      let matches = v.match(/\d{4,16}/g);
      let match = matches && matches[0] || ''
      let parts = []
      for (let i=0, len=match.length; i<len; i+=4) {
         parts.push(match.substring(i, i+4))
      }
      if (parts.length) {
         return parts.join(' ')
      } else {
         return value
      }
   }

   defineExpose({
      isError, validate
   })
</script>


<style scoped>

</style>