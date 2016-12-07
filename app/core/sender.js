/**
 * Created by SpaceQ on 2016/12/6.
 */
// const socket = require('./socket');

sender.send = function(msg) {
  var rinfo = glb_status.rinfo;
  msg = glb_status.userId + " " + msg;
  socket.server.send(msg, rinfo.port, rinfo.address, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`successful send to ${rinfo.address}:${rinfo.port}: ${msg}`);
    }
  })
};
