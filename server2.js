const express = require('express') //우리가 설치한 모듈 가져오기
const app = express();

const server = app.listen(3000, ()=>{
    console.log('Start Server : localhost:3000');
});

app.set('views',__dirname+'/views'); //dirname 현재 디렉토리 의미, 거기의 views폴더 의미
app.set('view engine',"ejs") //불러올 엔진 선언, html과 자바스크립트와 같이 쓰게 해주는 템플릿
app.engine('html',require('ejs').renderFile);


var mysql      = require('mysql');

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'cs1234',
    database        : 'board'
  });
app.get('/db',function(req,res) { //하나의 라우터
   
    pool.getConnection(function(err, connection) {//db안에 파일을 읽어서 데이터를 보여주겠다
        if (err) throw err; // not connected!
    
        // Use the connection
        connection.query('SELECT * FROM test', function (error, results, fields) {
            res.send(JSON.stringify(results));
            console.log('results',results);
        // When done with the connection, release it.
        connection.release();
    
        // Handle error after the release.
        if (error) throw error;
    
        // Don't use the connection here, it has been returned to the pool.
        });
    });
  
})
