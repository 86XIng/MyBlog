<template>
  <div class="my-header">
    <el-row :gutter="20">
      <el-col class="logo" :span="3">
        <nuxt-link to="/index">
          <img src="https://zh.nuxtjs.org/logos/nuxt-emoji@2x.png" alt="">
        </nuxt-link>
      </el-col>
      <el-col :span="16">
        <nuxt-link class="blog-name" to="/index">
          My blog
        </nuxt-link>
      </el-col>
      <el-col :span="5">
        <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52 src="//music.163.com/outchain/player?type=0&id=729082476&auto=1&height=32"></iframe>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
  .my-header{
    width: 1140px;
    margin: 0 auto;
    line-height: 60px;
    .logo{
      img{
        height: 4rem;
      }
    }
    .blog-name{
      text-decoration: none;
      color: rgba(0, 136, 245, 0.5);
    }
  }
</style>