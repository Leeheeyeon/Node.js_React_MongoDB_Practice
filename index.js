const express = require('express') //express 모듈을 가져온다
const app = express() // express() function을 이용해서 새로운 express app을 만들고
const port = 5000 // 포트는 5000번을 백서버로 둔다

app.get('/', (req, res) => res.send('희연이네'))
// express app의 루트디렉토리('/')에 Hello World를 출력해줌
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// 포트번호 5000번에서 app을 실행한다.
