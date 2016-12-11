/**
 * Created by SpaceQ on 2016/12/3.
 */
function enterRoom(No) {
  $("#rooms").hide();
  $("#msgList").empty();
  appendMsg('Welcome', '欢迎积极出价!');
  $("#room").show();
  enterUser_controller(No, glb_status.userId);
}
function exitRoom(slient = false) {
  if (slient == false && glb_status.rooms[glb_status.self_postion].userId == glb_status.userId) {
    alert('您出了最高价，请不要跑路^ ^');
    return;
  }
  $("#rooms").show();
  $("#room").hide();
  removeUser_controller(slient)
}

function raisePrice() {
  var $raised_price = $("#raised-price");
  var price = $raised_price.val();
  if(price < glb_status.rooms[glb_status.self_postion].price) {
    appendMsg("失败","请出更高价");
    return;
  }
  raisePrice_controller(price);
  $raised_price.val('');
}
rooms = new Vue({
  el: '#rooms',
  data: {
    items: items
  },
  methods: {
    enterRoom: function (No) {
      enterRoom(No);
    },
    addItem: function () {
      var name = $("#newItemName").find("input").val();
      var price = $("#newItemPrice").find("input").val();
      // TODO check value vaildation
      var No = parseInt(Math.random() * 100000);
      raw_items[No] = {ID: No, title: name, price: parseInt(price), userId: '', users: []};
      addItem_controller(raw_items[No]);
      $('#newItemForm')[0].reset();
      $('#addNewItem').modal('hide');
      new Notification('添加' + name + '成功 :)');
    }
  }
});

