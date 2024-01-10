$(document).ready(function(){

  //보도자료 탭_배너타이틀----------------------------------------

  $(".tab_menu > li").click(function () {
    var idx = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");

    $(".banner_title")
      .eq(idx)
      .addClass("on")
      .siblings(".banner_title")
      .removeClass("on");
  });

//보도자료 탭_타이틀-----------------------------------------------
  $(".tab_menu > li").click(function () {
    var idx = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");

    $(".sec_inner .tab_title")
      .eq(idx)
      .addClass("on")
      .siblings(".tab_title")
      .removeClass("on");
  });

  //보도자료 탭_메뉴----------------------------------------------

    $(".tab_menu > li").click(function () {
      var idx = $(this).index();

      $(this).addClass("on").siblings().removeClass("on");

      $(".sec_inner .tab_con")
        .eq(idx)
        .addClass("on")
        .siblings(".tab_con")
        .removeClass("on");
    });
  
  //홍보자료 탭_메뉴----------------------------------------------

  $(".tap_btn_wrap > li").click(function () {
    var idx = $(this).index();

    $(this).addClass("on").siblings().removeClass("on");

    $(".tab_con .tab_con_4-4")
      .eq(idx)
      .addClass("on")
      .siblings(".tab_con_4-4")
      .removeClass("on");
  });



  const sub_video = new Swiper('.swiper_video', {
      direction: 'vertical',
      // Optional parameters
      // loop: true,
      speed: 700,
      slidesPerView: 1,
      spaceBetween:0,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });


    // ham menu
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
});
