$(document).ready(function(){


  $(window).scroll(function(){
    if($(this).scrollTop() > 300){
      $('.top_btn').css({
        opacity : 1,
      })
    }else{
      $('.top_btn').css({
        opacity : 0,
      })
    }
  })

  $('.top_btn').click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 200)
  })


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




  






}); //end


