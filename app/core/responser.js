/**
 * Created by SpaceQ on 2016/12/6.
 * now support command: 'join' 'bid' 'leave' 'login' 'auctions' 'list'
 */

// responser.join = function (user, msg, rinfo) {
//   var roomId = parseInt(msg);
//   enterUser_controller(roomId, user);
// };
//
// responser.bid = function (user, msg, rinfo) {
//   var price = parseInt(msg);
//   raisePrice_controller(glb_status.onlineUser[user], user, price);
// };
//
// responser.leave = function (user, msg, rinfo) {
//   removeUser_controller(glb_status.onlineUser[user], user);
// };
//
// responser.login = function (user, msg, rinfo) {
//   glb_status.userLogin(user, rinfo);
// };
//
// responser.auctions = function (user, msg, rinfo) {
//   sender.send(rinfo, "auctions " + JSON.stringify(glb_status.rooms));
// };
//
// responser.list = function (user, msg, rinfo) {
//   var roomId = parseInt(msg);
//   sender.send(rinfo, "userlist " + JSON.stringify(glb_status.users[roomId]));
// };

responser.auctions = function (msg, rinfo) {
  glb_status.rooms = JSON.parse(msg);
  for (var id in glb_status.rooms) {
    glb_status.rooms[id]["ID"] = id;
  }
  renderItem();
};

responser.userlist = function (msg, rinfo) {
  glb_status.users = JSON.parse(msg);
  glb_status.rooms[glb_status.self_postion]["users"] = glb_status.users;
  renderRoom(glb_status.rooms[glb_status.self_postion]);
};

responser.userleave = function (msg, rinfo) {
  var userid = JSON.parse(msg);
  if (userid != glb_status.userId) {
    delete glb_status.users[userid];
    renderRoom(glb_status.rooms[glb_status.self_postion]);
  }
  else {
    exitRoom(true);
  }
};

responser.message = function (msg, rinfo) {
  var [type] = msg.split(" ", 1);
  msg = msg.substring(type.length + 1);
  if (type == "toyou") {
    alert("Message to you: " + msg);
  } else if (glb_status.self_postion != -1) {
    appendMsg(type, msg);
  } else {
    alert(type + ": " + msg);
  }
};

responser.removeitem = function (msg, rinfo) {
  var itemId = JSON.parse(msg);
  removeItem_controller(itemId);
};

responser.additem = function (msg, rinfo) {
  var item = JSON.parse(msg);
  glb_status.addRoom(item["ID"], item["title"], item["price"], item["userId"]);
  renderItem();
};

responser.price = function (msg, rinfo) {
  var [No, price, user] = JSON.parse(msg);
  glb_status.updatePrice(No, price, user);
  if (glb_status.self_postion == No) {
    renderRoom(glb_status.rooms[No]);
    appendMsg("价格更新", user + "出价" + price)
  }
  else renderItem();
};