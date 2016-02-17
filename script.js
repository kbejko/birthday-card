$(document).ready(function(){
  $('.flap').on('click', function(){
    $(this).toggleClass('flap-open')
    $('.card').toggleClass('show')
    $('.card').removeClass('show-card')
    $('.balloon').clone().appendTo('envelope')
  })
  $('.card').on('click', function(){
    $(this).toggleClass('show-card')
    $('.balloon').addClass('balloon-show')
  })
  $('.balloon').each(function(){
    $(this).on('click', function(){
      $(this).addClass('pop')
    })
  })
})
