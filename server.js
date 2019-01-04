'use strict';

const io = require('socket.io')(3000);
const letters = io.of('/letters');
const numbers = io.of('/numbers');
let counter = 0;
let letter = 'A';


io.on('connection', (socket) => {
  console.log( `connection made at socket ${socket.id}`);
});

numbers.on('connection', (socket) => {
  console.log(`${socket.id} connected to numbers`);

  socket.on('join', (room , cb) => {
    console.log(`someone is joining room: ${room}`);
    socket.join(room);

  });

  socket.on('next-number', () => {
    // an emit in this 'on' will be broadcast to every socket in the namespace
    socket.broadcast.emit('number', counter++);

    socket.to('negative').emit('_number', counter * -1);
  })

});


letters.on('connection', (socket) => {
  console.log(`${socket.id} connected to letters`);

  socket.on('join', (room) => {
    console.log(`someone is joining room: ${room}`);
    socket.join(room);
  });

  socket.on('next-letter', (payload) => {
    // an emit in this 'on' will be broadcast to every socket in the namespace
    letter = nextLetter(letter);
    socket.broadcast.emit('letter', letter );
    socket.to('lowercase').emit('_letter', letter.toLowerCase());
  })

})

function nextLetter(s){
  return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
      var c= a.charCodeAt(0);
      switch(c){
          case 90: return 'A';
          case 122: return 'a';
          default: return String.fromCharCode(++c);
      }
  });
}