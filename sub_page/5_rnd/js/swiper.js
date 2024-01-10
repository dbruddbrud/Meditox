const swiper = new Swiper('.swiper', {

    spaceBetween: 40,

    slidesPerView: 1,

    // Optional parameters
    direction: 'horizontal',
    loop: false,
  
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

    // breakpoints:{
        
    //   320: {
    //       slidesPerView: 1,
    //   },
      
    // }

  });