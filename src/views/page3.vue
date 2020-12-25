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
          <bm-marker :position="{lng:114.289547, lat:30.580546}"  @click="infoWindowOpen1">
              <bm-info-window :show="show1" @close="infoWindowClose1" @open="infoWindowOpen1">
                <v-html class="map_p">名称：新金珠宝六渡桥旗舰店<br/>电话：85444898<br/>地址：中山大道357号，民意一路路口，库玛正对面</v-html>
              </bm-info-window>
          </bm-marker>
          <bm-marker :position="{lng:114.29607, lat:30.588124}"  @click="infoWindowOpen2">
              <bm-info-window :show="show2" @close="infoWindowClose2" @open="infoWindowOpen2">
                <v-html class="map_p">名称：新金珠宝江汉路店<br/>电话:82844442<br/>地址：江汉二路路口</v-html>
              </bm-info-window>
          </bm-marker>
          <bm-marker :position="{lng:114.279754, lat:30.586783}"  @click="infoWindowOpen3">
              <bm-info-window :show="show3" @close="infoWindowClose3" @open="infoWindowOpen3">
                <v-html class="map_p">名称：新金珠宝二十一购物中心武展店<br/>电话:85816038<br/>地址：汉商购物广场地下商场负一楼珠宝区（武汉国际会展中心）</v-html>
              </bm-info-window>
          </bm-marker>
          <bm-marker :position="{lng:114.403544, lat:30.51261}"  @click="infoWindowOpen4">
              <bm-info-window :show="show4" @close="infoWindowClose4" @open="infoWindowOpen4">
                <v-html class="map_p">名称：新金珠宝鲁巷广场店<br/>电话:87386919<br/>地址：光谷鲁巷广场一楼珠宝区</v-html>
              </bm-info-window>
          </bm-marker>
          <bm-marker :position="{lng:114.305651, lat:30.549791}"  @click="infoWindowOpen5">
              <bm-info-window :show="show5" @close="infoWindowClose5" @open="infoWindowOpen5">
                <v-html class="map_p">名称：新金珠宝新佳丽店<br/>电话:88185620<br/>地址：武昌区解放路新佳丽珠宝城，汉口银行正对面</v-html>
              </bm-info-window>
          </bm-marker>
          <bm-marker :position="{lng:114.305423, lat:30.549065}"  @click="infoWindowOpen6">
              <bm-info-window :show="show6" @close="infoWindowClose6" @open="infoWindowOpen6">
                <v-html class="map_p">名称：新金珠宝司门口店<br/>电话:88876684<br/>地址：武昌区解放路414号，大成路路口斜对面</v-html>
              </bm-info-window>
          </bm-marker>
          <bm-marker :position="{lng:114.408553, lat:30.645581}"  @click="infoWindowOpen7">
              <bm-info-window :show="show7" @close="infoWindowClose7" @open="infoWindowOpen7">
                <v-html class="map_p">新金珠宝青山店<br/>电话:86688971<br/>地址：青山区红钢城街道青扬十街10栋4—7商铺（青山商场正对面）</v-html>
              </bm-info-window>
          </bm-marker>
          <bm-marker :position="{lng:114.296389, lat:30.582985}"  @click="infoWindowOpen8">
              <bm-info-window :show="show8" @close="infoWindowClose8" @open="infoWindowOpen8">
                <v-html class="map_p">新金珠宝大洋百货中山店<br/>电话:18986136841<br/>地址：江汉路中山大洋百货一楼珠宝区</v-html>
              </bm-info-window>
          </bm-marker>
          <bm-marker :position="{lng:114.408264, lat:30.511693}"  @click="infoWindowOpen9">
              <bm-info-window :show="show9" @close="infoWindowClose9" @open="infoWindowOpen9">
                <v-html class="map_p">新金珠宝大洋百货光谷店<br/>电话:18971228842<br/>地址：洪山区珞瑜路光谷大洋百货一楼珠宝区</v-html>
              </bm-info-window>
          </bm-marker>
          <bm-marker :position="{lng:114.215289, lat:30.566894}"  @click="infoWindowOpen10">
              <bm-info-window :show="show10" @close="infoWindowClose10" @open="infoWindowOpen10">
                <v-html class="map_p">新金珠宝大洋百货龙阳店<br/>电话:84458971<br/>地址：汉阳王家湾龙阳大洋百货一楼珠宝区</v-html>
              </bm-info-window>
          </bm-marker>
          <bm-marker :position="{lng:114.273872, lat:30.555345}"  @click="infoWindowOpen11">
              <bm-info-window :show="show11" @close="infoWindowClose11" @open="infoWindowOpen11">
                <v-html class="map_p">新金珠宝汉商银座店<br/>电话:84952680<br/>地址：汉阳区钟家村汉阳商场一楼珠宝区</v-html>
              </bm-info-window>
          </bm-marker>
          <bm-marker :position="{lng:114.361711, lat:30.531387}"  @click="infoWindowOpen12">
              <bm-info-window :show="show12" @close="infoWindowClose12" @open="infoWindowOpen12">
                <v-html class="map_p">新金珠宝群光广场店<br/>电话:87874076<br/>地址：洪山区珞瑜路群光广场一楼珠宝区</v-html>
              </bm-info-window>
          </bm-marker>
          <bm-marker :position="{lng:114.406369, lat:30.521243}"  @click="infoWindowOpen13">
              <bm-info-window :show="show13" @close="infoWindowClose13" @open="infoWindowOpen13">
                <v-html class="map_p">新金珠宝宝谷店<br/>电话:87777063<br/>地址：洪山区鲁磨路余福泰珠宝店</v-html>
              </bm-info-window>
          </bm-marker>
          <bm-marker :position="{lng:114.348645, lat:30.593855}"  @click="infoWindowOpen14">
              <bm-info-window :show="show14" @close="infoWindowClose14" @open="infoWindowOpen14">
                <v-html class="map_p">新金珠宝销品茂店<br/>电话:18971243140<br/>地址：徐东中商销品茂一楼新金珠宝区</v-html>
              </bm-info-window>
          </bm-marker>
          <!-- <div v-for="(position,index) in newpositions" :key="index"> -->
          <!-- <bm-marker
            :position="{lng: position.lng, lat: position.lat}"
            @click="infoWindowOpen(index)"> -->
            <!-- <bm-info-window
              :title="position.contents"
              :position="{lng: position.lng, lat: position.lat}"
              :show="true"
              @close="infoWindowClose(index)"
              @open="infoWindowOpen(index)">
            </bm-info-window> -->
          <!-- </bm-marker> -->
          <!-- </div> -->
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
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false,
      show12: false,
      show13: false,
      show14: false,
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
    infoWindowClose1 () {
        this.show1 = false
      },
    infoWindowOpen1 () {
        this.show1 = true
      },
    infoWindowClose2 () {
        this.show2 = false
      },
    infoWindowOpen2 () {
        this.show2 = true
      },
    infoWindowClose3 () {
        this.show3 = false
      },
    infoWindowOpen3 () {
        this.show3 = true
      },
    infoWindowClose4 () {
        this.show4 = false
      },
    infoWindowOpen4 () {
        this.show4 = true
      },
    infoWindowClose5 () {
        this.show5 = false
      },
    infoWindowOpen5 () {
        this.show5 = true
      },
    infoWindowClose6 () {
        this.show6 = false
      },
    infoWindowOpen6() {
        this.show6 = true
      },
    infoWindowClose7 () {
        this.show7 = false
      },
    infoWindowOpen7 () {
        this.show7 = true
      },
    infoWindowClose8 () {
        this.show8 = false
      },
    infoWindowOpen8 () {
        this.show8 = true
      },
    infoWindowClose9 () {
        this.show9 = false
      },
    infoWindowOpen9 () {
        this.show9 = true
      },
    infoWindowClose10 () {
        this.show10 = false
      },
    infoWindowOpen10 () {
        this.show10 = true
      },
    infoWindowClose11 () {
        this.show11 = false
      },
    infoWindowOpen11 () {
        this.show11 = true
      },
    infoWindowClose12 () {
        this.show12 = false
      },
    infoWindowOpen12 () {
        this.show12 = true
      },
    infoWindowClose13 () {
        this.show13 = false
      },
    infoWindowOpen13 () {
        this.show13 = true
      },
    infoWindowClose14 () {
        this.show14 = false
      },
    infoWindowOpen14 () {
        this.show14 = true
      },
    // mapReady({ BMap, map }) {
    //   this.point = new BMap.Point(114.294616,30.564517);
    //   map.centerAndZoom(this.point, 13);  
    // },
    // infoWindowClose (index) {
    //   this.newpositions[index]["show"] = false
    // },
    // infoWindowOpen (index) {
    //   this.newpositions[index]["show"] = false
    // },
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
.map_p{
  font-size: 6px;
}
</style>