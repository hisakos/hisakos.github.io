
if(!navigator.userAgent.match(/(iPhone|iPad|Android)/)){
 $(function() {
    $.scrollify({
      section : "section",
    });
  });
}

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