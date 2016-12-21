$(document).ready(function() {
  $('.full-link').hide()
  $('span.pull-right.btn.btn-primary.toggle-images').click(function(event) {
    $('.truncated-link').toggle().siblings('.full-link').toggle()
  })

  $('table .fa').hide()
  $('span.pull-left.btn.btn-primary.toggle-images').click(function(event) {
    $('table .fa').toggle()
  })
})
