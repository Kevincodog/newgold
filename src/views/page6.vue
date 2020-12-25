<template>
  <div id="page6">
    <headTop></headTop>
    <router-view></router-view>
    <footBottom></footBottom>
  </div>
</template>
<script>
import { headTop, footBottom } from "../components/index";
export default {
  name: "page6",
  components: {
    headTop,
    footBottom,
  },
};
</script>
<style>

</style>
