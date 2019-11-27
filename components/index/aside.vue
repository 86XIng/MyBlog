<template lang="pug">
div(class="aside")
  h5 文章分类
  el-menu(default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose")
      //- - var num=[,'首页','文章','github']
      //- - for(var x=1;x<4;x++)
      nuxt-link(v-for="(item,idx) in dynamicTags" :key="idx" :to="'tag?id='+item._id")
        el-menu-item()
          i(class="el-icon-location")
          span {{item.name}}
</template>

<script lang="coffee">
import axios from 'axios'
export default
    data:->
      dynamicTags: [
        name:'loading',
        _id:''
      ]
    methods: 
      handleOpen:(key, keyPath)-> console.log key,keyPath
      handleClose:(key, keyPath)-> console.log key, keyPath
      getNew:()->
        that = this
        axios.get '/tags/get'
        .then (data)->
          console.log(data.data.data)
          that.dynamicTags = data.data.data
    mounted:->
      this.getNew()
      
</script>

<style lang="scss" scoped>
.aside{
  background: rgba(255, 255, 255, 0.6);
  h5{
    text-align: center;
    margin:0;
    padding: 5px 0;
  }
}
.el-menu{
  a{
    text-decoration: none;
  }
}
.el-menu-item{
  span{
    text-decoration: none;
  }
}
</style>