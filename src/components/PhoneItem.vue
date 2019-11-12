<template>
  <div class="phone-item">
    <div class="phone-icon">
      <span class="iconfont" :class="iconClass" :style="{color}"></span>
    </div>
    <div class="phone-number">
      <p>{{ phoneNumber }}</p>
      <p>{{ phoneType }}</p>
    </div>
    <div class="phone-tel phone-ban" v-if='!xh'>
      <a :href="'tel:'+phoneNumber">
        <span class="iconfont icon-dianhua"></span>
      </a>
    </div>
    <div class="phone-tel" v-if="phoneSms">
      <a :href="'sms:'+ phoneNumber ">
        <span class="iconfont icon-faxinxi1"></span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["phoneNumber", "phoneType", "phoneSms", "iconClass",'color','xh']
};
</script>
<style lang="less" scoped>
.phone-item {
  height: 1.5rem;
  display: flex;
  background-color: #fff;
  margin-top: 0.2rem;
  div {
    height: 1.5rem;
    text-align: center;
  }
  .phone-icon {
    flex: 0 0 1.3rem;
    line-height: 1.5rem;
    .iconfont {
      font-size: 0.64rem;
    }
  }
  .phone-number {
    text-align: left;
    flex: 0 0 4rem;
    p {
      height: 0.5rem;
      line-height: 0.5rem;
    }
    p:nth-of-type(1) {
      margin-top: 0.28rem;
      font-size: 0.32rem;
      color: #101010;
    }
    p:nth-of-type(2) {
      font-size: 0.28rem;
      color: #8d8d8d;
    }
  }
  .phone-tel {
    flex: 1 1 auto;
    line-height: 1.5rem;
    text-align: left;
    a {
      display: inline-block;
      width: 50px;
      height: 50px;
      .icon-dianhua {
        font-size: 0.4rem;
        color:#4E6DFB
      }
      .icon-faxinxi1 {
        font-size: 0.5rem; 
        color:#4E6DFB
      }
    }
  }
}
</style>