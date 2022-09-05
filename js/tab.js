$(function(){
    $('.tabSet').each(function(){
    var anchor = $(this).find('.tabs a');
    var this_panel = $(this).find('.panel');

    var anchor_on = $(this).find('.tabs a.on'); //초기
    var href_on = anchor_on.attr('href');
    
    $(href_on).show();


    anchor.each(function(){ //생략시 $(this).click의 이름을 수정
        //var href =  anchor.attr('href');

        $(this).click(function(){
            var href =  $(this).attr('href');
            anchor.removeClass('on');
            $(this).addClass('on');
            this_panel.hide();
            $(href).show();
        })
    })
    })
    // $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.top').fadeIn();
            } else {
                $('.top').fadeOut();
            }
        })
        $('.top').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        })
    // })




}) //end