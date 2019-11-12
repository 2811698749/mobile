const api  = [];
const proxy = {};
 api.forEach(item =>{
    proxy[item] =    {
        target:'http://10.67.72.54:7011'
    }  
 });
module.exports = {
    productionSourceMap:false,//去map文件
    outputDir:'./dist',//配置产出路径
    publicPath:process.env.NODE_ENV === 'production'? "/dist/":"/",//配置输出路径
    // assetsDir:'assets',//静态文件输出控制
    // chainWebpack: config =>{
    //     config.resolve.alias.set('_v',path.resolve(__dirname,'src/views'))
    // },//起别名
    devServer:{
        proxy
    }
}