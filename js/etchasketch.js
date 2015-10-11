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

  $('#reset').click(function() {
    clear();
  })
})

function clear() {
  $('.pixel').removeClass('mpixel');
  console.log('cleared grid..');
}

function draw() {
  var count = 0;
  for(i=0;i<width;i++){
    $('#base').append('<div class="row" id="rown' + count + '"></div>');
    for(x=0;x<height;x++){
      $('#rown'+count).append('<div class="pixel"></div>');
    }
    count++
  }
}
