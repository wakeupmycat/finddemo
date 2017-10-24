<template>
    <div class="accSearch">
      <div class="header">
        <a class="accbrand" href="">
          <img src="../assets/images/brand@2x.png" alt="">
        </a>
      </div>
      <div class="buttons">
        <button>清楚脑图</button>
        <a href="javascript:;">提交搜索</a>
      </div>
      <div class="boxMind">
        <div class="element-block" v-if="msg">
          <a class="e-branch" href=""></a>
          <a @click="msg=!msg" class="e-text" href="javascript:;">点击输入搜索条件</a>
          <a class="e-delete" href=""></a>
        </div>
        <Mind v-else></Mind>
      </div>
    </div>
</template>

<script>
  import Mind from './Mind.vue'
    export default {
        data() {
          return{
            msg:true
          }
        },
      components:{Mind}
    }
</script>

<style scoped lang="stylus">
.accSearch
  position absolute
  width 100%
  height 100%
  background #fff
  top 0
  .header
    width 100%
    height 56px
    background #FAFAFA
    a
      width 181px
      height 35px
      margin 12px 0 0 15px
      display inline-block
      outline none
      img
        width 100%
        height 100%
  .buttons
    width 350px
    padding 10px 0
    float right
    margin-top 10px
    button
      border 1px solid #a0a9b4
      color #a0a9b4
      background #FFF
      margin-right 10px
      width 128px
      padding 8px 0
      font-size 16px
      cursor pointer
      &:hover
        background #FAFAFA
      &:active
        box-shadow 2px 2px 8px 0px #999 inset
    a
      margin-left 20px
      text-align center
      background #7690a3
      margin-right 30px
      text-decoration none
      color #FFF
      border none
      font-size 16px
      padding 8px 0
      width 128px
      display inline-block
      &:hover
        background #379e97
        color #fff
      &:active
        box-shadow 2px 2px 8px 0px #1a5652 inset
  .boxMind
    min-height 350px
    position relative
    top 20%
    .element-block
      box-sizing border-box
      outline: none;
      min-height: 38px;
      padding: 0 10px 0 40px;
      margin: 15px 0 15px 30px;
      border: 1px solid #becdd9;
      z-index: 60;
      background-color: #fff;
      position: relative;
      width: 300px;
      .e-branch
        background url("../assets/images/icon_branch.png")
        width 18px
        height 18px
        position absolute
        left 10px
        top 30%
        &:hover
          background url("../assets/images/icon_branch_hover.png") no-repeat
      .e-text
        box-sizing border-box
        display block
        width 200px
        font-size 14px
        color: #2e363f;
        padding-top: 9px;
        padding-bottom: 9px;
        word-break: break-all;
        word-wrap: break-word;
        &:hover
          color #379e97
      .e-delete
        width: 16px;
        height: 16px;
        background-position: 0 0;
        background-size: 100% 100%;
        position: absolute
        top 30%
        right 10px
        background url("../assets/images/icon_delete.png") no-repeat
        &:hover
          background url("../assets/images/icon_delete_hover.png") no-repeat

</style>
