$(document).ready(function(){
  $('.flap').on('click', function(){
    $(this).toggleClass('flap-open')
    $('.card').toggleClass('show')
    $('.card').removeClass('show-card')
  })
  $('.card').on('click', function(){
    $(this).toggleClass('show-card')
  })
})
