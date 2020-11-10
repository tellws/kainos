$(window).on('load scroll resize', function(){
  //스크롤 끝이 section 중앙에 오면 view클래스 추가
  var $scrollTop = $(window).scrollTop();
  var $doH = $(document).height();
  var $winH = $(window).height();
  var $workLH = $('#works-list').height();
  var $gridLH = $('main #works-list .grid').height();
  var $nextPH = $('#next-page').height();
  var $fotH = $('footer').height();

  var $noEffectSec = $doH-$winH-$fotH;
  var $nextPEnd = $noEffectSec-$nextPH;
  var $workLEnd = $nextPEnd-$workLH;
  var $workLEnd2 = $workLEnd+$gridLH;
  var $workLEnd3 = $workLEnd2+$gridLH;
  console.log($workLEnd3+200);
  console.log($scrollTop);

  var $winW = $(window).width(); 
  if($winW > 1480){
    if($scrollTop >= $workLEnd+80){
      $('main #works-list .grid:first-child, main #works-list .grid:nth-child(2)').addClass('view');
    }else{
      $('main #works-list .grid:first-child, main #works-list .grid:nth-child(2)').removeClass('view');
    };

    if($scrollTop >= $workLEnd2+140){
      $('main #works-list .grid:nth-child(3), main #works-list .grid:nth-child(4)').addClass('view');
    }else{
      $('main #works-list .grid:nth-child(3), main #works-list .grid:nth-child(4)').removeClass('view');
    };

    if($scrollTop >= $workLEnd3+200){
      $('main #works-list .grid:nth-child(5), main #works-list .grid:nth-child(6)').addClass('view');
    }else{
      $('main #works-list .grid:nth-child(5), main #works-list .grid:nth-child(6)').removeClass('view');
    };
  }else if($winW >= 1080){
    if($scrollTop >= $workLEnd+60){
      $('main #works-list .grid:first-child, main #works-list .grid:nth-child(2)').addClass('view');
    }else{
      $('main #works-list .grid:first-child, main #works-list .grid:nth-child(2)').removeClass('view');
    };

    if($scrollTop >= $workLEnd2+100){
      $('main #works-list .grid:nth-child(3), main #works-list .grid:nth-child(4)').addClass('view');
    }else{
      $('main #works-list .grid:nth-child(3), main #works-list .grid:nth-child(4)').removeClass('view');
    };

    if($scrollTop >= $workLEnd3+140){
      $('main #works-list .grid:nth-child(5), main #works-list .grid:nth-child(6)').addClass('view');
    }else{
      $('main #works-list .grid:nth-child(5), main #works-list .grid:nth-child(6)').removeClass('view');
    };
  }else if($winW > 880){
    var $workLEndFirst = $workLEnd+60;
    var $workLEndSecond = $workLEndFirst+$gridLH+40;
    var $workLEndThird = $workLEndSecond+$gridLH+40;
    var $workLEndFourth = $workLEndThird+$gridLH+40;
    var $workLEndFifth = $workLEndFourth+$gridLH+40;
    var $workLEndSixth = $workLEndFifth+$gridLH+40;
    if($scrollTop >= $workLEndFirst){
      $('main #works-list .grid:first-child').addClass('view');
    }else{
      $('main #works-list .grid:first-child').removeClass('view');
    };
    if($scrollTop >= $workLEndSecond){
      $('main #works-list .grid:nth-child(2)').addClass('view');
    }else{
      $('main #works-list .grid:nth-child(2)').removeClass('view');
    };
    if($scrollTop >= $workLEndThird){
      $('main #works-list .grid:nth-child(3)').addClass('view');
    }else{
      $('main #works-list .grid:nth-child(3)').removeClass('view');
    };
    if($scrollTop >= $workLEndFourth){
      $('main #works-list .grid:nth-child(4)').addClass('view');
    }else{
      $('main #works-list .grid:nth-child(4)').removeClass('view');
    };
    if($scrollTop >= $workLEndFifth){
      $('main #works-list .grid:nth-child(5)').addClass('view');
    }else{
      $('main #works-list .grid:nth-child(5)').removeClass('view');
    };
    if($scrollTop >= $workLEndSixth){
      $('main #works-list .grid:nth-child(6)').addClass('view');
    }else{
      $('main #works-list .grid:nth-child(6)').removeClass('view');
    };
  }else if($winW <= 880){
    var $workLEndFirst = $workLEnd+40;
    var $workLEndSecond = $workLEndFirst+$gridLH+30;
    var $workLEndThird = $workLEndSecond+$gridLH+30;
    var $workLEndFourth = $workLEndThird+$gridLH+30;
    var $workLEndFifth = $workLEndFourth+$gridLH+30;
    var $workLEndSixth = $workLEndFifth+$gridLH+30;
    if($scrollTop >= $workLEndFirst){
      $('main #works-list .grid:first-child').addClass('view');
    }else{
      $('main #works-list .grid:first-child').removeClass('view');
    };
    if($scrollTop >= $workLEndSecond){
      $('main #works-list .grid:nth-child(2)').addClass('view');
    }else{
      $('main #works-list .grid:nth-child(2)').removeClass('view');
    };
    if($scrollTop >= $workLEndThird){
      $('main #works-list .grid:nth-child(3)').addClass('view');
    }else{
      $('main #works-list .grid:nth-child(3)').removeClass('view');
    };
    if($scrollTop >= $workLEndFourth){
      $('main #works-list .grid:nth-child(4)').addClass('view');
    }else{
      $('main #works-list .grid:nth-child(4)').removeClass('view');
    };
    if($scrollTop >= $workLEndFifth){
      $('main #works-list .grid:nth-child(5)').addClass('view');
    }else{
      $('main #works-list .grid:nth-child(5)').removeClass('view');
    };
    if($scrollTop >= $workLEndSixth){
      $('main #works-list .grid:nth-child(6)').addClass('view');
    }else{
      $('main #works-list .grid:nth-child(6)').removeClass('view');
    };
  };
});

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    }
});