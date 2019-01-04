![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Socket.io-ns

### Author: George Raymond

### Links and Resources
* [repo](https://github.com/georgeraymond92/09-socket.io-ns)
* [travis](http://xyz.com)
* [back-end](http://xyz.com)
* [front-end](https://pmww0ww42q.codesandbox.io/)

### Modules
* #### `server.js`
##### Functionality
The server makes a connection to localhost://3000 and listens for emits. Server defines two namespaces 'letters' & 'numbers'. Both namespaces contain a general emit and a room. Depending on the emit the server hears it may return a number(postitive or negative defines by the room making the emit) or a letter(upper or lowercase).

* #### `app.js`
##### Functionality
The app file makes connections to both name spaces defined by our server and regularly emits to them at timed intervals.

* #### `client.js`
##### Functionality
The client file if connected to the server servers as a logger of the activity being triggered by the app.js file.

### Setup
#### `.env` requirements
* `PORT` - 3000


#### Running the app
##### *Full functionality requires three instances running simultaneously
* Start Server: `node server.js`
  * Starts server to direct activity
* Start App: `node app.js`
  * Starts firing emits at regular intervals
* Start Client: `node client.js`
  * Starts logging activity in the logger instance

#### Tests
...to be implemented soon
