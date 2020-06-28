<template>
  <div class="content">
    <input type="text" v-model="mytext">
    <ul>
      <li v-for="item in datalistcom" :key="item">{{ item }}</li>
    </ul>
    <div>
      <p>单价：<input type="text" v-model="price"></p>
      <p>数量：<input type="text" v-model="number"></p>
      <p>计算金额：{{sum}}</p>
    </div>
    <button @click="jumphtml">跳转</button>
    <div class="img-box">
      <img class="img" src="../assets/image/zhy.png" alt="">
      <span class="span1"></span>
      <span class="span2">“扫黄打非”举报专区</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datalist:["aab","bbb","ccc","ddd","aa","a","cc","dd"],
      mytext: '',
      datalistcom: [],
      price: '',
      number: '',
      sum: ''
    }
  },
  computed: {
    // 计算属性模糊查询的例子
    // datalistcom () {
    //   return this.datalist.filter(item=>item.indexOf(this.mytext)>-1)
    // },
    // sum () {
    //   return this.price*this.number
    // }
  },
  watch:{
    // 监听的参数的名字要一致
    mytext() { // watch模糊查询
      this.datalistcom = this.datalist.filter(item=>item.indexOf(this.mytext)>-1)
    },
    price(){
      console.log(this.price)
      if(this.price*this.number < 1000 && this.price*this.number > 0){
          this.sum = this.price*this.number + 100
      }else{
          this.sum = this.price*this.number
      }
    },
    number(){
      console.log(this.price)
      if(this.price*this.number < 1000 && this.price*this.number > 0){
          this.sum = this.price*this.number + 100
      }else{
          this.sum = this.price*this.number
      }
    }
  },
  beforeCreate () {
    console.log('documentdocument',document.images)
    console.log('111', document.URL)
    console.log('222', location.href)
  },
  created () {
    // console.log(this.outerFn)
    // console.log(document.addEventListener())
    document.addEventListener('visibilitychange', this.changed, false)
  },
  mounted () {
    document.addEventListener('visibilitychange', this.changed, false)
  },
  methods: {
    outerFn(){
      var i = 0; 
      function innerFn(){
          i++;
          console.log(i);
      }
      return innerFn;
    },
    changed () {
      // alert(111111)
      if (document.hidden === false) {
        console.log(document.hidden)
        console.log(location.href)
      }
    },
    jumphtml () {
      this.$router.push('/sendSms')
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '../assets/css/FZCSJW.css';
  .img-box {
    background: chartreuse;
    clear: both;
    overflow: hidden;
    margin: 50px 0;
    .img {
      width: 130px;
      height: 52px;
      vertical-align: middle;
      // background: cyan;
      float: left;
    }
    span {
      font-size: 40px;
      font-family: FZCSJW;
      // background: #f00;
      float: left;
    }
    .span1 {
      height: 50px;
      width: 0;
      border-left: 1px solid #000;
      margin: 0 10px;
    }
    .span2 {
      height: 52px;
      line-height: 58px;
    }
  }
</style>