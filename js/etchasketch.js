// Refactor me! :-)
var width = 50;
var height = 50;
var count = 0;

$(document).ready(function() {
  for(i=0;i<height;i++){
    $('#base').append('<div class="row" id="rown' + count + '"></div>');
    for(x=0;x<width;x++){
      $('#rown'+count).append('<div class="pixel"></div>');
    }
    count++
  }
});
