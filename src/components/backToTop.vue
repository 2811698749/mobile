<template>
  <div class="back-to-top" v-show="showFlag" @touchstart='backToTop'>
       <span class="iconfont icon-huidingbu"></span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showFlag:false
    }
  },
  mounted() {
    this.$parent.$refs.scrollDom.addEventListener('scroll',()=>{
     this.showFlag = true;
    })
  },
  methods:{
    backToTop(){
       this.$parent.$refs.scrollDom.scrollTop = 0;
       setTimeout(()=>{
         this.showFlag =false;
       },100)
    }
  }
};
</script>
<style lang="less" scoped>
.back-to-top {
  position: absolute;
  top: 80%;
  right: 8%;
  background-color: #999;
  width: 0.9rem;
  height:  0.9rem;
  line-height: 0.9rem;
  border-radius: 50%;
  text-align: center;
  opacity: 0.6;
  z-index: 999;
  color: rgb(26, 0, 139);
  span.iconfont {
    font-size: 0.4rem;
  }
}
</style>