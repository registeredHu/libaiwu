/*
* @Author: name
* @Date:   2018-02-05 16:50:42
* @Last Modified by:   name
* @Last Modified time: 2018-02-06 20:38:43
*/

/*
*点击导航变色
 */
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
