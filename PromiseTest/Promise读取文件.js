//1、引入fs模块
const fs = require('fs')
//2、调用方法读取文件
fs.readFile('./resources/test.md',(err,data)=>{
    //如果失败，则抛出错误
    if (err) {
        throw err;
    }
    //如果没有出错，则输出内容
    console.log(data.toString());
})