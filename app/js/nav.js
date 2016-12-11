/**
 * Created by SpaceQ on 2016/12/4.
 */
function goHome() {
  exitRoom();
}

function loginNavWrap() {
  var $userid = $('#login-user-id');
  var userid = $userid.val();
  login_controller(userid);
  $('#logout-user-id').html(userid);
  $('#loginForm').hide()[0].reset();
  $('#logoutForm').show();
}

function logoutNavWrap() {
  if (glb_status.self_postion != -1 && glb_status.rooms[glb_status.self_postion].userId == glb_status.userId) {
    alert('您出了最高价，请不要跑路^ ^');
    return;
  }
  $('#loginForm').show();
  $('#logoutForm').hide();
  logout_controller();
}
