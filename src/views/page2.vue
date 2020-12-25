<template>
  <div class="page2">
    <headTop></headTop>
    <div id="main">
      <div class="youcai_imgbox">
        <img
          src="../assets/img/2-1.jpeg"
          alt="有才金银"
          id="youcai_img"
        />
      </div>
      <img
        src="../assets/img/youcai_logo.png"
        alt="logo"
        id="youcai_logo"
      />
      <div class="para_box">
        <p>
          “有才金银”是基于武汉新世界珠宝金号，有才研究院团队专业研究成果升级的一款集资讯服务和交易通道于一体的APP产品。“有才金银”深度调研用户群体，研究并满足用户需求，将最及时的资讯、更专业的操作、更有效的风控手段、更贴合市场的分析研判思路，用视频、音频、文字等互联网服务方式，以专业课程为载体，通过“互联网+”的先进模式，呈现给广大投资者和从业者，为用户打造完善的黄金投资教育、服务体系。
        </p>
      </div>
      <div class="button_box">
        <a href="http://www.yocaigs.com" target="_blank"
          ><button class="goto_youcai">进入有才金银</button></a
        >
      </div>
    </div>
    <footBottom></footBottom>
  </div>
</template>

<script>
// @ is an alias to /src
import { headTop, footBottom } from "../components/index";

export default {
  name: "page2",
  components: {
    headTop,
    footBottom,
  },
};
</script>

<style scoped>
.youcai_imgbox {
    width: 100%;
    height: 606px;
    background-color: rgb(80,83,87);
}
#youcai_img {
    display: block;
    width: 1130px;
    height: 606px;
    margin: 134px auto 0;
}
#youcai_logo {
    display: block;
    width: 152px;
    height: 30px;
    margin: 116px auto 72px;
}
.para_box {
    width: 1030px;
    column-width: 306px;
    column-gap: 40px;
    margin: 0 auto;
    line-height: 1.5em;
    text-indent: 2em;
    text-align: justify;
    font-size: 18px;
    color: rgb(7,40,90);
}
.button_box {
    overflow: hidden;
    width: 1030px;
    margin: 0 auto;
}
.goto_youcai {
    position: relative;
    float: right;
    width: 224px;
    height: 48px;
    padding: 0;
    border-radius: 9px;
    margin-top: 64px;
    margin-bottom: 106px;
    text-align: center;
    background-color: #172d4d;
    font-size: 26px;
    color: #fff;
}
</style>