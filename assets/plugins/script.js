
$(document).ready(function(){
  $("#waypoint-trigger").waypoint(function(direction){
    $('.header').toggleClass('sticky');
    $('.container_custom').toggleClass('padding');
    $('.menu-wrapper').toggleClass('aligned');
  },{offset: '25%'}
  );
  
});
