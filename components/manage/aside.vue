<template>
  <el-row class="tac">
  <el-col :span="24">
    <h5>默认颜色</h5>
    <el-menu
      default-active="1-1"
      :default-openeds="['1']"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
      class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">文章管理</template>
          <el-menu-item route="manageArticles" index="1-1">管理现有文章</el-menu-item>
          <el-menu-item route="releaseArticle" index="1-2">发布新文章</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="其他管理">
          <el-menu-item route="manageIndex" index="1-3">主页管理</el-menu-item>
          <el-menu-item route="manageTags" index="1-4">标签管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
export default {
methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>

</style>