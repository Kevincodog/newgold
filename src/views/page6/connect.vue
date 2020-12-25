<template>
  <div class="connect">
    <div id="main">
      <div class="connect_box">
        <nav class="page6_nav">
          <router-link to="connect"
            class="page6-nav-item connect_us_nav"
            ><span>联系我们</span></router-link>
          <router-link to="join" class="page6-nav-item join_us_nav"
            ><span>加入我们</span></router-link>
        </nav>
        <div class="connect_detail_box">
          <h2 class="connect_company_title">新世界珠宝金号有限公司</h2>
          <p class="connect_commany_address">
            公司地址：武汉市江汉经济开发区江兴四路新金首饰工业园
          </p>
          <p class="connect_company_phone">电话：027-83565188</p>
          <h2 class="connect_company_title">
            武汉四海华彩互联网科技信息有限公司
          </h2>
          <p class="connect_commany_address">
            公司地址：武汉市江汉区中山大道357号新金珠宝大厦
          </p>
          <p class="connect_company_phone">电话：027-85767666</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    
};
</script>

<style scoped>
#main {
  margin-top: 134px;
}
.connect_box {
  width: 1030px;
  margin:0 auto
}
.page6_nav {
    float: right;
    display: flex;
    margin-top: 40px;
}

.page6_nav .router-link-active {
    background-color: #998d76;
    color: #fff !important;
}
.connect_us_nav, .join_us_nav{
    border: 1px solid #998d76;
    border-bottom-width: 0px;
}
.page6-nav-item {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 150px;
    height: 60px;
    text-decoration: none;
}

.connect_detail_box {
    overflow: auto;
    width: 1030px;
    padding: 0 111px;
    padding-bottom: 36px;
    margin:0 auto 184px;
    border: 1px solid #998d76;
}
.connect_company_title {
    position: relative;
    margin-top: 32px;
    line-height: 2em;
    font-size: 24px;
    color: #353535;
}
.connect_company_title::before {
    content: '';
    position: absolute;
    left: -22px;
    top: 20px;
    width: 6px;
    height: 6px;
    background-color: #162d4d;
}
.connect_commany_address {
    line-height: 2em;
    font-size: 18px;
    color: #353535;
}
.connect_company_phone {
    font-size: 18px;
    line-height: 2em;
    color: #353535;
}
</style>