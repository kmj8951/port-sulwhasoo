$(function(){

// 메인 비주얼 영역
  var mainSlide = new Swiper(".main-slide", {
    loop:true,
    autoplay:{
      delay:1500,
      disableOnInteraction:false
  },
    effect:'fade',
      pagination: {
           el: ".swiper-pagination",
           type: "progressbar",
      },
      navigation:{
        nextEl:".next",
        prevEl:".prev" 
     }
 });

//  메인 비주얼 (모바일) 영역
 var mobileSlide = new Swiper(".main-slide_m", {
  loop:true,
  autoplay:{
    delay:1500,
    disableOnInteraction:false
},
  effect:'fade',
    pagination: {
         el: ".swiper-pagination",
         type: "progressbar",
    }
  });


 
    $('.sc-visual .btn-autoplay').click(function(){
      if($(this).hasClass('on')) {
        mainSlide.autoplay.start()
      } else {
        mainSlide.autoplay.stop()
      }
      $(this).toggleClass('on');
    })







    // recommend-slide 영역
    var swiper = new Swiper(".recommend-slide", {
      loop:true,
      autoplay:{
        delay:1500,
        disableOnInteraction:false
    },
        slidesPerView:3,
        spaceBetween:10,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
     },
        navigation:{
           nextEl:".next",
           prevEl:".prev" 
        }
    });

    $('.sc-recommend .btn-autoplay').click(function(){
      if($(this).hasClass('on')) {
        mainSlide.autoplay.start()
      } else {
        mainSlide.autoplay.stop()
      }
      $(this).toggleClass('on');
    })
    
    // recommend-slide (모바일) 영역
    var swiper = new Swiper(".recommend-slide_m", {
      loop:true,
      autoplay:{
        delay:1500,
        disableOnInteraction:false
    },
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
     },
        navigation:{
           nextEl:".next",
           prevEl:".prev" 
        }
    });



    // sc-with 영역
    var swiper = new Swiper(".sc-with .swiper", {
        slidesPerView:'auto',
        spaceBetween:10,
        navigation:{
           nextEl:".next",
           prevEl:".prev" 
        }
    });

    var withSlide = new Swiper(".sc-with .swiper", {
      slidesPerView:'auto',
      spaceBetween:18,
      navigation:{
         nextEl:".next",
         prevEl:".prev" 
      }
  });

  // 퀵 버튼 영역
    $('.fix-top .btn-top').click(function(){
     window.scrollTo({top:0,behavior:"smooth"})
    })


    $('.gnb .nav-item').hover(function(){
        child=$(this).find('.sub-list'); //내가 마우스올린거의 자식 sub-list;
        childHieght=child.outerHeight();
          if(child){
              $('.header .sub-list').removeClass('on') //모든서브닫히고
              child.addClass('on') //내가 올린서브 열리고
              $('.header .bg').css('height',childHieght) //뒤에 배경 높이 따라오게
          }
      },function(){
        $('.header .sub-list').removeClass('on')
        $('.header .bg').css('height',0)
      })


    // 헤더 영역
    $('.gnb .nav-item').hover(function(){
      $('.header .nav-list').addClass('on') //모든서브닫히고
    },function(){
      $('.header .nav-list').removeClass('on')
    })


    // 푸터 토클 버튼 영역
    $('.toggle-button').click(function(e){
      e.preventDefault();

      $(this).toggleClass('on')
      $(this).siblings().slideToggle();

    })

}) //지우지마세요


