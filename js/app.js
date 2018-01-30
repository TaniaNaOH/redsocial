var $name = $('#name');
var $password = $('#password');
var $textarea = $('#textarea1');

$(document).ready(function(){
  $('ul.tabs').tabs('select_tab', 'tab_id');
  $('.parallax').parallax();
  $name.keyup(validate);
  $password.keyup(validate);
  $textarea.keyup(publish);
});

var validate = function(){
  if ($('#name').val().trim().length>0 && $('#password').val().trim().length>0){
    $('#enter').removeClass('disabled');
  } else {
    $('#enter').addClass('disabled', true);
  };
};

var publish = function(){
  if ($('#textarea1').val().trim().length>1){
    $('#publish').removeAttr('disabled');
  } else{
    $('#publish').attr('disabled', true);
  }
};
paintTextarea();

var paintTextarea = function(){

  var $container = $("<div />"), {"class":"row"};
  var $div = $("<div />"), {"class":"col l12 col s12"};
  var $p = $("<p />"), {"class":"published"};

  $container.append($div);
  $container.append($p);
  $("#publish_user").prepend($container);

}








  // Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyAlAZ7lD_ek20WCGhSNS73SvALNyHrQYU0",
  //   authDomain: "foodlovers-a505a.firebaseapp.com",
  //   databaseURL: "https://foodlovers-a505a.firebaseio.com",
  //   projectId: "foodlovers-a505a",
  //   storageBucket: "",
  //   messagingSenderId: "703106499379"
  // };
  // firebase.initializeApp(config);
