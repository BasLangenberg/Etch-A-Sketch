// Refactor me! :-)
var width = 25;
var height = 15;
var count = 0;

$(document).ready(function() {
  for(i=0;i<width;i++){
    $('#base').append('<div class="row" id="rown' + count + '"></div>');
    for(x=0;x<height;x++){
      $('#rown'+count).append('<div class="pixel"></div>');
    }
    count++
  }

  $('.pixel').hover(
    function(){
      $(this).addClass('mpixel').fadeTo('fast');
    }
  )

});
