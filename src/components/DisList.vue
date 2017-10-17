<template>
  <div v-if="num" class="dislist">
    <div class="result-tip">
      共搜索到<span
      style="color: #41B8b0;display: inline-block;padding: 0 5px;font-size: 20px;font-family: Arial">{{num}}</span>位病人
    </div>
    <div class="list-box">
      <span class="list-title">自定义病人队列统计表</span>
      <ul class="list-lists">
        <li v-for="(list,key) in lists" v-if="key!==0">
          <input @change="fn" style="position: relative;top: -1px" type="checkbox" v-model="list.checked">
          <span>{{list.text}}</span>
        </li>
      </ul>
    </div>
    <ul class="listInfo-tab">
      <li @click="changeTab" :class="{activeClass:active==key}" :id='list.name' v-for="(list,key) in lists"
          v-if="list.checked">
        {{list.text}}
      </li>
    </ul>
    <ul class="listInfo-list-check">
      <li class="list-check-item" v-for="(list,key) in lists" v-if="active==key">
      </li>
    </ul>
    <div class="listInfo-table">
      <span class="list-filter">筛选</span>
      <ul class="list-check-box">
        <li v-for="item in staList">
          <input @change="toggleList" style="position: relative;top: -1px" type="checkbox" v-model="item.checked">
          <span>{{item.title}}</span>
        </li>
      </ul>
      <span style="font-size: 14px;">共搜索到
      <span>{{num}}</span>
      条记录</span>
      <ul class="staTable">
        <li class="staTable-header">
          <span v-for="item in staList" v-show="item.checked">{{item.title}}</span>
        </li>
        <li v-for="item in lists1" class="staTable-body">
          <span v-for="col in staList" v-show="col.checked" >{{item.data[col.key]}}</span>
        </li>
        <li class="staTable-footer">
          <div style="float: right">
            <span @click="goPrev" class="prev">上一页</span>
            <span @click="goNext" class="next">下一页</span>
            <span>跳转到
            <input type="text" style="width: 16px;height: 16px;text-align: center">
          </span>
            <span @click="goNum" class="go">确定</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="nosearch" v-else>暂无搜索结果，请重新输入</div>
</template>

<script>
  import utils from '../assets/js/utils'
  import axios from 'axios'
  import $ from 'jquery'
  let dataInfo1 = require('../mock1.json')
  let dataInfo = require('../mock.json');
  dataInfo1.items.forEach((item, key) => {
    if (key == 0) {
      item.checked = true
    } else {
      item.checked = false
    }
  })
  console.log(dataInfo1.items);
  export default {
    props:['msg'],
    data() {
      return {
        choose:true,
        staList: dataInfo.columns,
        active: 0,
        num: utils.toThousand(18888000),
        lists: dataInfo1.items,
        lists1:dataInfo.items
      }
    },
    watch: {},
    computed: {},
    methods: {
      goPrev(){},
      goNext(){},
      fn(e) {
        if (e.target.checked == false) {
          $('#patient').addClass('activeClass').siblings().removeClass('activeClass')
          this.staList={...dataInfo.columns};
          this.lists1={...dataInfo.items}
        }
      },
      changeTab(e){
        $(e.target).addClass('activeClass').siblings().removeClass('activeClass');
        if(e.target.id=='patient'){
          this.staList={...dataInfo.columns};
          this.lists1={...dataInfo.items}
        }else{
          this.staList=[];
          this.lists1=[]
        }
      },
      toggleList(e){
        this.staList={...dataInfo.columns};
      }
    },

  }
</script>

<style scoped lang="stylus">
  .nosearch
    text-align center
    height 200px
    line-height 200px
    font-size 14px
    color #666
  .activeClass
    background #41b8b0
    color #fff

  input[type="checkbox"]
    -webkit-appearance: none; /*清除复选框默认样式*/
    background: #fff url(../assets/images/32X1.jpeg); /*复选框的背景图，就是上图*/
    background-position -169px -8px
    height: 17px; /*高度*/
    vertical-align: middle;
    width: 17px;
    cursor pointer

  input[type="checkbox"]:checked
    background-position: -233px -40px;

  .dislist
    width 1226px
    margin 15px auto
    .result-tip
      font-size 20px
      font-family Arial
    .list-box
      margin-top 15px
      width 1200px
      min-height 136px
      background #FBFBFB
      border 1px solid #E8E8E8
      padding-left 25px
      .list-title
        display inline-block
        margin-top 23px
        font-size 14px
        font-family: 'Glyphicons Halflings';
        font-style: normal;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      .list-lists
        margin-top 16px
        display flex
        flex-wrap wrap
        li
          width 92px
          margin 0 20px 12px 0
          span
            font-size 13px

    .listInfo-tab
      margin-top 22px
      border-bottom 2px solid #41b8b0
      overflow hidden
      display flex
      li
        padding 10px 15px
        font-size 14px
        cursor pointer
        &:hover
          background #379e97
          color #fff
    .listInfo-list-check
      margin-top 20px
      .list-check-item
        padding-left 25px

    .listInfo-table
      padding-left 25px
      margin-top 21px
      width 1226px
      overflow-x scroll
      .list-filter
        font-size 14px
        font-family: 'Glyphicons Halflings';
        font-style: normal;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      .list-check-box
        margin 10px 0
        display flex
        flex-wrap wrap
        li
          width 92px
          margin 0 20px 12px 0
          span
            font-size 13px
      .staTable
        margin-top 10px
        width 100%
        margin-left -25px
        border-left  1px solid #ddd
        border-top 1px solid #ddd
        span
          font-size 14px
          display inline-block
          border-right 1px solid #ddd
          border-bottom  1px solid #ddd
          text-align center
          height 35px
          line-height 35px
          padding 2px
        .staTable-header
          background #F0F0F0
          color rgb(51, 51, 51)
          font-weight bold
          width 100%
          display flex
          span
            flex 1
        .staTable-body
          display flex
          span
            flex 1
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            color #666
        .staTable-footer
          box-sizing border-box
          height 40px
          width 100%
          border-right 1px solid #ddd
          border-bottom  1px solid #ddd
          span
            border none
          .go, .prev, .next
            display inline-block
            width 50px
            cursor pointer
            height 19px
            line-height 21px
            &:hover
              background #41b8b0
              color #fff
      .change-page
        width 1226px
        height 35px
        border 1px solid #ddd
        border-top none
        box-sizing border-box

</style>
