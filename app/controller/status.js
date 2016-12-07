/**
 * Created by SpaceQ on 2016/12/6.
 */
var assert = require('assert');
glb_status.rinfo = {address: "0.0.0.0", port: 23333};
glb_status.userId = 0;
glb_status.rooms = {}; // id: {ID,title,price,userId}
glb_status.users = {};
glb_status.self_postion = -1;

glb_status.addRoom = function (id, title, price, userId) {
  glb_status.rooms[id] = {ID: id, title: title, price: price, userId: userId};
};

glb_status.removeRoom = function (id) {
  delete glb_status.rooms[id];
};

glb_status.userLogin = function () {
  glb_status.self_postion = -1;
};

glb_status.userLogout = function () {
  glb_status.userId = 0;
  glb_status.rooms = {};
  glb_status.users = {};
  glb_status.self_postion = -1;
};

glb_status.userLeaveRoom = function () {
  glb_status.self_postion = -1;
};

glb_status.userEnterRoom = function (user, roomId) {
  assert(glb_status.self_postion == -1);
  glb_status.self_postion = roomId;
};

glb_status.updatePrice = function (No, price, user) {
  glb_status.rooms[No]["price"] = price;
  glb_status.rooms[No]["userId"] = user;
};