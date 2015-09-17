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

//ミャー助時計

function clock(){
 var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" +sec;
    
var timeElement = document.getElementById("time");
    timeElement.innerHTML = hour+":"+min+":"+sec;
    
var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var weekArray = ["日","月","火","水","木","金","土"];
    var week = weekArray[now.getDay()];
    var dateElement = document.getElementById("date");
    dateElement.innerHTML = year+"/"+month+"/"+day+" "+"("+week+")";
    setTimeout("clock()",1000);
}



