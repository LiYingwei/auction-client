/**
 * Created by SpaceQ on 2016/12/5.
 */
// var glb_status = require('../app/controller/glb_status');
// var message = require('../app/controller/message');
var specificRoom;
var rooms;

var deepcopy = function (obj) {
  return $.extend(true, {}, obj);
};

var renderItem = function () {
  items = $.extend(true, {}, glb_status.rooms);
  rooms.$set(rooms, 'items', items);
};

var renderRoom = function (item) {
  var now_item = deepcopy(item);
  if (typeof specificRoom == "undefined") {
    specificRoom = new Vue({
      el: '#room',
      data: {
        status: now_item
      }
    });
  }
  specificRoom.$set(specificRoom, 'status', now_item);
};

var login_controller = function (userid) {
  glb_status.userId = userid;
  sender.send('login');
  sender.send('auctions');
};

var logout_controller = function () {
  glb_status.userLogout();
  renderItem();
};

var addItem_controller = function (single_item) {
  glb_status.addRoom(single_item["ID"], single_item["title"], single_item["price"]);
  renderItem();
};

var removeItem_controller = function (No) {
  if(glb_status.self_postion == No) exitRoom(true);
  glb_status.removeRoom(No);
  renderItem();
};

var removeUser_controller = function (slient = false) {
  if (!slient) {
    sender.send("leave");
  }
  glb_status.userLeaveRoom();
  renderItem();
};

var enterUser_controller = function (No, userId) {
  sender.send("join " + JSON.stringify(No));
  glb_status.userEnterRoom(userId, No);
  renderRoom(glb_status.rooms[No]);
};

var raisePrice_controller = function (price) {
  //TODO check if higher and return result
  sender.send(`bid ${price}`);
};