<template>
  <el-container>
    <el-header>
      <my-header/>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>
      <my-footer/>
    </el-footer>
  </el-container>
</template>
<script>
import MyHeader from '@/components/public/header/index.vue'
import MyFooter from '@/components/public/footer/index.vue'
export default{
  components:{
    MyHeader,
    MyFooter
  }
}
</script>
<style lang='scss' scoped>

.el-header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.6);
  height: 5.1rem;
  z-index: 999;
}
.el-main{
  margin-top: 6rem;
}
.el-container{
  width: 1140px;
  margin: 0 auto;
}
</style>
