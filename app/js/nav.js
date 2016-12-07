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
  $('#loginForm').show();
  $('#logoutForm').hide();
  logout_controller();
}
