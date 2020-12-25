<template>
  <div class="connect">
    <div id="main">
      <div class="connect_box">
        <nav class="page6_nav">
          <router-link
            to="connect"
            class="page6-nav-item connect_us_nav"
            ><span>联系我们</span></router-link
          >
          <router-link to="join" class="page6-nav-item join_us_nav"
            ><span>加入我们</span></router-link
          >
        </nav>
        <div class="connect_detail_box">
          <h2 class="connect_company_title">
            武汉四海华彩互联网科技信息有限公司
          </h2>
          <div class="job_item">
            <div class="job_item_title" @click="more1">
              <span>职位：</span><span>用户运营主管</span>
              <div class="job_item_title_after">
                <img
                  src="../../assets/img/arrow.jpg"
                  alt="arrow"
                  class="arrow"
                />
              </div>
            </div>
            <div class="job_item_transition" v-if="isshow1">
              <div class="job_item_line">
                <span>职能</span>
                <ul class="job_item_ul">
                  <li class="unorder-list-item">
                    负责种子用户/核心用户的招募和管理；
                  </li>
                  <li class="unorder-list-item">
                    培养种子用户，发展核心用户，提高活跃度与粘性；
                  </li>
                  <li class="unorder-list-item">
                    策划相关线上、线下活动，挖掘新用户并促进用户活跃；
                  </li>
                  <li class="unorder-list-item">
                    协助部门完成用户需求分析、功能调研、挖掘用户痛点，提升产品体验。
                  </li>
                </ul>
              </div>
              <div class="job_item_line">
                <span>要求</span>
                <ul class="job_item_ul">
                  <li class="unorder-list-item">
                    3年以上互联网产品用户运营、社群运营相关经验；
                  </li>
                  <li class="unorder-list-item">
                    懂得如何寻找、维系种子用户；
                  </li>
                  <li class="unorder-list-item">
                    有亲和力，能主动拓展用户关系，擅长通过群组、活动等方式互动；
                  </li>
                  <li class="unorder-list-item">
                    沟通能力强，能从用户角度出发，以优质的用户体验为目标。
                  </li>
                </ul>
              </div>
              <div class="job_item_line">
                <p class="join_other">
                  联系电话：027-51902590 张女士 投递邮箱：hr@yocaigs.com
                </p>
              </div>
            </div>
          </div>
          <div class="job_item">
            <div class="job_item_title" @click="more2">
              <span>职位：</span><span>客户经理</span>
              <div class="job_item_title_after">
                <img
                  src="../../assets/img/arrow.jpg"
                  alt="arrow"
                  class="arrow"
                />
              </div>
            </div>
            <div class="job_item_transition" v-if="isshow2">
              <div class="job_item_line">
                <span>职能</span>
                <ul class="job_item_ul">
                  <li class="unorder-list-item">
                    立足银行渠道，寻找有黄金投资需求的客户
                  </li>
                  <li class="unorder-list-item">
                    配合城市主管完成当月指标任务
                  </li>
                  <li class="unorder-list-item">
                    维护银行渠道老客户，维护银行渠道。
                  </li>
                </ul>
              </div>
              <div class="job_item_line">
                <span>要求</span>
                <ul class="job_item_ul">
                  <li class="unorder-list-item">年龄35岁以下；</li>
                  <li class="unorder-list-item">大专以上学历，专业不限；</li>
                  <li class="unorder-list-item">可接受省内外派；</li>
                  <li class="unorder-list-item">口齿清晰，思维敏捷；</li>
                  <li class="unorder-list-item">
                    具有一定责任感和目标感，有抗压能力；
                  </li>
                  <li class="unorder-list-item">
                    做事情积极主动，对个人收入有要求；
                  </li>
                  <li class="unorder-list-item">
                    有销售经验或者管理经验优先录取。
                  </li>
                </ul>
              </div>
              <div class="job_item_line">
                <p class="join_other">
                  联系电话：027-51902590 张女士 投递邮箱：hr@yocaigs.com
                </p>
              </div>
            </div>
          </div>
          <div class="job_item">
            <div class="job_item_title" @click="more3">
              <span>职位：</span><span>C#开发工程师</span>
              <div class="job_item_title_after">
                <img
                  src="../../assets/img/arrow.jpg"
                  alt="arrow"
                  class="arrow"
                />
              </div>
            </div>
            <div class="job_item_transition" v-if="isshow3">
              <div class="job_item_line">
                <span>职能</span>
                <ul class="job_item_ul">
                  <li class="unorder-list-item">
                    能够按照需求文档和设计文档的要求编写代码，实现软件模块的功能；
                  </li>
                  <li class="unorder-list-item">
                    遵照公司制定的软件开发规范进行软件开发；
                  </li>
                  <li class="unorder-list-item">
                    根据开发部门主管的建议和要求，对自己和他人的代码进行代码重构；
                  </li>
                  <li class="unorder-list-item">
                    参与项目需求调研、技术可行性分析，详细深入掌握项目需求分析和系统设计。
                  </li>
                </ul>
              </div>
              <div class="job_item_line">
                <span>要求</span>
                <ul class="job_item_ul">
                  <li class="unorder-list-item">
                    本科学历，2年以上实际开发经验；
                  </li>
                  <li class="unorder-list-item">
                    熟练使用Oracle、Mysql等数据库编程及性能优化，精通数据库设计；
                  </li>
                  <li class="unorder-list-item">
                    悉基于.NET平台的应用程序开发，精通C#开发，具有丰富的WinForm、Web开发经验和知识积累。
                  </li>
                </ul>
              </div>
              <div class="job_item_line">
                <p class="join_other">
                  联系电话：027-51902590 投递邮箱：hr@yocaigs.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
    data(){
        return {
            isshow1:false,
            isshow2:false,
            isshow3:false
        }
    },
    methods:{
        more1(){
            this.isshow1 = !this.isshow1
        },
        more2(){
            this.isshow2 = !this.isshow2
        },
        more3(){
            this.isshow3 = !this.isshow3
        }
    }
};
</script>

<style scoped>
#main {
  margin-top: 134px;
}
.connect_box {
  width: 1030px;
  margin:0 auto;
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
  margin-bottom: 184px;
  border: 1px solid #998d76;
}
.connect_company_title {
    position: relative;
    margin-top: 32px;
    line-height: 2em;
    font-size: 24px;
    color: #353535;
}
.job_item {
    margin-top: 26px;
    font-size: 18px;
    color: rgb(35,35,35);
}
.job_item_title {
    position: relative;
    display: flex;
    cursor: pointer;
    align-items: center;
}
.job_item_title:before {
    content: '';
    position: absolute;
    top: 4px;
    left: -26px;
    border: 8px solid transparent;
    border-left: 12px solid #162d4d;
}
.job_item_rotate {
    transition: all 0.4s;
    transform: rotate(90deg);
}
.job_item_title_after {
    margin-left: 14px;
    transform-origin: 50% 50%;
    display: flex;
    align-items: center;
    transition: all 0.4s;
    color: #162d4d;
}
.arrow {
    width: 8px;
    height: 14px;
}
.job_item_line {
    display: flex;
    margin-top: 26px;
}
</style>