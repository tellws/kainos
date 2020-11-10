$(window).on('scroll load resize', function () {
    var scrollTop = $(this).scrollTop();
    var windowWidth = $(window).width();
   
    if(1480 < windowWidth){
      if(scrollTop >= 0){
        $('#next-page').addClass('view');
      };
    };
});


var mn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var nd = new Date();
var thisMonth = mn[nd.getMonth()];
var d = nd.getDate();

$('.mm-dd').html(thisMonth+' '+d+'th');

function startTime() {
  var nd = new Date();
  var h = nd.getHours();
  var m = nd.getMinutes();
  var s = nd.getSeconds();
  h = checkTime(h);
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
};
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
};
