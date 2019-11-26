import Tags from '../dbs/models/tags'
import Router from 'koa-router'
import axios from './utils/axios'
import { async } from 'q'

let router = new Router({
    prefix:'/tags'
})

router.get('/add',async (ctx)=>{
    let name = ctx.request.query.name
    let res = await Tags.find()
    let isRepeat = await Tags.find({name})
    if(isRepeat.length!=0){
        ctx.body = {
            code:-1,
            msg:'不能重复添加',
        }
    }else{
        let aTag = await Tags.create({
            name:name
        })
        if(aTag){
            ctx.body = {
                code:0,
                msg:'添加成功',
                data:aTag
            }
        }
    }
    
})

router.get('/get',async (ctx)=>{
    let res = await Tags.find()
    if(res){
        ctx.body = {
            code:0,
            msg:'查询成功',
            data:res
        }
    }
})

router.get('/delete',async (ctx)=>{
    let id = ctx.request.query.id
    console.log(id)
    let res = await Tags.remove({_id:id})
    if(res){
        ctx.body = {
            code:0,
            msg:'删除成功',
            data:res
        }
    }

})
export default router