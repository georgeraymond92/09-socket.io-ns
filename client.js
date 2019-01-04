const io = require('socket.io-client');

const numbers = io.connect('http://localhost:3000/numbers');
const letters = io.connect('http://localhost:3000/letters');
letters.emit('join' , 'lowercase');
numbers.emit('join' , 'negative');

letters.on('letter', (payload) => {
  console.log({payload});
});


numbers.on('number', (num) => {
  console.log({num});
});

numbers.on('_number', (num) => {
  console.log({num});
});

letters.on('_letter' , (payload) => {
  console.log({payload});
});

