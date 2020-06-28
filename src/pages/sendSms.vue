<template>
  <div class="sms-box">
    <div class="input-box" ref='inputBox' id="input-box">
      <input type="password" placeholder='——' readonly="" onfocus="this.blur()">
      <input type="password" placeholder='——' readonly="" onfocus="this.blur()">
      <input type="password" placeholder='——' readonly="" onfocus="this.blur()">
      <input type="password" placeholder='——' readonly="" onfocus="this.blur()">
      <input type="password" placeholder='——' readonly="" onfocus="this.blur()">
      <input type="password" placeholder='——' readonly="" onfocus="this.blur()">
    </div>
    <input type="tel" maxlength="6" class="sms-input" id="sms-input" v-model="sms" @input='smsChange'>
  </div>
</template>
<script>
export default {
  name: "sendSms",
  data () {
    return {
      sms: ''
    }
  },
  watch: {
    sms (val) {
      console.log('1111', val)
      let inputVal = val
      let inputBox = document.getElementById('input-box')
      let inputItem = inputBox.getElementsByTagName('input')
      console.log('2222', inputItem)
      for(let i=0; i<inputItem.length; i++) {
        inputItem[i].value = inputVal[i]
      }
      console.log(inputVal.length)
      if (inputVal.length < 6) {
        for (let q = 5; q >= inputVal.length; q--) {
          inputItem[q].value = ''
        }
      }
    }
  },
  methods: {
    smsChange () {}
  }
}
</script>
<style lang="scss">
@import '../../lib/scss/common/_mixin.scss';
.input-box {
  input{
    width: px2rem(44px);
    height: px2rem(26px);
    padding-top: px2rem(160px);
    padding-bottom: px2rem(160px);
    margin-right: px2rem(44px);
    text-align: center;
    font-size: px2rem(60px);
    border: none;
    &:last-child{
      margin-right: 0;
    }
    &::-webkit-input-placeholder{
      text-align: center;
      color: #000;
    }
  }
}
</style>