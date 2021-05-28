const express = require('express') //우리가 설치한 모듈 가져오기
const app = express();

const server = app.listen(3000, ()=>{
    console.log('Start Server : localhost:3000');
});

app.set('views',__dirname+'/views'); //dirname 현재 디렉토리 의미, 거기의 views폴더 의미
app.set('view engine',"ejs") //불러올 엔진 선언, html과 자바스크립트와 같이 쓰게 해주는 템플릿
app.engine('html',require('ejs').renderFile);

app.get('/',function(req,res) { //하나의 라우터
    res.render('index.html')
})

app.get('/about', function (req,res){
    res.render('about.html')
})
