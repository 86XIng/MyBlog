<template>
  <el-menu :router="true" default-active="1" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="/manageArticles">首页</el-menu-item>
    <el-menu-item class="right" route="/index" index="2">退出</el-menu-item>
  </el-menu>
</template>

<script>
export default {

}
</script>

<style scoped>
    .right{
        float: right;
    }
    .el-menu-demo{
      margin-bottom: 10px;
    }
</style>