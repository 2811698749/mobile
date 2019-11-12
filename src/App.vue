<template>
  <div id="app">
    <!-- 头部 -->
    <LayHeader>
      <template>
        <div class="header-back" @touchstart="goBack">
          <span class="iconfont icon-houtui"></span>
          <span>返回</span>
        </div>
        <div class="header-title">{{ routerName }}</div>
      </template>
    </LayHeader>
    <!-- 主体 -->
    <router-view
      class="view"
      :style="{paddingBottom:isMainRouter ? '60px' : 0}"
      v-if="!$route.meta.keepAlive"
    />
    <keep-alive>
      <router-view
        class="view"
        v-if="$route.meta.keepAlive"
        :style="{paddingBottom:isMainRouter ? '60px' : 0}"
      ></router-view>
    </keep-alive>
    <!-- toolBar -->
    <ToolBar v-show="isMainRouter" :toolList="pathList"></ToolBar>
  </div>
</template>
<script>
import { mapState } from "vuex";
import ToolBar from "./components/ToolBar";
import LayHeader from "./components/LayHeader";
export default {
  data() {
    return {
      pathList: [
        {
          iconClass: "icon-xinwen",
          title: "公司快讯",
          path: "/news",
          name: "newsList"
        }
      ]
    };
  },
  computed: {
    ...mapState({
      routerName: state => state.currRouterName,
      isMainRouter() {
        let isMainFlag = false;
        this.pathList.forEach(item => {
          if (item.name == this.$route.name) {
            isMainFlag = true;
          }
        });
        return isMainFlag;
      }
    })
  },
  mounted() {},
  methods: {
    goBack(e) {
      e.preventDefault();
      let exitAppFlag = false;
      this.pathList.forEach(item => {
        if (item.name === this.$route.name) {
          exitAppFlag = true;
        }
      });
      if (exitAppFlag) {
        this.exitApp();
      } else {
        this.$router.go(-1);
      }
    },
    exitApp() {
      MessageBox({
        title: "系统提示：",
        message: "确定返回到工作台吗？",
        showCancelButton: true
      }).then(action => {
        if (action === "confirm") {
          window.open("http://toworkbench.app.sinopec.com");
        } else {
          console.log("cancel");
        }
      });
    }
  },
  components: {
    ToolBar,
    LayHeader
  }
};
</script>
<style lang="less" scoped>
#app {
  width: 7.5rem;
  height: 100vh;
  max-width: 1024px;
  position: relative;
  -webkit-overflow-scrolling: touch;
  .header-back {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    padding-left: 10px;
    span:nth-of-type(1) {
      font-size: 25px;
      margin-left: 0.02rem;
      vertical-align: middle;
      position: relative;
      top: 1px;
    }
    span:nth-of-type(2) {
      font-size: 16px;
      vertical-align: middle;
    }
  }
  .header-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .header-exit {
    position: absolute;
    width: 60px;
    top: 0;
    right: 10px;
    color: #fff;
    height: 60px;
    line-height: 60px;
    font-size: 0;
    text-align: center;
    span.exit-text {
      display: inline-block;
      height: 30px;
      width: 60px;
      font-size: 16px;
    }
  }
  .view {
    box-sizing: border-box;
    width: 7.5rem;
    height: 100vh;
    padding-top: 60px;
    overflow-y: auto;
    position: relative;
  }
}
</style>
