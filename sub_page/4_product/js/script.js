$(document).ready(function(){

      // 탭_메뉴-------------------------------------------------------

      $(".tab_menu > li").click(function(){
        var idx = $(this).index();
  
        $(this).addClass("on").siblings().removeClass("on");
  
        $(".sec_inner .tab_con")
          .eq(idx)
          .addClass("on")
          .siblings(".tab_con")
          .removeClass("on");
      });

        // 탭_2_메뉴------------------------------------------

            $(".tab_menu_2 > li").click(function(){
              var idx = $(this).index();
        
              $(this).addClass("on").siblings().removeClass("on");
        
              $(".tab_con_2")
                .eq(idx)
                .addClass("on")
                .siblings(".tab_con_2")
                .removeClass("on");
            });

      // 모바일 메뉴 프리모드------------------------------------------

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        spaceBetween: 17,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
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