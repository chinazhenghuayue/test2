<template>
  <div class="table">
    <table border="1" cellpadding="0" cellspacing="0">
      <tr>
        <th>id</th>
        <th>type</th>
        <th>name</th>
      </tr>
      <tr v-for="(item,index) in list" :key="index">
        <th>{{item.id}}</th>
        <th>{{item.type}}</th>
        <th>{{item.name}}</th>
        <th>
          <div>
            <button v-if="item.type === 'IMG'">图片预览</button>
            <button>删除</button>
            <button>下载</button>
          </div>
        </th>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Ztable',
  data () {
    return {
      list: [
        {
          "id": '1',
          "type": 'IMG',
          "name": 'aaaaaa',
          "mainTain": false
        },
        {
          "id": '2',
          "type": 'TXT',
          "name": 'bbbb',
          "mainTain": true
        },
      ],
      lists:[]
    }
  },
  created () {
    // this.lists = this.deleteArr(this.list, "mainTain",false)
    // 过滤方法
    this.lists = this.list.filter(item=>{return item.mainTain})
    console.log(this.list,this.lists,'!!!!!!')
  },
  mounted () {
    // 定义数字0:
    var zero = function (f) {
        return function (x) {
            return x;
        }
    };

    // 定义数字1:
    var one = function (f) {
        return function (x) {
            return f(x);
        }
    };

    // 定义加法:
    function add(n, m) {
        return function (f) {
            return function (x) {
                return m(f)(n(f)(x));
            }
        }
    }
    var two = add(one(1), one(1))
    console.log('two',two)
  },
  methods: {
  // 根据json数组对象中的某一属性，删除对象
    deleteArr (arr,types, value) { // 要操作的数组；属性；属性值
      // 1.遍历数组中的每一个对象
      // 2.判断当前对象上的属性，如果符合条件就删除，否者继续遍历
      let length = arr.length
      for (let i=0; i < length; i++) {
        if (arr[i][types] == value) {
          if (i == 0) {
            arr.shift() //删除并返回数组的第一个元素
            return arr
          } else if (i == length-1) {
            arr.pop() //删除并返回数组的最后一个元素
            return arr
          } else {
            arr.splice(i,1) //删除下标为i的元素
            return arr
          }
          // this.lists = arr
        }
      }
    }
  }
}
</script>