const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //공백제거
        unique: 1
    },
    password: {
        type: String,
        maxlength: 50
    },
    role: { //유저에게 관리자권한 부여
        type: Number, // 0이면 일반유저, 1이면 관리자
        default: 0 // 임의로 role을 지정하지 않으면 기본값 0으로 설정
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }

})

// Schema를 Model로 감싸주기
const User = mongoose.model('User', userSchema)
            // Model의 이름 : User, Schema: userSchema
            
// User를 다른 파일에서도 사용할 수 있도록 module export 해준다.
module.exports = { User }