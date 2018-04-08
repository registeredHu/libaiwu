/*banner
* 功能:首页图片轮播
* @param int pic 图片序列
* @param string name 图片名
* @return string pic
* @author 胡艳霞
*/
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
/*
*倒计时
 */
function show_time(){
    // 获取当前系统时间(秒)
    var now_time=parseInt(new Date().getTime()/1000);
    // 获取目标时间(秒)
    var end_time=parseInt(new Date("2018/3/23 00:00:00").getTime()/1000);
    // 倒计时差
    var differ_time=end_time-now_time;
    // 天
    var day=Math.floor(differ_time/86400);
    differ_time-=day*86400;
    // 小时
    var hour=Math.floor(differ_time/3600);
    differ_time-=hour*3600;
    // 分
    var minute=Math.floor(differ_time/60);
    differ_time-=minute*60;
    // 秒
    var second=differ_time;

    // 如果时分秒为单位数 前面加上零
    if(hour<10){
        hour="0"+hour;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(second<10){
        second="0"+second;
    }
    $(".day_time").html(day+"天");
    $(".hour_time").html(hour);
    $(".minute_time").html(minute);
    $(".second_time").html(second);

    // 设置定时器
    setTimeout("show_time()",1000);
}
show_time();

/*礼拜五活动商品*/
var oFiriday = new Swiper('.firiday',{
    loop:true,
    loopedSlides:4,
    pagination: {
        el: '.firiday_pag',
        clickable:true,
    },
});

