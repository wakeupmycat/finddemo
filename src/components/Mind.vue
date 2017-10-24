<template>

  <div class="box-child">
    <div class="element-block e-andOr">
      <a href="javascript:;" class="e-text">并且</a>
      <a href="javascript:;" class="e-add"></a>
    </div>
    <div class="element-block e-top" >
      <a class="e-branch" href="javascript:;"></a>
      <a class="e-text" href="javascript:;">点击输入搜索条件</a>
      <a class="e-delete" href="javascript:;"></a>
    </div>
    <div class="element-block e-bottom">
      <a class="e-branch" href="javascript:;"></a>
      <a class="e-text" href="javascript:;">点击输入搜索条件</a>
      <a class="e-delete" href="javascript:;"></a>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'items',
    data() {
      return {
        msg1: true
      }
    },
    methods: {
      toggole() {
        this.msg = !this.msg
      }
    }
  }
</script>

<style scoped lang="stylus">
  .box-child
    position relative
    top 20%
    z-index 11111
    .e-top
      position absolute
      top -60px
      left 150px
    .e-bottom
      position absolute
      bottom -60px
      left 150px
    .e-andOr
      width 80px
      padding-left 15px
      .e-add
        position: absolute
        top 30%
        right 10px
        width: 16px;
        height: 16px;
        background-position: 0 0;
        background-size: 100% 100%;
        background url("../assets/images/icon_edit.png") no-repeat
        &:hover
          background url("../assets/images/icon_edit_hover.png") no-repeat

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
