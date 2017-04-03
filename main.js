var p2word = ""

$('.p1btn').on('click',function(evt){
  evt.preventDefault()
  $('.p1form').css('display', 'none')
  p2word = $('.p1input').val()
  dashDisplay()
})

dashDisplay = function(){
  for(var i = 0; i < p2word.length; i += 1){
    $('.dashes').append('<span> _ </span>')
  }
}
