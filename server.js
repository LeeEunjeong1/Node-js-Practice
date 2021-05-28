const express = require('express') //우리가 설치한 모듈 가져오기
const app = express();

const server = app.listen(3000, ()=>{
    console.log('Start Server : localhost:3000');
});

app.get('/',function(req,res) { //하나의 라우터
    res.send('hello world')
})

app.get('/about', function (req,res){
    res.send('about page')
})
