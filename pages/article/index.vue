<template>
  <div class="page-index">
    <el-row :gutter="10">
      <el-col :span="5">
        <my-aside/>
      </el-col>
      <el-col :span="13">
        {{content}}
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
            content:''
        }
    },
    async mounted(){
        let id = this.$route.query.id
        if(!id){
            this.$router.push('/index')
        }else{
            let that = this
            let res = await axios.get('/article/readArticle?id='+id)
            this.content = res.data.data[0].content
            console.log(this.content)
        }
        /* this.content = await axios.get('/article/readArticle?id='+id)
        axios.get('/article/readArticle?id='+id).then(function(data){
            that.content=data.data.data[0].content
            content.log(that.content)
        }) */
    }
}
</script>

<style>

</style>