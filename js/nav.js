$(function(){
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


    $('#nav_btn').click(function(){
        $('.nav_pop').animate({right:0},500); //   1ms = 1/1000s
    })
    $('.close_btn').click(function(){
        $('.nav_pop').animate({right:'-100%'},500); 
    })
    $('#btn1 > li.link_on .sub').show();
    $('#btn1 > li').each(function(){
        $(this).click(function(){
            var sub = $(this).find('.sub')
            $('#btn1 > li ').removeClass('link_on');
            $(this).addClass('link_on');
            $('.sub').slideUp();
            $(sub).slideDown();
        })
    })

    
    $('.partner_info').click(function(){
        var img = $(this).find('img');
        var img_src = $(img).attr('data-src');
        var img_width = $(img).attr('data-width');
        var img_alt = $(img).attr('alt');

         $('#modal').fadeIn();
         $('#modal .img img').attr('src',img_src);
          //img 태그 새로 생성   $('#modal .img').append('<img src="'.img_src.'" >')
          $('.txt').text(img_alt);
          $('#modal .img img').width(img_width);
    })
    $('#btn-close, #modal').click(function(){
        $('#modal').fadeOut();
    })
  
})