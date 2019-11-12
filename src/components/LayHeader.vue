<template>
  <header class="header">
    <slot></slot>
  </header>
</template>
<style lang="less" scoped>
.header {
  width: 7.5rem;
  height: 60px;
  background-color: #4e6dfb;
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  line-height: 60px;
  font-size: 20px;
  z-index: 999;
}
</style>
<script>
export default {};
</script>