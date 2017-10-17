<template>
    <div class="sheader">
      <div class="sheader-con">
        <div class="brand-img">
          <img src="../assets/images/brand@2x.png" style="width: 181px;height: 35px;margin-top: 12px">
        </div>
        <div class="sheader-inp">
          <input type="text" placeholder="试试输入糖尿病，年龄大于20岁">
          <a @click="search()" id="search" class="btn btn-search" href="javascript:void (0)">

            <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 xmlns:xlink="http://www.w3.org/1999/xlink">
              <!-- Generator: Sketch 44.1 (41455) - http://www.bohemiancoding.com/sketch -->
              <desc>Created with Sketch.</desc>
              <defs>
                <polygon id="path-1"
                         points="0.00167364017 0.00555090656 0.00167364017 25 24.9940044 25 24.9940044 0.00555090656 0.00167364017 0.00555090656"></polygon>
              </defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Artboard" transform="translate(-861.000000, -87.000000)">
                  <g id="搜索" transform="translate(861.000000, 86.000000)">
                    <mask id="mask-2" fill="white">
                      <use xlink:href="#path-1"></use>
                    </mask>
                    <g id="Clip-2"></g>
                    <path
                      d="M13.9941702,5.17801953 C11.2822594,2.46521618 6.88437936,2.46521618 4.17146444,5.17801953 C1.45866109,7.89082287 1.45866109,12.2887866 4.17146444,15.0007252 C6.88393305,17.7133054 11.2817015,17.7133054 13.9941702,15.0009484 L13.9941702,15.0007252 C16.7068619,12.2884798 16.7068619,7.8907113 13.9945049,5.17821478 C13.9945049,5.1781311 13.9941702,5.1781311 13.9941702,5.17801953 Z M2.66005579,16.5121339 C-0.886722455,12.964463 -0.886722455,7.21338912 2.66005579,3.66563459 C6.20750349,0.118856346 11.9582427,0.118856346 15.5065551,3.66563459 C19.0534449,7.21338912 19.0534449,12.964463 15.5065551,16.5121339 C11.9582427,20.0589121 6.20761506,20.0589121 2.66005579,16.5121339 Z M19.6302929,20.636848 C19.1454114,21.12106 18.3598047,21.12106 17.875258,20.636848 L16.1210042,18.8817015 C15.6366527,18.3970432 15.6366527,17.6117713 16.1210042,17.1274198 C16.6053278,16.6432078 17.3905997,16.6432078 17.875258,17.1274198 L19.6302929,18.8817015 C20.1158159,19.367113 20.1158159,20.1523013 19.6302929,20.636848 Z"
                      id="Fill-1" fill="#FFFFFF" mask="url(#mask-2)"></path>
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a class="btn adv-search" href="javascript:void (0)">高级查询</a>
        </div>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'sHeader',
    data() {
      return {
      }
    },
    methods:{
      search(){
        $('.brand-img').animate({
          top:0,left:0,
        },500);
        $('.sheader-inp').animate({
          top:35,left:0,
        },500);
        $('.sheader').animate({
          height:136
        },500);
      }
    }

  }
</script>

<style scoped lang="stylus">
  .sheader
    background #F5F5F6
    background-image url("../assets/images/bg1.png")
    height 100%
    .sheader-con
      width 1226px
      overflow hidden
      /*margin-left 346px*/
      margin auto
      position relative
      height 100%
      .brand-img
        position absolute
        left 45%
        top -20%
      .sheader-inp
        position absolute
        top 40%
        left 20%
        width 695px
        height 44px
        border 1px solid #E1E0E1
        margin-top 21px
        box-shadow 0 1px 2px -1px rgba(0,0,0,0.2)
        input
          padding 0 14px 0 28px
          border none
          width 646px
          height 100%
          line-height 40px
          background #FFF
          box-shadow none
          color #2e363f
          font-size 14px
        .btn
          position: absolute;
          display: block;
          text-decoration: none;
          overflow: hidden;
          border-radius: 0px;
        .btn-search
          background-color: #41B8B0;
          width: 46px;
          height: 46px;
          right: 0px;
          top: -1px;
          border-radius: 0px;
          line-height 57px
          text-align center
        .adv-search
          box-shadow 0 1px 2px -1px rgba(0,0,0,0.2)
          width: 112px;
          height: 46px;
          background-color: #FFFFFF;
          color: #3D83B8;
          font-size: 14px;
          line-height: 47px;
          text-align: center;
          position: absolute;
          right: -123px;
          top: -1px;

</style>
