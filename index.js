const express = require('express') //express 모듈을 가져온다
const app = express() // express() function을 이용해서 새로운 express app을 만들고
const port = 5000 // 포트는 5000번을 백서버로 둔다

const bodyParser = require('body-parser'); 
const { User } = require("./models/User"); // model인 User를 사용하기위해 가져옴

// bodyParser를 사용하기 위한 옵션 설정
app.use(bodyParser.urlencoded({extended: true})); // application/x--www-form-urlencoded 타입을 분석해서 가져와줌
app.use(bodyParser.json()); // application/json 타입으로 된 것을 분석해서 가져와줌


// const mongoose = require('mongoose') // MongoDB 연결
// mongoose.connect('mongodb+srv://heeyeon:비밀번호자리@boilerplate.qrbid.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
//      useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
// }).then(() => console.log('MongoDB Connected...'))
//     .catch(err => console.log(err))
// 몽구스 버전이 6.0이상이라면 몽구스는 항상 useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false, 로 
// 기억하고 실행하기 때문에 더이상 지원하지 않는다

    const mongoose = require('mongoose') // MongoDB 연결
    mongoose.connect('mongodb+srv://heeyeon:비번자리임@boilerplate.qrbid.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))




app.get('/', (req, res) => res.send('희연이네'))
// express app의 루트디렉토리('/')에 Hello World를 출력해줌



//회원가입을 위한 라우터 생성
app.post('/register', (req, res) => {
    //회원가입 시 필요한 정보들을 client에서 가져오면 DB에 넣어준다

    // 정보들을 DB에 넣기위해 req.body 사용 bodyParser가 있기때문에 사용가능함
    const user = new User(req.body);

    //save() : MongoDB의 내장함수
    //save 실행 시 user Model에 저장이 됨
    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err}) //에러가 있으면 json형식으로 전달 후 err 메세지 전달
        return res.status(200).json({ // status(200)=성공
            success: true
        })
    })
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// 포트번호 5000번에서 app을 실행한다.
