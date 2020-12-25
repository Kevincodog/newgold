<template>
  <div class="home">
    <headTop></headTop>
    <div id="main">
      <div id="home_img">
        <video
          src="../assets/video/home.mp4"
          muted="muted"
          id="video"
          loop="loop"
          autoplay="autoplay"
        ></video>
      </div>
      <div class="home_article">
        <div class="article_title">新金珠宝</div>
        <p class="home_article_p">
          武汉新世界珠宝金号有限公司创立于1983年，是集原料采购、金饰设计、生产、零售、贵金属投资咨询服务于一体的专业企业，是上海黄金交易所首批综合类会员单位（会员编号0040、席位号0055）、中国工商银行的全国贵金属代理交易服务商、中国珠宝玉石首饰行业协会副会长单位、湖北省珠宝玉石首饰行业协会副会长单位、武汉金饰珠宝行业协会会长单位，是湖北省最著名规模最大的珠宝首饰品牌，是世界黄金协会、国际铂金协会、国际钻石推广中心在武汉地区唯一的战略合作伙伴。
        </p>
        <p class="home_article_p">
          公司先后通过了ISO9001：2000国际质量管理体系、IS0140001：2004环境管理体系、GB/T28001-2001职业健康安全管理体系、计量保证能力等认证。“新金”牌首饰是中国珠宝玉石首饰行业协会首批评定的“中国珠宝首饰业驰名品牌”、“湖北名牌产品”、“湖北著名商标”、“全国黄金行业明星企业”、“中国名牌产品”，“新金”牌黄金首饰被认证为中国驰名商标。企业连年被评为武汉市“文明单位”、“质量计量信得过单位”、“守合同重信用单位”、“消费者满意单位”、被省人民政府命名为“湖北省守合同重信用单位”，被中宣部和商务部等6个部委授予“全国百城万店无假货优秀示范店”，2010年被商务部和中国珠宝玉石首饰行业协会评为“AAA级信用企业”。
        </p>
      </div>
    </div>
    <footBottom></footBottom>
  </div>
</template>

<script>
// @ is an alias to /src
import {headTop,footBottom} from "../components/index";

export default {
  name: "Home",
  components: {
    headTop,
    footBottom
  },
};
</script>

<style scoped>

#home_img video{
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
