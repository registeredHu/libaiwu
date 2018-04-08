/*
* @Author: name
* @Date:   2018-02-03 20:39:58
* @Last Modified by:   name
* @Last Modified time: 2018-02-05 15:44:03
*/

/*
 *商家图片轮播  上半部
 */
var oInfor = new Swiper('.infor',{
  navigation: {
    nextEl: '.infor_next',
    prevEl: '.infor_prev',
  },
});

/*
 *商家图片轮播  下半部
 */
 var oSmall = new Swiper('.small', {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
  slideToClickedSlide: true,//点击这个slide时，这个slide会居中
  navigation: {
    nextEl: '.small_next',
    prevEl: '.small_prev',
  },
});

 // 让上下两个swiper相互控制，同时滑动
oInfor.controller.control = oSmall;
oSmall.controller.control = oInfor;

/*
*点击导航变色
 */
$(".cla_right li").each(function() {
    $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
});

/*礼拜五活动商品*/
var oFiriday = new Swiper('.firiday',{
    // on: {
    //   slideChangeTransitionEnd: function(){
    //     var number=oFiriday.activeIndex;
    //     //切换结束时，告诉我现在是第几个slide
    //     $("#page>a").eq(number).addClass("current").siblings().removeClass('current');
    //   },
    // },
});

$("#page").paging({
    pageNo:1,
    totalPage: 10,
    totalSize: 300,
    callback: function(num) {
      oFiriday.slideTo(num-1,500,false);
    },
})
