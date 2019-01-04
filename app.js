const io = require('socket.io-client');

const numbers = io.connect('http://localhost:3000/numbers');
const letters = io.connect('http://localhost:3000/letters');



setInterval( () => {
  numbers.emit('next-number');
}, 1000);


setInterval( () => {
  letters.emit('next-letter');
}, 1000);
