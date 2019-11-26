import Articles from '../dbs/models/articles'
import Router from 'koa-router'
import axios from './utils/axios'
import { async } from 'q'

let router = new Router({
    prefix:'/article'
})

router.get('/getTop',async (ctx)=>{
    let articles = await Articles.find().sort({_id:1}).limit(10)
    if(articles){
        ctx.body = {
            code:0,
            msg:'查询成功',
            data:articles
        }
    }
})

router.post('/addArticle',async (ctx)=>{
    const{
        title,
        desc,
        url,
        fontImg,
        category,
        isOriginal
    } = ctx.request.body
    // let body = JSON.stringify(ctx.request.body)
    // console.log(body)
    let anArticle = await Articles.create({
        title,
        desc,
        url,
        fontImg,
        category,
        isOriginal,
        releaseTime:Date.now(),
        lastModified:Date.now()
    })
    if(anArticle){
        ctx.body = {
            code:0,
            msg:'添加成功',
            data:anArticle
        }
    }
})
export default router