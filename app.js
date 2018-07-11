var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
io.on('connection',function(socket){
  socket.on('chat.message',function(message){
    io.emit('chat.message',message);
    console.log('New message:'+ message);
  });
});
var Redis = require('ioredis');
var redis = new Redis({ host:'redis' });
redis.subscribe('test-channel', function(err, count) {
  console.log('connect!');
});


redis.on('message', function(channel, notification) {
  console.log(channel);
  console.log(notification);
  notification = JSON.parse(notification);
  io.emit('chat.message', notification.data.message);

});
// 監聽 3000 port
http.listen(3000,function(){
  console.log('Listening on Port 3000');
});
app.get('/',function(request,response){
  response.sendFile(__dirname+'/test.html');
});
