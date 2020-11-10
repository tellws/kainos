$(window).on('load scroll resize', function(){
  //스크롤 끝이 section 중앙에 오면 view클래스 추가
  var $scrollTop = $(window).scrollTop();
  var $doH = $(document).height();
  var $winH = $(window).height();
  var $slideH = $('#a-slider').height();
  var $abilityH = $('#ability').height();
  var $nextPH = $('#next-page').height();
  var $fotH = $('footer').height();

  var $noEffectSec = $doH-$winH-$fotH;
  var $nextPEnd = $noEffectSec-$nextPH;
  var $abilityEnd = $nextPEnd-$abilityH;
  var $slideEnd = $abilityEnd-$slideH;

  if($scrollTop >= $abilityEnd){
    $('#ability').addClass('view');
  }else{
    $('#ability').removeClass('view');
  };

  if($scrollTop >= $slideEnd){
    $('#a-slider').addClass('view');
  }else{
    $('#a-slider').removeClass('view');
  };
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 0,
  freeMode: true,
  autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
});