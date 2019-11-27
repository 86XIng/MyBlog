<template lang="pug">
div
  //- h5 默认颜色
  el-menu(default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose")
      //- - var num=[,'首页','文章','github']
      //- - for(var x=1;x<4;x++)
      el-menu-item(v-for="(item,idx) in dynamicTags" :key="idx")
        i(class="el-icon-location")
        nuxt-link(:to="'tag?id='+item._id")
          span {{item.name}}
</template>

<script lang="coffee">
import axios from 'axios'
export default
    data:->
      dynamicTags: [{
        name: '首页',
        url:'/index'
      }, {
        name: '文章',
        url:'/index'
      }, {
        name: 'github',
        url:'/index'
      }]
    methods: 
      handleOpen:(key, keyPath)-> console.log key,keyPath
      handleClose:(key, keyPath)-> console.log key, keyPath
    mounted:->
      that = this
      axios.get '/tags/get'
      .then (data)->
        console.log(data.data.data)
        that.dynamicTags = data.data.data
</script>

<style>

</style>