$(function () {
  var $loginForm = $('#loginForm');
  var $joinForm = $('#joinForm');

  $("#loginBtn").click(function (e) {
      e.preventDefault();
      $loginForm.show();
      $joinForm.hide();
  });

  $("#joinBtn").click(function (e) {
      e.preventDefault();
      $joinForm.show();
      $loginForm.hide();
  });
});