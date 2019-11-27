<template lang="pug">
div(class="page-index")
   el-row(:gutter="10")
      el-col(:span="5")
        my-aside
      el-col(:span="13")
        div(class="article")
            el-card(v-for="(item,idx) in articles" class="item" :key="idx" shadow="hover")
                el-row(:gutter="20" class="item-container")
                    el-col(:span="8" class="img-container")
                        nuxt-link(class="item-link" :to="'/article?id='+item._id")
                        img(:src="item.fontImg" alt="")
                    el-col(:span="16" class="item-body")
                        nuxt-link(class="item-link" :to="'/article?id='+item._id")
                        h5(class="item-title") {{item.title}}
                        p(class="item-desc") {{item.desc}}
                        p(class="item-detail")
                        span 发布时间{{item.releaseTime}}
                        span 查看数{{item.viewCount}}
                        span 评论数{{item.commentCount}}
                        span 标签{{item.tag}}
      el-col(:span="6")
        my-menu
  
</template>

<script lang="coffee">
import axios from 'axios'
import MyAside from '@/components/index/aside.vue'
import MyMenu from '@/components/index/menu.vue'
export default {
    components:{
        MyAside,
        MyMenu
    }
    data:->
        articles:[{
            title:'我把服务从七牛云迁移到阿里云了',
            desc:'222',
            url:'/article/162',
            fontImg:'https://static.surmon.me/thumbnail/cloud-logo-thumb.jpg?x-oss-process=style/blog.list.item.pc',
            releaseTime:'2019/11/10 下午',
            lastModified:'',
            viewCount:'133',
            commentCount:'12',
            category:'1',
            isOriginal:'true'
        },{
            title:'我把服务从七牛云迁移到阿里云了',
            desc:'222',
            url:'/article/162',
            fontImg:'https://static.surmon.me/thumbnail/cloud-logo-thumb.jpg?x-oss-process=style/blog.list.item.pc',
            releaseTime:'2019/11/10 下午',
            lastModified:'',
            viewCount:'133',
            commentCount:'12',
            category:'1',
            isOriginal:'true'
        },{
            title:'我把服务从七牛云迁移到阿里云了',
            desc:'222',
            url:'/article/162',
            fontImg:'https://static.surmon.me/thumbnail/cloud-logo-thumb.jpg?x-oss-process=style/blog.list.item.pc',
            releaseTime:'2019/11/10 下午',
            lastModified:'',
            viewCount:'133',
            commentCount:'12',
            category:'1',
            isOriginal:'true'
        }],
        page:0
    mounted:->
        id = this.$route.query.id
        res = await axios.get('/article/getByTag?id='+id+'&page='+this.page++)
        if(res.data.data.length==0)
        this.articles = res.data.data
        console.log this.articles
}
</script>

<style lang="scss" scoped>
.block{
  margin-bottom: 1rem;
}
.item{
  &:hover{
    background: rgba(197, 197, 197, 0.5);
  }
  margin-bottom: 1rem;
  .item-container{
    height: 7rem;
    .item-desc{
    }
    .item-link{
      text-decoration: none;
      .item-title{
        color: #414141;
        font-weight: 400;
        text-rendering:optimizeLegibility;
      }
    }
    .item-desc{
      font-size: 13px;
    }
    .img-container{
      height: 7rem;
      img{
        height: 7rem;
      }
    }
    .item-detail{
      font-size: 13px;
    }
  }
}
</style>