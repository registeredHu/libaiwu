/*
* @Author: name
* @Date:   2018-02-07 09:33:52
* @Last Modified by:   name
* @Last Modified time: 2018-02-07 09:35:38
*/

var oFiriday = new Swiper('.firiday',{
    loop:true,
    loopedSlides:4,
    pagination: {
        el: '.firiday_pag',
        clickable:true,
    },
});
$("#page").paging({
    pageNo:1,
    totalPage: 10,
    totalSize: 300,
    callback: function(num) {
      oFiriday.slideTo(num-1,500,false);
    },
})