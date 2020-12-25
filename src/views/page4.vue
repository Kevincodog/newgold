<template>
  <div class="page4">
    <headTop></headTop>
    <div class="page3_box" id="main">
      <h2 class="article_title">工厂全貌</h2>
      <img
        id="img_3_1"
        src="../assets/img/3-1.jpg"
        alt="工厂全貌"
      />
      <h2 class="article_title">工厂车间</h2>
      <div class="page3_img_box">
        <img
          src="../assets/img/3-2.png"
          alt="新金制造"
        />
        <img
          src="../assets/img/3-3.png"
          alt="新金制造"
        />
        <img
          src="../assets/img/3-4.png"
          alt="新金制造"
        />
        <img
          src="../assets/img/3-5.png"
          alt="新金制造"
        />
        <img
          src="../assets/img/3-6.png"
          alt="新金制造"
        />
      </div>
    </div>
    <footBottom></footBottom>
  </div>
</template>

<script>
// @ is an alias to /src
import { headTop, footBottom } from "../components/index";

export default {
  name: "page4",
  components: {
    headTop,
    footBottom,
  },
};
</script>

<style scoped>
#main {
    margin-top:134px
}
.page3_box {
    width: 1030px;
    margin: 0 auto;
    padding-top: 34px;
}
.article_title {
    position: relative;
    margin-bottom: 36px;
    text-indent: 16px;
    font-size: 24px;
}
.article_title:before {
    content: '';
    position: absolute;
    width: 6px;
    height: 24px;
    left: 0;
    top: 5px;
    background-color: #162d4d;
}
#img_3_1 {
    display: block;
    width: 1030px;
    margin: 0 auto;
    margin-bottom: 26px;
}
.page3_img_box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 64px;
}
.page3_img_box img {
    width: 194px;
    height: 149px;
}
</style>