<template>
  <div class="page3">
    <headTop></headTop>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in Dataimage" :key="item.id">
        <img class="banner-image" :src="item.url" alt="" />
        <!-- <div class="title">{{ image }}</div> -->
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <div class="position_box">
      <h2 class="article_title">门店分布</h2>
      <!-- <div id="allmap"></div> -->
      
      <baidu-map id="allmap"
          :scroll-wheel-zoom="true"
          :center="{lng: 114.294616, lat: 30.564517}" 
          :zoom="13"
          >
          <div v-for="(position,index) in newpositions" :key="index">
          <!-- <bm-marker
            :position="{lng: position.lng, lat: position.lat}"
            @click="infoWindowOpen(index)"> -->
            <bm-info-window
              :title="position.contents"
              :position="{lng: position.lng, lat: position.lat}"
              :show="true"
              @close="infoWindowClose(index)"
              @open="infoWindowOpen(index)">
            </bm-info-window>
          <!-- </bm-marker> -->
          </div>
      </baidu-map>
      
      <div class="positionList">
        <div class="position_item_box">
          <div class="position_name">新金珠宝六渡桥旗舰店</div>
          <p class="address_detail">
            <span class="position_phone">85444898</span
            ><span position="position_address"
              >中山大道357号，民意一路路口，库玛正对面</span
            >
          </p>
        </div>
        <div class="position_item_box">
          <div class="position_name">新金珠宝江汉路店</div>
          <p class="address_detail">
            <span class="position_phone">82844442</span
            ><span position="position_address">江汉二路路口</span>
          </p>
        </div>
        <div class="position_item_box">
          <div class="position_name">新金珠宝二十一购物中心武展店</div>
          <p class="address_detail">
            <span class="position_phone">85816038</span
            ><span position="position_address"
              >汉商购物广场地下商场负一楼珠宝区（武汉国际会展中心）</span
            >
          </p>
        </div>
        <div class="position_item_box">
          <div class="position_name">新金珠宝鲁巷广场店</div>
          <p class="address_detail">
            <span class="position_phone">87386919</span
            ><span position="position_address">光谷鲁巷广场一楼珠宝区</span>
          </p>
        </div>
        <div class="position_item_box">
          <div class="position_name">新金珠宝新佳丽店</div>
          <p class="address_detail">
            <span class="position_phone">88185620</span
            ><span position="position_address"
              >武昌区解放路新佳丽珠宝城，汉口银行正对面</span
            >
          </p>
        </div>
        <div class="position_item_box">
          <div class="position_name">新金珠宝司门口店</div>
          <p class="address_detail">
            <span class="position_phone">88876684</span
            ><span position="position_address"
              >武昌区解放路414号，大成路路口斜对面</span
            >
          </p>
        </div>
        <div class="position_item_box">
          <div class="position_name">新金珠宝青山店</div>
          <p class="address_detail">
            <span class="position_phone">86688971</span
            ><span position="position_address"
              >青山区红钢城街道青扬十街10栋4—7商铺（青山商场正对面）</span
            >
          </p>
        </div>
        <div class="position_item_box">
          <div class="position_name">新金珠宝大洋百货中山店</div>
          <p class="address_detail">
            <span class="position_phone">18986136841</span
            ><span position="position_address"
              >江汉路中山大洋百货一楼珠宝区</span
            >
          </p>
        </div>
        <div class="position_item_box">
          <div class="position_name">新金珠宝大洋百货光谷店</div>
          <p class="address_detail">
            <span class="position_phone">18971228842</span
            ><span position="position_address"
              >洪山区珞瑜路光谷大洋百货一楼珠宝区</span
            >
          </p>
        </div>
        <div class="position_item_box">
          <div class="position_name">新金珠宝大洋百货龙阳店</div>
          <p class="address_detail">
            <span class="position_phone">84458971</span
            ><span position="position_address"
              >汉阳王家湾龙阳大洋百货一楼珠宝区</span
            >
          </p>
        </div>
        <div class="position_item_box">
          <div class="position_name">新金珠宝汉商银座店</div>
          <p class="address_detail">
            <span class="position_phone">84952680</span
            ><span position="position_address"
              >汉阳区钟家村汉阳商场一楼珠宝区</span
            >
          </p>
        </div>
        <div class="position_item_box">
          <div class="position_name">新金珠宝群光广场店</div>
          <p class="address_detail">
            <span class="position_phone">87874076</span
            ><span position="position_address"
              >洪山区珞瑜路群光广场一楼珠宝区</span
            >
          </p>
        </div>
        <div class="position_item_box">
          <div class="position_name">新金珠宝宝谷店</div>
          <p class="address_detail">
            <span class="position_phone">87777063</span
            ><span position="position_address">洪山区鲁磨路余福泰珠宝店</span>
          </p>
        </div>
        <div class="position_item_box">
          <div class="position_name">新金珠宝销品茂店</div>
          <p class="address_detail">
            <span class="position_phone">18971243140</span
            ><span position="position_address"
              >徐东中商销品茂一楼新金珠宝区</span
            >
          </p>
        </div>
      </div>
    </div>
    <footBottom></footBottom>
  </div>
