<template>
  <footer class="footer">
    <nav class="link">
      <span>友情链接</span>
      <a href="http://www.gold.org/" target="_blank">世界黄金协会</a>
      <a href="http://www.preciousplatinum.com.cn/zh/home" target="_blank"
        >国际铂金协会</a
      >
      <a href="http://www.debeers.com.cn/" target="_blank">戴比尔斯</a>
      <a href="http://www.ngtc.com.cn/" target="_blank">国检</a>
      <a href="http://www.gic.cug.edu.cn/" target="_blank"
        >中国地质大学检测中心</a
      >
      <a href="https://www.forevermark.cn" target="_blank">永恒印记</a>
      <a href="http://www.jewellery.org.cn/" target="_blank"
        >中国珠宝玉石行业协会</a
      >
      <a href="http://www.allove.com/" target="_blank">十心十箭</a>
      <a href="http://www.cngold.org.cn/" target="_blank">中国黄金协会</a>
      <a href="http://home.newgold.com.cn/" target="_blank">新金戏曲网</a>
    </nav>
    <div class="copyright">
      <a href="http://www.beian.miit.gov.cn" target="_blank"
        >鄂ICP备12001765号-1</a
      >
      <a href="./dist/admit.jpg" target="_blank">鄂网文【2017】8955-205号</a>
    </div>
    <div style="width: 255px; margin: 10px auto">
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42010302000548"
        style="
          display: inline-block;
          text-decoration: none;
          height: 20px;
          line-height: 20px;
        "
        ><img
          src="../assets/img/gongan.png"
          style="float: left"
        />
        <p
          style="
            float: left;
            height: 20px;
            line-height: 20px;
            margin: 0px 0px 0px 5px;
            font-size: 14px;
            color: rgb(152, 140, 117);
          "
        >
          鄂公网安备 42010302000548号
        </p></a
      >
    </div>
  </footer>
</template>

<script>
export default {
    name:'footBotttom'
};
</script>

<style>
footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 116px;
    min-width: 700px;
    background-color: #0c0b09;
}
.link {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 18px;
    color: #988c75;
}
.link span {
    font-size: 18px;
}
.link a {
    margin-left: 38px;
    color: rgb(152, 140, 117)
}
.copyright {
    display: flex;
    color: #545454;
    margin-top: 5px;
    font-size: 14px;
}
.copyright a:first-child {
    margin-right: 24px;
}
.copyright a{
    color: rgb(152, 140, 117)
}
</style>