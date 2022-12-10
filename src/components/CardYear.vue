<template>
   <card-input 
      ref="year"  class="ml-2 w-[80px]" v-model='cardExpJ' type="number" placeHolder="YY" 
      labelOffsetLeft="-ml-3"  @blurred="blurred">
         (MM/YY)
   </card-input>
</template>


<script setup>
   import store from '../store.js'
   import {useDatum} from '../../../use/hooks.js' 

   const {intYearShort} = useDatum()
   let yearFrom = intYearShort.toString()
   let yearTo = (intYearShort+8).toString()

   // valid value: from this year to this year + 8 years
   const regY = new RegExp(`(2[${yearFrom.slice(1,2)}-9]|3[0-${yearTo.slice(1,2)}])`,'g')

   const errorMessage = ref("")
   const year = ref(null)
   const isError = ref(true)

   const cardExpJ = computed({
      get() {
         return store._cardExpY
      },
      set(newValue) {
         store._cardExpY=store.cardExpY = newValue
         isValid(newValue)
      },
   })

   const isValid = (value,mode=1) => { // mode=1:called from computed(), mode=0: called from blurred()
      if (regY.test(value) == true){
            store.expErrorMessage=""
            year.value.setError(false)
            isError.value=false
      } else {
         if ((mode===1 && value.length>1) || (mode===0 && value.length===0)){
            store.expErrorMessage = `Invalid: (valid: ${yearFrom}-${yearTo})`
            store.cardExpY = "00"
            store._cardExpY =""
            year.value.setError(true)
            isError.value=true
         }
      }
   }
   
   const blurred = (value) => {
      isValid(value,0)
   }
   const validate = (value) => {
      isValid(store._cardExpY,0)
      store.expErrorMessage = isError.value ? 'Invalid value(s) : MM?/YY?/CVC?' : ''
      return !isError.value
   }

   defineExpose({
      isError, validate
   })
</script>


<style scoped>

</style>