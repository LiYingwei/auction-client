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
  $("#rooms").show();
  $("#room").hide();
  removeUser_controller(slient)
}

function raisePrice() {
  // TODO check it is really a price and higher than the highest
  var $raised_price = $("#raised-price");
  var price = $raised_price.val();
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

