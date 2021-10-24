const express = require('express') //express 모듈을 가져온다
const app = express() // express() function을 이용해서 새로운 express app을 만들고
const port = 5000 // 포트는 5000번을 백서버로 둔다



// const mongoose = require('mongoose') // MongoDB 연결
// mongoose.connect('mongodb+srv://heeyeon:비밀번호자리@boilerplate.qrbid.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//      useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
// }).then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err))
// 몽구스 버전이 6.0이상이라면 몽구스는 항상 useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false, 로 
// 기억하고 실행하기 때문에 더이상 지원하지 않는다

    const mongoose = require('mongoose') // MongoDB 연결
    mongoose.connect('mongodb+srv://heeyeon:비밀번호자리@boilerplate.qrbid.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))





app.get('/', (req, res) => res.send('희연이네'))
// express app의 루트디렉토리('/')에 Hello World를 출력해줌
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// 포트번호 5000번에서 app을 실행한다.
