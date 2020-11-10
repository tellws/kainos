$(window).on('load', function(){
    $('#works').addClass('view');
    $('#back-btn-area').addClass('view');
});

$(window).on('scroll load resize', function () {
    var scrollTop = $(this).scrollTop();
    var windowWidth = $(window).width();
   
    if(1480 < windowWidth){
      if(scrollTop >= 1100){
        $('#next-page').addClass('view');
      };
    }else if(1080 < windowWidth){
      if(scrollTop >= 1000){
        $('#next-page').addClass('view');
      };
    }else if(880 < windowWidth){
      if(scrollTop >= 850){
        $('#next-page').addClass('view');
      };
    }else if(640 < windowWidth){
      if(scrollTop >= 600){
        $('#next-page').addClass('view');
      };
    }else if(480 < windowWidth){
      if(scrollTop >= 400){
        $('#next-page').addClass('view');
      };
    }else if(windowWidth <= 480){
      if(scrollTop >= 500){
        $('#next-page').addClass('view');
      };
    };
});