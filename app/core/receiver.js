/**
 * Created by SpaceQ on 2016/12/6.
 */
// const socket = require('../app/core/socket');
// const responser = require('../app/core/responser');
var server = socket.server;
server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  msg = msg.toString();
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
  var [type] = msg.split(" ", 1);
  msg = msg.substring(type.length + 1);
  var command = eval("responser." + type);
  if(typeof command === "function") {
    command(msg, rinfo);
  } else {
    console.log("illegal command: " + type);
  }
});

server.on('listening', () => {
  var address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(23333 + parseInt(Math.random() * 40000));

