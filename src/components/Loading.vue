<template>
    <div class="loading">
         <mt-spinner type="double-bounce" color="#666"></mt-spinner>
    </div>
</template>
<style lang="less" scoped>
.loading{
    width: 7.5rem;
    height: 0.5rem;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
    
</style>
<script>
import { Spinner } from 'mint-ui';
import Vue from "vue";
Vue.component(Spinner.name, Spinner);
export default {
    
}
</script>