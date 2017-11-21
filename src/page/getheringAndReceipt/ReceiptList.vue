<template>
  <div>
    <input id="search" type="text">
    <ul id="sContent"></ul>
    <input class="kk" type="file">
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <h1>发票发票发票发票</h1>
      <div v-show="false" class="popWrap">
          <div class="content">
            <mt-datetime-picker
              v-show="dataShow"
              :startDate="startDate"
              :endDate ="endDate"
              type="date"
              year-format="{value} 年"
              month-format="{value} 月"
              date-format="{value} 日"
              @confirm="handleConfirm">
            </mt-datetime-picker>


            <!-- <mt-datetime-picker v-show="dataShow"
              ref="picker"
              type="date"
              v-model="pickerValue">
            </mt-datetime-picker>             -->
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <p>我是文本我是文本</p>
            <div class="buttonDiv">
              <button @click="dataShow = !dataShow">按钮1</button>
              <button>按钮2</button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import touch from '../../js/touch.js';
export default {
  name: 'ReceiptList',
  data () {
    return {
     pickerValue : '2010',
     dataShow : false,
     startDate : new Date('2010-10-20'),
     endDate : new Date('2020-10-20'),
    }
  },
  methods: {
    search () {
      window.onload = function() {
        let json = [
          {
            name : 'a',
            gender : 'male'
          },
          {
            name : 'aa',
            gender : 'male'
          },
          {
            name : 'aaa',
            gender : 'male'
          },
          {
            name : 'aaaa',
            gender : 'female'
          },
          {
            name : 'aa1',
            gender : 'male'
          },
          {
            name : 'abd',
            gender : 'female'
          },
          {
            name : 'add',
            gender : 'male'
          },
          {
            name : 'acc',
            gender : 'male'
          },
          {
            name : 'aeee',
            gender : 'male'
          },
          {
            name : 'afdf',
            gender : 'female'
          },
        ]
        let word = document.getElementById('search');
        word.oninput = function () {
          let val = word.value;
          console.log(val)
          
        }
      }


    },
    upImg () {
      window.onload =function() {
        let _this = this;
        let input = document.querySelector('.kk');
        input.onchange = function () {
          let file = this.files[0];
          let fReader = new FileReader();
          // console.log(fReader);
          fReader.readAsDataURL(file);
          fReader.onload = function (e){
            let img = document.createElement('img');
            img.style.width = '8rem';
            img.style.height = '2rem';
            img.setAttribute('src',e.target.result);
            input.parentNode.insertBefore(img,input);
          }
          // console.log(fReader.result);

          // console.log(file)
        }
      }
    },
      openPicker() {
        this.$refs.picker.open();
      },
      handleConfirm(val) {
        let init = new Date(val);
        let foramt1 = init.getFullYear();
        let foramt2 = init.getMonth() + 1;
        let foramt3 = init.getDate();
        let foramt4 = init.getHours();
        let foramt5 = init.getMinutes();
        let foramt6 = init.getSeconds();
        console.log(foramt1);
        console.log(foramt2);
        console.log(foramt3);
        console.log(foramt4);
        console.log(foramt5);
        console.log(foramt6);

        // console.log(val)
      },
  },
  created () {
    this.upImg();
    this.search();
  },
  components : {
  },

}
</script>

