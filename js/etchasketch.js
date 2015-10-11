$(document).ready(function() {
  $('#reset').click(function() {
    clear();
  })

  $('#draw').click(function() {
    draw();
  })
})

function clear() {
  $('.pixel').removeClass('mpixel');
  console.log('cleared grid..');
}

$(document).on("mouseenter", ".pixel", function(){
  $(this).addClass('mpixel').fadeTo('fast');
})

function draw() {
  $('#base').empty();
  // Add debug code for too big numbers & empty values
  var height = document.getElementById('vheight').value;
  var width = document.getElementById('vwidth').value;
  var count = 0;

  // -2 on width and heigth for the border...
  dwidth = Math.floor(( 800 / width ) -2);
  dheight = Math.floor(( 800 / height ) -2);

  for(i=0;i<width;i++){
    $('#base').append('<div class="row" id="rown' + count + '"></div>');
    for(x=0;x<height;x++){
      $('#rown'+count).append('<div class="pixel" style=" width: '+dwidth+'px; height: '+dheight+'px;"></div>');
    }
    count++
  }

  console.log('Drew grid');
}
