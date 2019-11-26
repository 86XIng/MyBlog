<template lang="pug">
div
  h5 默认颜色
  el-menu(default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose")
      - var num=[,'一','二','三']
      - for(var x=1;x<4;x++)
        el-menu-item(index="x")
          i(class="el-icon-location")
          nuxt-link(to="/")
            span 导航#{num[x]}
</template>

<script lang="coffee">
export default
    data:->
      tableData: [{
        name: '王小虎',
      }, {
        name: '王小虎',
      }, {
        name: '王小虎',
      }, {
        name: '王小虎',
      }]
    methods: 
      handleOpen:(key, keyPath)-> console.log key,keyPath
      handleClose:(key, keyPath)-> console.log key, keyPath
</script>

<style>

</style>