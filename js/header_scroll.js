$(function(){
    $(window).scroll(function(){
        if ($(document).scrollTop() >= 300) {
            $('#header').addClass('on')
        } else {
           $('#header').removeClass('on')
        }
  })
})