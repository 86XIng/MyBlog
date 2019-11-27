import Articles from '../dbs/models/articles'
import Tags from '../dbs/models/tags'
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

router.get('/getByTag',async (ctx)=>{
    let _id = ctx.request.query.id
    let res = await Tags.find({_id})
    let articles = await Articles.find({
        tag:res[0].name
    })
    if(articles){
        ctx.body = {
            code:0,
            msg:'查询成功',
            data:articles
        }
    }
})

router.get('/readArticle',async (ctx)=>{
    let _id = ctx.request.query.id
    let article = await Articles.find({
        _id
    })
    if(article){
        ctx.body = {
            code:0,
            msg:'查询成功',
            data:article
        }
    }
})

router.get('/getArticle',async (ctx)=>{
    let page = ctx.request.query.page
    let articles = await Articles.find({})
    .skip(page * 5)
    .limit(5)
    .sort({'_id':-1})
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
        fontImg,
        tag,
        original,
        content,
        from
    } = ctx.request.body
    // let body = JSON.stringify(ctx.request.body)
    // console.log(body)
    let anArticle = await Articles.create({
        title,
        desc,
        from,
        content,
        fontImg,
        tag,
        isOriginal:original,
        tag,
        releaseTime:Date.now(),
        lastModified:Date.now()
    })
    if(anArticle){
        ctx.body = {
            code:0,
            msg:'添加成功',
            data:anArticle
        }
    }else{
        ctx.body = {
            code:0,
            msg:'添加失败',
            data:anArticle
        }
    }
})
export default router