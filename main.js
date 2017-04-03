var p2word = ""

$('.p1btn').on('click', function(evt) {
    evt.preventDefault()
    $('.p1form').css('display', 'none')
    p2word = $('.p1input').val()
    dashDisplay()
})

function dashDisplay() {
    for (var i = 0; i < p2word.length; i += 1) {
        $('.dashes').append('<span> _ </span>')
    }
}
$('.letterInput').on('keyup change', letterCheck)

function letterCheck() {
  if (p2word.includes($('.letterInput').val())) {
    console.log('found match')
    for (var i = 0; i < p2word.length; i += 1) {
        if(p2word[i] == $('.letterInput').val()) {
          // $('.dashes').find('span').eq(i).text($('.letterInput').val())
          $('.dashes span').eq(i).text($('.letterInput').val())
        }
    }
  } else {
    $('.missed').append('<span>' + $('.letterInput').val() + '</span>')
  }
  $('.letterInput').val('')
}
