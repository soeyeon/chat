var express = require('express'),
    port = process.env.PORT || 3000,
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server), // socket.io 를 사용하기 위한 io 객체 생성
    users = {}, // 기본 회원이 담기는 object
    onlineUsers = {}; // 현재 online인 회원이 담기는 object
    
app.use(express.static('public')); // 정적파일(css, js...)을 사용하기 위한 path 지정

app.get('/', function (req, res) {
    res.redirect('/chat');
}); // '/' 로 들어오는 요쳥을 '/chat'으로 리다이렉팅

app.get('/chat', function (req, res) {
    res.sendfile(__dirname + '/chat.html');
}); // '/chat'으로 들어오는 요청은 chat.html 을 렌더링

server.listen(port, () => {
    console.log(`server open ${port}`);
}); // 3000 포트로 서버 open