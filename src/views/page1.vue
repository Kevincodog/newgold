<template>
  <div class="page1">
    <headTop></headTop>
    <div id="main">
      <div class="sihai_imgbox">
        <img
          src="../assets/img/6-1.jpeg"
          alt="四海华彩"
        />
      </div>
      <div class="home_article">
        <h2 class="article_title">四海华彩</h2>
        <p class="home_article_p">
          武汉四海华彩互联网科技信息有限公司，倚靠新金珠宝强大背景，集培训、教育、咨询、行情、开户通道、交易通道于一体，致力于从事代理上海黄金交易所黄金、白银现货及现货延期交收交易业务，通过网站、公众号和APP端口，面向从业人员和贵金属投资者提供培训、投资者教育、黄金白银等贵金属品种投资服务，将贵金属教育培训和贵金属投资相结合，使金银投资更加便利化、专业化。
        </p>
      </div>
    </div>
    <footBottom></footBottom>
  </div>
</template>

<script>
// @ is an alias to /src
import { headTop, footBottom } from "../components/index";

export default {
  name: "page1",
  components: {
    headTop,
    footBottom,
  },
};
</script>

<style scoped>
#main img{
    display: block;
    min-width: 667px;
    width: 100%;
    margin-top: 134px;
    object-fit: contain;
}
.home_article {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 480px;
    max-width: 1030px;
    text-align: justify;
    margin: 58px auto 84px;
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
.home_article_p {
    margin-bottom: 1.2em;
    line-height: 1.5em;
    text-indent: 2em;
    font-size: 16px;
    white-space: pre-wrap;
    color: rgb(18,18,18);
}
</style>