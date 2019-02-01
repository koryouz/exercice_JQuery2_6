$(document).ready(function(){
  $('div.color').mouseover(function(){
    var classValue = $(this).attr('class');
    var classArray = classValue.split(' ');
    $('#text').css({'color': classArray[1]});
  });
  $('div.color').mouseout(function(){
    var classValue = $(this).attr('class');
    var classArray = classValue.split(' ');
    $('#text').css({'color': 'black'});
  });
});
