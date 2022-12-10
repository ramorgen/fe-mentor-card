<template>
   <card-input ref="cName" v-model='cardName' placeHolder="e.g. Jane Appleseed" @blurred="blurred">
      CARDHOLDER NAME
   </card-input>
   <p class="text-[#ff5252]" v-if="(errorMessage.length>0)">Invalid: {{errorMessage}}</p>
</template>


<script setup>
   import store from '../store.js'

   const cName = ref(null)
   const reg = /^[^±!@£$%^&*_+§¡€#¢§¶•ªº«\\/<>?:;|=,\d]{1,}$/

   const errorMessage = ref("")
   const isError = ref(true)
   const setError = (b) => {
      cName.value.setError(b)
      isError.value=b
      if(false){
         errorMessage.value=""
      }
   }

   const cardName = computed({
      get() {
         return store._cardName
      },
      set(newValue) {
         if (newValue.length===0){
            store._cardName=store.cardName=""
         }
         isValid(newValue)
      },
   })
   const isValid = (value) => {
      if (reg.test(value)){
         store._cardName = value
         store.cardName = value.toUpperCase()
         setError(false)
         errorMessage.value = ""
      } else {
         cName.value.setError(true)
         setError(true)
         errorMessage.value="contains invalid characters"
      }
   }
   const blurred = (value) => {
      
      if(value.includes(" ")){
         isValid(value)
      } else {
         errorMessage.value = "must have at least two words"
         setError(true)
      }
      if (value.length===0){
         errorMessage.value = "can not be empty"
       
         setError(true)
      }
   }
   const validate = () => {
      blurred(store._cardName)
      return !isError.value
   }
   defineExpose({
      isError, validate
   })
</script>


<style scoped>

</style>