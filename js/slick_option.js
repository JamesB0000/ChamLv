$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        arrows:false,
        autoplay:true,
        autoplayspeed:5000,
        dots:true
      });
})