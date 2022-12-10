<template>
   <div class="bg-white  pt-24 h-full lg:w-[955px]  lg:pt-0 lg:grid lg:items-center lg:justify-center">
      <div v-if="!isValid" class="mx-auto h-screen lg:ml-20  w-[350px] lg:h-[385px]">
         <card-name ref="cName" />
         <card-number ref="cNumber" />
         <div class="mt-8 flex flex-row">
            <card-month ref="cMonth" />
            <card-year ref="cYear" />
            <card-cvc ref="cCvc" />
         </div>
         <p class="text-[#ff5252]" v-if="(store.expErrorMessage.length>0)">{{store.expErrorMessage}}</p>
         <button @click="checkIt" class="mt-14 bg-black text-white text-center w-full h-14 rounded-md hover:tracking-widest      hover:font-bold focus:outline-none focus:ring focus:ring-[rgb(185,102,193)]">Confirm</button>
      </div>
      <div v-else class="lg:ml-20  lg:w-[350px] lg:h-[385px] flex flex-col items-center">
         <div class="pt-11">
            <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)"/><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3"/><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE"/><stop offset="1" stop-color="#610595"/></linearGradient></defs></svg>
         </div>
         <p class="pt-9 text-[29px] tracking-widest">THANK YOU!</p>
         <p class="pt-3 text-base text-slate-400">We've added your card details</p>
         <button @click="setDefs" class="mt-11 bg-black text-white text-center w-10/12 lg:w-full h-14 rounded-md hover:tracking-widest  hover:font-bold focus:ring-[rgb(185,102,193)]">Continue</button>
      </div>
   </div>
</template>


<script setup>
   import store from '../store.js'


   const cName = ref(null)
   const cNumber = ref(null)
   const cMonth = ref(null)
   const cYear = ref(null)
   const cCvc = ref(null)
   const isValid = ref()

   const checkIt = () => {
      if(
         cName.value.validate() &&
         cNumber.value.validate() &&
         cMonth.value.validate() &&
         cYear.value.validate() &&
         cCvc.value.validate()
      ){
         isValid.value=true
        
      }
   }

   const setDefs = () => {
      isValid.value=null
      store.setDefs()
   }

</script>
