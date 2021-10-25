// 환경변수 : process.env.NODE_ENV
if(process.env.NODE_ENV === 'production') {// 환경변수가 production이면 : Deploy(배포)한 후라면,
    module.exports = require('./prod');
}else{
    module.exports = require('./dev')
}