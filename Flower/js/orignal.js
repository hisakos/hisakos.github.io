//topへ戻るicon用JS

$(function () {
    var pageTop = $("#page-top");
    pageTop.hide();
    pageTop.click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            pageTop.fadeIn();
        } else {
            pageTop.fadeOut();
        }
    });
});

//文章欄をふわっとだすjs

//$('#animation1').css('visibility', 'hidden');
$(window).scroll(function () {
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('#animation1').each(function () {
        var targetPosition = $(this).offset().top;
        if (topWindow > targetPosition - windowHeight + 50) {
            $(this).addClass("fadeInDown");
        }
    });
});

//$('#animation2').css('visibility', 'hidden');
$(window).scroll(function () {
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('#animation2').each(function () {
        var targetPosition = $(this).offset().top;
        if (topWindow > targetPosition - windowHeight + 50) {
            $(this).addClass("fadeInDown");
        }
    });
});

//$('#animation3').css('visibility', 'hidden');
$(window).scroll(function () {
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('#animation3').each(function () {
        var targetPosition = $(this).offset().top;
        if (topWindow > targetPosition - windowHeight + 50) {
            $(this).addClass("fadeIn");
        }
    });
});


//$('#animation4').css('visibility', 'hidden');
$(window).scroll(function () {
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('#animation4').each(function () {
        var targetPosition = $(this).offset().top;
        if (topWindow > targetPosition - windowHeight + 200) {
            $(this).addClass("fadeInDown");
        }
    });
});

//$('#animation5').css('visibility', 'hidden');
$(window).scroll(function () {
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('#animation5').each(function () {
        var targetPosition = $(this).offset().top;
        if (topWindow > targetPosition - windowHeight + 200) {
            $(this).addClass("fadeInDown");
        }
    });
});

//$('#animation6').css('visibility', 'hidden');
$(window).scroll(function () {
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('#animation6').each(function () {
        var targetPosition = $(this).offset().top;
        if (topWindow > targetPosition - windowHeight + 200) {
            $(this).addClass("fadeIn");
        }
    });
});

//$('#animation7').css('visibility', 'hidden');
$(window).scroll(function () {
    var windowHeight = $(window).height(),
        topWindow = $(window).scrollTop();
    $('#animation7').each(function () {
        var targetPosition = $(this).offset().top;
        if (topWindow > targetPosition - windowHeight + 200) {
            $(this).addClass("fadeInDown");
        }
    });
});

//<script type="text/javascript">
   $(function(){
      $("#mainbar").hover(function(){
         $("ul",this).show();
      },
      function(){
         $("ul",this).hide();
      });
   });
//</script>
  
//  <script type="text/javascript">
$(document).ready(function() {
  $("#mainbar").naver({
    labels: {
      closed: "MENU",
      open: "CLOSE"
    },
    maxWidth: "780px"
  }  );
});
//  </script>
