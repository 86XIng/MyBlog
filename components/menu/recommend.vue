<template>
  <div class="recommend">
      <ul>
          <li v-for="(item,idx) in articles" :key="idx">
              {{idx}}
              <nuxt-link :to="item.url">
                  <span>
                      {{item.title}}
                  </span>
              </nuxt-link>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            articles:[{
                    title:'实现基于 Nuxt.js 的 SSR 应用',
                    url:'/article/27'
                },{
                    title:'实现基于 Nuxt.js 的 SSR 应用',
                    url:'/article/27'
                },{
                    title:'实现基于 Nuxt.js 的 SSR 应用',
                    url:'/article/27'
                },{
                    title:'实现基于 Nuxt.js 的 SSR 应用',
                    url:'/article/27'
                },{
                    title:'实现基于 Nuxt.js 的 SSR 应用',
                    url:'/article/27'
                },{
                    title:'实现基于 Nuxt.js 的 SSR 应用',
                    url:'/article/27'
                },{
                    title:'实现基于 Nuxt.js 的 SSR 应用',
                    url:'/article/27'
                },{
                    title:'实现基于 Nuxt.js 的 SSR 应用',
                    url:'/article/27'
                },{
                    title:'实现基于 Nuxt.js 的 SSR 应用',
                    url:'/article/27'
                },{
                    title:'实现基于 Nuxt.js 的 SSR 应用',
                    url:'/article/27'
                },{
                    title:'实现基于 Nuxt.js 的 SSR 应用',
                    url:'/article/27'
                },{
                    title:'实现基于 Nuxt.js 的 SSR 应用',
                    url:'/article/27'
                },{
                    title:'实现基于 Nuxt.js 的 SSR 应用',
                    url:'/article/27'
                },
                ]
        }
    },
    async mounted(){
        let article=await axios.get('/article/getTop')
        this.articles = article.data.data
    }
}
</script>

<style lang='scss' scoped>
.recommend{
    ul{
        list-style: none;
        li{
            margin-bottom: 20px;
            a{
                text-decoration: none;
                span{
                    font-size: 13.3px;
                }
            }
        }
    }
}
</style>