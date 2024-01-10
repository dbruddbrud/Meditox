$(document).ready(function(){

    // $('.ul_wrap>ul').hover(function(){
    //     $(this).animate({
    //         top: '-10px'
    //     })
    // },function(){
    //     $(this).animate({
    //         top: 0
    //     })
    // })

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

}) //end