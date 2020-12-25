<template>
  <div class="hello">
    <div class="header">
      <img id="logo" src="../assets/img/logo.png" alt="logo">
      <ul class="nav">
        <li><router-link to="/home">首页</router-link></li>
        <!-- class="main_nav-item router-link-exact-active router-link-active" -->
        <li><router-link to="/page1">四海华彩</router-link></li>
        <li><router-link to="/page2">有才金银</router-link></li>
        <li><router-link to="/page3">新金零售</router-link></li>
        <li><router-link to="/page4">新金制造</router-link></li>
        <li><router-link to="/page5">历史长廊</router-link></li>
        <li><router-link to="/page6/connect">联系我们</router-link></li>
      </ul>
    </div>
    <div class="main"></div>
    <div class="foote"></div>
  </div>
</template>

<script>
export default {
  name: "headTop",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    position: fixed;
    top:0;
    z-index: 999;
    width: 100%;
    min-width: 700px;
    height: 134px;
    background-color: #0c0b09;
}
#logo{
    display: block;
    width: 303px;
    height: 35px;
    margin: 0 auto;
    margin-top: 36px;
}
.nav{
  overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 24px;
    font-size: 18px;
}
.nav li{
    position: relative;
    width: 120px;
    text-align: center;
}
.nav li:hover::after {
    transform: scale3d(1,1,1);
}
.nav li::after{
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    margin: 0 auto;
    margin-top: 2px;
    background-color: rgb(178,153,108);
    transition: all 0.3s ease-in-out;
    transform: scale3d(0,1,1);
    transform-origin: 50% 0;
}

a {
  color: rgb(180,179,178);
}
</style>
