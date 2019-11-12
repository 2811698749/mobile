<template>
  <footer id="footer">
    <router-link v-for="(tool,index) in toolList" :key="index" class="footer-item" :to="tool.path">
      <span class="iconfont" :class="tool.iconClass"></span>
      <span class="footer-title">{{ tool.title }}</span>
    </router-link>
  </footer>
</template>
<script>
export default {
  props: ["toolList"]
};
</script>
<style lang="less" scoped>
#footer {
  position: absolute;
  font-size: 14px;
  color: #333;
  width: 7.5rem;
  height: 60px;
  bottom: 0;
  display: flex;
  background-color: #eee;
  z-index: 999999;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px -1px 1px #ddd;
  .router-link-active span {
    color: #4e6dfb;
  }
  .router-link-active span.iconfont {
    color: #4e6dfb;
  }
  .footer-item {
    display: inline-block;
    width: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 50px;
    color: #313030;
    .iconfont {
      font-size: 24px;
      color: #b0b3bf;
    }
    span:nth-of-type(2) {
      display: inline-block;
      width: 100%;
      text-align: center;
    }
  }
}
</style>