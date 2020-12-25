<template>
  <div class="page5">
    <headTop></headTop>
    <div id="main">
      <img
        src="../assets/img/main_1.png"
        alt="匠新传承"
        class="history_title_img"
      />
      <div class="history_box">
        <img
          id="img1983"
          src="../assets/img/4-2.png"
        />
        <div class="history_line">
          <div class="img_box">
            <img
              src="../assets/img/4-11.png"
              alt="history_img"
              class="history_img"
            /><img
              src="../assets/img/4-1new.png"
              alt="history_img"
              class="new_img"
            />
          </div>
          <div class="explain_box">
            <img
              src="../assets/img/year1.png"
              alt="year"
              class="year"
            />
            <p class="explain">
              1983年董事长孟汉华先生创立武汉市交通百货商店，开始用三节柜台经营黄金首饰
            </p>
          </div>
        </div>
        <div class="history_line">
          <div class="explain_box_left">
            <img
              src="../assets/img/year2.png"
              alt="year"
              class="year"
            />
            <p class="explain">
              孟汉华先生创办是建国后武汉市第一家专业金店——武汉新世界珠宝金号，专业从事黄金珠宝首饰销售
            </p>
          </div>
          <div class="img_box">
            <img
              src="../assets/img/4-21.png"
              alt="history_img"
              class="history_img"
            /><img
              src="../assets/img/4-2new.png"
              alt="history_img"
              class="new_img"
            />
          </div>
        </div>
        <div class="history_line">
          <div class="img_box">
            <img
              src="../assets/img/4-31.png"
              alt="history_img"
              class="history_img"
            /><img
              src="../assets/img/4-3new.png"
              alt="history_img"
              class="new_img"
            />
          </div>
          <div class="explain_box">
            <img
              src="../assets/img/year3.png"
              alt="year"
              class="year"
            />
            <p class="explain">
              创办新世界首饰制造公司，自行研发，生产黄金珠宝首饰。
            </p>
          </div>
        </div>
        <div class="history_line">
          <div class="explain_box_left">
            <img
              src="../assets/img/year4.png"
              alt="year"
              class="year"
            />
            <p class="explain">注册新金品牌</p>
          </div>
          <div class="img_box">
            <img
              src="../assets/img/4-41.png"
              alt="history_img"
              class="history_img"
            /><img
              src="../assets/img/4-4new.png"
              alt="history_img"
              class="new_img"
            />
          </div>
        </div>
        <img
          id="img2001"
          src="../assets/img/4-3.png"
        />
        <div class="now_box">
          <img
            src="../assets/img/4-bottom.jpeg"
            alt="now"
          />
        </div>
        <img
          src="../assets/img/after.png"
          id="after"
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
  name: "page5",
  components: {
    headTop,
    footBottom,
  },
};
</script>

<style scoped>
#main {
    margin-top: 134px;
}
.history_title_img {
    display: block;
    width: 100%;
}
.history_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1030px;
    margin: 0 auto;
}
#img1983 {
    margin-top: 66px;
    margin-bottom: 88px;
}
.history_line {
    display: flex;
    margin-bottom: 36px;
}
.img_box {
    flex: 1 0 auto;
    position: relative;
    width: 646px;
    height: 264px;
}
.img_box img {
    position: absolute;
    width: 646px;
    height: 264px;
}
.history_img {
    z-index: 2;
    transition: opacity 1s;
}
.history_img:hover {
    opacity: 0;
    transition: opacity 1s;
}
.explain_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 39px;
    padding: 0;
}
.explain_box_left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding-right: 39px;
    margin: 0;
}
.year {
    width: 85px;
    height: 60px;
}
.explain {
    font-size: 20px;
    color: rgb(23,45,77);
}
.history_line {
    display: flex;
    margin-bottom: 36px;
}
#img2001 {
    margin: 64px auto 50px;
}
.now_box {
    margin-bottom: 128px;
}
#after {
    margin-bottom: 86px;
}
</style>