</template>

<script>
// @ is an alias to /src
import { headTop, footBottom } from "../components/index";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "page3",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        effect: "coverflow",
        // slidesPerView: 1.2,
        // loopedSlides: 5,
        centeredSlides: true,
        centeredSlidesBounds: true,
        loop: true,
      },
      Dataimage: [
        { url: require("../assets/img/bannerimg/banner2.jpg"), id: 1 },
        { url: require("../assets/img/bannerimg/banner3.jpg"), id: 2 },
        { url: require("../assets/img/bannerimg/banner4.jpg"), id: 3 },
        { url: require("../assets/img/bannerimg/banner5.jpg"), id: 4 },
        { url: require("../assets/img/bannerimg/banner6.jpg"), id: 5 },
        { url: require("../assets/img/bannerimg/banner7.jpg"), id: 6 },
        { url: require("../assets/img/bannerimg/banner8.jpg"), id: 7 },
      ],
      ak: "daxDx6un7AdfUX4dMzD9d68EeZTrCV8j",
      point: "",
      newpositions:[
      {
        lng:114.289547,
        lat:30.580546,
        contents:'新金珠宝六渡桥旗舰店',
        show:true,
      },
      {
        lng:114.29607,
        lat:30.588124,
        contents:'新金珠宝江汉路店',
        show:true,
      },
      {
        lng:114.279754,
        lat:30.586783,
        contents:'新金珠宝二十一购物中心武展店',
        show:true,
      },
      {
        lng:114.403544,
        lat:30.51261,
        contents:'新金珠宝鲁巷广场店',
        show:true,
      },
      {
        lng:114.305651,
        lat:30.549791,
        contents:'新金珠宝新佳丽店',
        show:true,
      },
      {
        lng:114.305423,
        lat:30.549065,
        contents:'新金珠宝司门口店',
        show:true,
      },
      {
        lng:114.408553,
        lat:30.645581,
        contents:'新金珠宝青山店',
        show:true,
      },
      {
        lng:114.296389,
        lat:30.582985,
        contents:'新金珠宝大洋百货中山店',
        show:true,
      },

        ]
    };
  },
  components: {
    headTop,
    footBottom,
    Swiper,
    SwiperSlide,
  },
  methods: {
    // mapReady({ BMap, map }) {
    //   this.point = new BMap.Point(114.294616,30.564517);
    //   map.centerAndZoom(this.point, 13);  
    // },
    infoWindowClose (index) {
      this.newpositions[index]["show"] = false
    },
    infoWindowOpen (index) {
      this.newpositions[index]["show"] = false
    },
  },
};
</script>

<style scoped>
.banner-image {
  display: block;
  max-width: 1200px;
  height: 502px;
  object-fit: contain;
  margin: 124px auto 58px;
}
.swiper-container-horizontal /deep/ .swiper-pagination-bullets {
  bottom: 90px;
}

.swiper-container-horizontal
  > .swiper-pagination-bullets
  .swiper-pagination-bullet {
  background-color: #ba9757;
}

#allmap {
  height: 600px;
  width: 600px;
  margin: 0 auto;
}

.position_box {
  position: relative;
  width: 1000px;
  margin: 0 auto;
  margin-top: 26px;
}
.article_title {
  position: relative;
  margin-bottom: 36px;
  text-indent: 16px;
  font-size: 24px;
}
.article_title:before {
  content: "";
  position: absolute;
  width: 6px;
  height: 24px;
  left: 0;
  top: 5px;
  background-color: #162d4d;
}
.positionList {
  margin-top: 36px;
  margin-bottom: 86px;
  padding-left: 20px;
}
.position_item_box {
  font-size: 18px;
  color: rgb(56, 56, 56);
  margin-bottom: 36px;
}
.position_name {
  position: relative;
}
.position_name::before {
  content: "";
  position: absolute;
  left: -14px;
  top: 9px;
  width: 6px;
  height: 6px;
  background-color: #162d4d;
}
.address_detail {
  margin-top: 8px;
}
.position_phone {
  margin-right: 54px;
}
#allmap{
  height: 600px;
  width: 1030px;
  margin: 0 auto;
}
</style>