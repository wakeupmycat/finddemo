<template>
  <div class="dislist">
    <!--<div class="result-tip">-->
      <!--共搜索到<span-->
      <!--style="color: #41B8b0;display: inline-block;padding: 0 5px;font-size: 20px;font-family: Arial">{{num}}</span>位病人-->
    <!--</div>-->
    <div class="list-box">
      <span class="list-title">自定义病人队列统计表</span>
      <!--<div>-->
        <!--<input type="checkbox" v-model="all">全选-->
      <!--</div>-->
      <ul class="list-lists">
        <li v-for="(list,key) in lists" v-if="key!=0">
          <input @change="fn" style="position: relative;top: -1px" type="checkbox" v-model="list.checked">
          <span>{{list.text}}</span>
        </li>
      </ul>
    </div>
    <ul class="listInfo-tab">
      <li @click="changeTab"  :class="{activeClass:key==0}" :id='list.name' v-for="(list,key) in lists"
          v-if="list.checked">
        {{list.text}}
      </li>
    </ul>

    <div v-if="num">
      <div class="listInfo-table">
        <span class="list-filter">筛选</span>
        <ul class="list-check-box">
          <li v-for="item in staList">
            <input @change="toggleList" style="position: relative;top: -1px" type="checkbox" v-model="item.checked">
            <span>{{item.text}}</span>
          </li>
        </ul>
        <span style="font-size: 14px;">共搜索到
      <span>{{num}}</span>
      条记录</span>
        <div  style="overflow: scroll; width: 100%;margin-left: -25px">
          <table   class="staTable" border>
            <thead>
            <tr>
              <th v-for="item in staList" v-show="item.checked">
                <span :title="item.text"> {{item.text}}</span>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in lists1" class="staTable-body">
              <td :title="item.data[col.key]" v-for="col in staList" v-show="col.checked"><span>{{col.key=="birthday"?item.data[col.key].substr(0,10):item.data[col.key]}}</span></td>
            </tr>
            </tbody>

          </table>
        </div>
        <div style="width: 100%;margin-left: -25px">
          <div class="staTable-footer">
            <div style="float: right">
              <span @click="goPrev" class="prev">上一页</span>
              <span @click="goNext" class="next">下一页</span>
              <span>跳转到
            <input id="gopage" type="text" style="width: 16px;height: 16px;text-align: center">
          </span>
              <span @click="goPage" class="go">确定</span>
            </div>
          </div>

        </div>
      </div>

    </div>
    <div class="nosearch" v-else>暂无搜索结果</div>
  </div>
</template>

<script>
  import utils from '../assets/js/utils'
  import axios from 'axios'
  import $ from 'jquery'
  export default {
    props:['staList',"lists1","dataInfo","num","page"],
    data() {

      return {
        all:false,
        choose:true,
        active: 0,
        lists: [],
        dataInfo1:[]
      }
    },
    created(){
      axios.get("/_/hosp/search/science/category").then(res=>{
        res.data.items.forEach((item, key) => {
          if(key==0){
            item.checked = true
          }else {
            item.checked = false
          }

        });
        this.dataInfo1=res.data;
        this.lists=res.data.items
      })
    },
    watch: {
      all:function (value) {
        $('#patient').addClass('activeClass')
        this.lists1=this.dataInfo.items
        console.log(value);
        this.lists.forEach((item,key)=>{
          if(key!=0) item.checked=value
          }
          )
      }
    },
    computed: {
    },
    methods: {
      goPrev(){

        this.page-=10;
        if(this.page<0){
          this.page=0
        }
        axios.post('/_/hosp/search/science/global', {
          "text":$("#commonsearch").val(),
          "type":$(".listInfo-tab>.activeClass")[0].id,
          "start":this.page,
        }).then(res => {
          console.log(res.data);

          res.data.items.forEach(item=>{
            if(item.data.birthday){
              item.data.birthday.substr(0,10)

            }
            if(item.data.date){
              item.data.date.substr(0,10)
            }
          })
          res.data.columns.forEach(item=>{
            item.checked=true
          })
          this.dataInfo=res.data
          this.staList=res.data.columns;
          this.lists1=res.data.items;
          this.num=utils.toThousand(res.data.total)
        })
      },
      goNext(){
        this.page+=10
        axios.post('/_/hosp/search/science/global', {
          "text":$("#commonsearch").val(),
          "type":$(".listInfo-tab>.activeClass")[0].id,
          "start":this.page,
        }).then(res => {
          res.data.items.forEach(item=>{
            if(item.data.birthday){
              item.data.birthday.substr(0,10)

            }
            if(item.data.date){
              item.data.date.substr(0,10)
            }
          })
          res.data.columns.forEach(item=>{
            item.checked=true
          })
          this.dataInfo=res.data
          this.staList=res.data.columns;
          this.lists1=res.data.items;
          this.num=utils.toThousand(res.data.total)
        })
      },
      goPage(){
        axios.post('/_/hosp/search/science/global', {
          "text":$("#commonsearch").val(),
          "type":$(".listInfo-tab>.activeClass")[0].id,
          "start":(parseInt($("#gopage").val())-1)*10,
        }).then(res => {
          console.log(res.data);

          res.data.items.forEach(item=>{
            if(item.data.birthday){
              item.data.birthday.substr(0,10)

            }
            if(item.data.date){
              item.data.date.substr(0,10)
            }
          })
          res.data.columns.forEach(item=>{
            item.checked=true
          })
          this.dataInfo=res.data
          this.staList=res.data.columns;
          this.lists1=res.data.items;
          this.num=utils.toThousand(res.data.total)
        })

      },
      fn(e) {
        if (e.target.checked == false) {
          $('#patient').addClass('activeClass').siblings().removeClass('activeClass')
          this.staList={...this.dataInfo.columns};
          this.lists1={...this.dataInfo.items}
        }
      },
      changeTab(e){
        $(e.target).addClass('activeClass').siblings().removeClass('activeClass');
          this.staList=[];
          this.lists1=[];
          this.num=0
          this.page=0
        axios.post('/_/hosp/search/science/global', {
          "text":$("#commonsearch").val(),
          "type":$(".listInfo-tab>.activeClass")[0].id,
          "start":this.page,
        }).then(res => {
          console.log(res.data);

          res.data.items.forEach(item=>{
            if(item.data.birthday){
              item.data.birthday.substr(0,10)

            }
            if(item.data.date){
              item.data.date.substr(0,10)
            }
          })
          res.data.columns.forEach(item=>{
            item.checked=true
          })
          this.dataInfo=res.data
          this.staList=res.data.columns;
          this.lists1=res.data.items;
          this.num=utils.toThousand(res.data.total)
        })
      },
      toggleList(e){
        console.log(this.dataInfo);
        this.page=0;
        this.staList={...this.dataInfo.columns};
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
          width 100px
          margin 0 20px 12px 0
          span
            font-size 13px
      .staTable
        margin-top 10px
        width 100%
        border 1px solid rgb(221, 221, 221)
        thead
          tr
            background #F0F0F0
            color rgb(51, 51, 51)
            font-weight bold
            width 100%
            font-size 14px
            th
              text-align center
              span
                width 288px
                display block
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                text-align center
                padding 8px
        .staTable-body
          width 100%
          &:hover
            background #D8F0EF
          td
            span
              width 288px
              display block
              text-align center
              font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
              color #666
              font-size 14px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              padding 8px
    .staTable-footer
      box-sizing border-box
      height 40px
      line-height 40px
      width 100%
      font-size 14px
      border 1px solid rgb(221, 221, 221)
      border-top none
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
