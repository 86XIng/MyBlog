<template>
  <div class="page-index">
    <el-row :gutter="10">
      <el-col :span="5">
        <my-aside/>
      </el-col>
      <el-col :span="13">
        <div class="content">

          <h1 class="title">{{data.title}}</h1>
          
          <p class="info">
            <span class="releaseTime">
              发表时间:{{data.releaseTime}}
            </span>
            <span class="lastModified">
              修改时间:{{data.lastModified}}
            </span>
            <span class="viewCount">
              查看数:{{data.viewCount}}
            </span>
          </p>
          <div class="fontImg">
            <img :src="data.fontImg" alt="">
          </div>
          <no-ssr>
            <vue-markdown :source="data.content"/>
          </no-ssr>
        </div>
      </el-col>
      <el-col :span="6">
        <my-menu/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios"
import MyAside from '@/components/index/aside.vue'
import MyMenu from '@/components/index/menu.vue'
import VueMarkdown  from "vue-markdown"
export default {
    components:{
        VueMarkdown,
        MyAside,
        MyMenu
    },
    data(){
        return {
            data:{content:'Loading...'}
        }
    },
    async mounted(){
        let id = this.$route.query.id
        if(!id){
            this.$router.push('/index')
        }else{
            let that = this
            let res = await axios.get('/article/readArticle?id='+id)
            this.data = res.data.data[0]
            console.log(this.data)
        }
        /* this.content = await axios.get('/article/readArticle?id='+id)
        axios.get('/article/readArticle?id='+id).then(function(data){
            that.content=data.data.data[0].content
            content.log(that.content)
        }) */
    },
    watch:{
      async '$route'(to, from){
          let id = to.query.id
        if(!id){
            this.$router.push('/index')
        }else{
            let that = this
            let res = await axios.get('/article/readArticle?id='+id)
            this.data = res.data.data[0]
            console.log(this.data)
        }
      }
    }
}
</script>

<style lang="scss" scope>
.content{
  background: white;
  .title{
    margin-top: 0;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
  }
  .fontImg{
     img{
      height:200px ;
      width: 100%;
     }
  }
  .info{
    font-size: 12px;
    color: rgba($color: #000000, $alpha: 0.9);
  }
}
</style>