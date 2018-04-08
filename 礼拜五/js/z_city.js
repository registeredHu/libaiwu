$(".cla_right li").each(function() {
    $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
});

/*礼拜五活动商品*/
var ogoods = new Swiper('.goods',{
});

$("#page").paging({
    pageNo:1,
    totalPage: 10,
    totalSize: 300,
    callback: function(num) {
      ogoods.slideTo(num-1,500,false);
    },
})
var oBanner = new Swiper('.banner',{
    loop:true,
    loopedSlides:3,
    pagination: {
        el: '.banner_pag',
        clickable:true,
      },
       navigation: {
        nextEl: '.banner_next',
        prevEl: '.banner_prev',
      },

});