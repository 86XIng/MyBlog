import Router from 'koa-router'
import axios from './utils/axios'
import qiniu from 'qiniu'
import proc from 'process'


let bucket = "dpt";
let accessKey = "4USkqzL2C6Ib_H-4vUP2hZ1PbCdMroIX9TRXqRvg"
let secretKey = "7twFuKB_qPdc6PXyf5_ZN502JRNAnTguw1oxmJ0b";
let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
let options = {
    scope: bucket
};
let putPolicy = new qiniu.rs.PutPolicy(options);

let uploadToken = putPolicy.uploadToken(mac);
let config = new qiniu.conf.Config();

let router = new Router({
    prefix:'/upload'
})

router.post('/getToken',async (ctx)=>{
    var accessKey = '4USkqzL2C6Ib_H-4vUP2hZ1PbCdMroIX9TRXqRvg';
    var secretKey = '7twFuKB_qPdc6PXyf5_ZN502JRNAnTguw1oxmJ0b';
    var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    var options = {
        scope: bucket,
    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken=putPolicy.uploadToken(mac);
    ctx.body = {
        code:0,
        msg:'查询成功',
        data:uploadToken
    }
})
export default router