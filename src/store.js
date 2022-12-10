import { reactive } from "vue";

const  store = reactive({
   version: "1.0.00",
   wWidth:0,
   wHeight:0,

   cardName: "",
   _cardName: '',
   cardNumber:'',
   _cardNumber: '',
   cardExpM:'',
   _cardExpM:'',
   cardExpY:'',
   _cardExpY:'',
   cardCvC:'',
   _cardCvC:'',
   expErrorMessage:'',

   setDefs(){
      this.cardName = 'JANE APPLESEED'
      this.cardNumber = '0000 0000 0000 0000'
      this.cardExpM = this.cardExpY = '00'
      this.cardCvC = '123'
      this._cardName=this._cardNumber=this._cardCvC=this._cardExpM=this._cardExpY=""
   }
})

export default store
