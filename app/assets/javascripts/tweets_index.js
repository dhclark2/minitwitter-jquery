$(document).ready(function() {
  $('.full-link').hide()
  $('.toggle-images').click(function(event) {
    $('.truncated-link').toggle().siblings('.full-link').toggle()
  })
})
