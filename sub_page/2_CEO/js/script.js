$(document).ready(function(){

  $('.menu').click(function(){
    $('.menu_container').css({
      top : 0,
    })
  })

  $('.ham_menu').click(function(){
    $('.menu_container').css({
      top : '-100vh',
    })
  })

})//end