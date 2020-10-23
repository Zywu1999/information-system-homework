var express=require('express');
var router=express.Router();

//登录界面，并接受登录界面的POST请求,render的第一个参数是views文件夹下的文件
router.get('/',function(req,res,next){
    res.render('login',{title:'登录'});
});
router.post('/',function(req,res,next){
    res.render('index',{title:'首页'});
});
module.exports=router;