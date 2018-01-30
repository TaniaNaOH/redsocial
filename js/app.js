

var $name = $('#name');
var $password = $('#password');

$(document).ready(function(){
  $('ul.tabs').tabs('select_tab', 'tab_id');
  $('.parallax').parallax();
  $name.keyup(validate);
  $password.keyup(validate);
});

var validate = function(){
  if ($(this).val().trim().length>0){
    $('#enter').removeAttr('disabled');
  } else {
    $('#enter').attr('disabled', true);
  };
};






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

 


