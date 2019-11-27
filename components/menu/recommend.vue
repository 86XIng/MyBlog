<template>
  <div class="recommend">
    <h5>最近文章</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <nuxt-link v-for="(item,idx) in articles" :key="idx" :index="idx" :to="'/article?id='+item._id">
        <el-menu-item>
            <i class="el-icon-menu"></i>
            <span slot="title">
                {{item.title}}
            </span>
        </el-menu-item>
      </nuxt-link>
    </el-menu>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            articles:[{
                    title:'loading...',
                    _id:'/'
                }
                ]
        }
    },
    methods:{
        handleOpen(key, keyPath){console.log (key,keyPath)},
        handleClose(key, keyPath){console.log (key, keyPath)}
    },
    async mounted(){
        let article=await axios.get('/article/getTop')
        this.articles = article.data.data
    }
}
</script>

<style lang='scss' scoped>
.recommend{
    background: rgba(255, 255, 255, 0.6);
    h5{
        text-align: center;
        margin: 0;
        padding: 5px 0;
    }
    .el-menu{
        a{
            text-decoration: none;
        }
    }
    .el-menu-item{
        height: 3rem;
        line-height: 3rem;
        span{
            font-size: 12px;
        }  
    }
}
</style>