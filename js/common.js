//네비, 사이드 네비에 선택(.active)된 링크 막기
$('header nav .gnb li.active a, header .side-nav .side-nav-list li.active a').on('click', function(e){
  e.preventDefault();
});

//선택되지 않은 li클릭 시 body에 있던 open클래스 삭제(애니메이션 효과를 위해)
$('header .side-nav .side-nav-list li').not('.active').on('click', function(){
  $('body').removeClass('open');
});

//사이드 네비 링크 클릭 시 500ms후에 페이지 이동
function createTimedLink(element, callback, timeout){
   setTimeout( function(){callback(element);}, timeout);
   return false;
};
function linkTime(element) { 
   window.location = element.href;
};

//로드 후 클래스 추가
$(window).on('load', function(){
	setTimeout(function(){
		$('.wrap').addClass('load');
    $('#title').addClass('view');
	},0);

  //네비 버튼 클릭 시 body에 오픈 클래스 토글(body에 스크롤 제거 및 css 수정)
	$('.nav-btn button').on('click', function(){
		$('body').toggleClass('open');
	});
  $('header .overlay').on('click', function(){
    $('body').removeClass('open');
  });
});

//스크롤 up, down
$(window).on('load scroll', function () {
  if($(window).scrollTop() + $(window).height() == $(document).height()){
    $('.scroll-down-btn').addClass('off');
    $('.scroll-up-btn').addClass('on');
  }else if($(window).scrollTop() == 0){
    $('.scroll-down-btn').removeClass('off');
    $('.scroll-up-btn').removeClass('on');
  }
});

$(window).on('load scroll resize', function(){
  var $scrollTop = $(window).scrollTop();
  var $doH = $(document).height();
  var $winH = $(window).height();
  var $nextPH = $('#next-page').height();
  var $headerH = $('header').height();
  var $fotH = $('footer').height();

  var $noEffectSec = $doH-$winH-$fotH;
  var $nextPEnd = $noEffectSec-$nextPH;

  //next-page 스크롤 이벤트
  if($scrollTop >= $nextPEnd){
    $('#next-page').addClass('view');
  }else{
    $('#next-page').removeClass('view');
  };

  //header 스크롤 시 디자인 변경을 위한 클래스 추가
  if($scrollTop >= $headerH){
    $('header').addClass('slim');
  }else{
    $('header').removeClass('slim');
  };
});