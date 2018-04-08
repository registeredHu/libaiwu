/*
* @Author: name
* @Date:   2018-02-02 14:49:46
* @Last Modified by:   name
* @Last Modified time: 2018-02-07 14:26:20
*/
//积分页面
//积分页面图片轮播
$(function(){

    //积分页面结束
    ////商品详情页面
    //商品详情图片轮播
    var details =new Swiper('.productSwiper',{
        slidesPerView: 4,
        spaceBetween: 6,
        centeredSlides: true,
        loopFillGroupWithBlank: true,
        slideToClickedSlide: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })
    //上面大图
    var bigImg = new Swiper('.bigImg', {
         on: {
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
     details.controller.control = bigImg;
    bigImg.controller.control = details;
    //图片放大镜
    $('.details .bigImg .swiper-slide').hover(function() {
        $('.details .bigImg .swiper-slide .mark').css('display', 'block');
        $('.details dl dd .enlargeImag').css('display', 'block');
    }, function() {
        $('.details .bigImg .swiper-slide .mark').css('display', 'none');
        $('.details dl dd .enlargeImag').css('display', 'none');
    });
     $('.details .bigImg .swiper-slide').mousemove(function(event) {
        var l = event.pageX- $('.details').position().left - $('.details .bigImg .swiper-slide').position().left - $(".details .bigImg .swiper-slide .mark").width()*2;
        var t = event.pageY - $('.details').position().top - $('.details .bigImg .swiper-slide').position().top -$(".details .bigImg .swiper-slide .mark").height()/2;
        if(l<0){
            l = 0;
        }else if(l > ($('.details .bigImg .swiper-slide').width() - $(".details .bigImg .swiper-slide .mark").width())){
            l = $('.details .bigImg .swiper-slide').width() -$(".details .bigImg .swiper-slide .mark").width();
        }
        if(t<0){
            t = 0;
        }else if(t > ($('.details .bigImg .swiper-slide').height() - $(".details .bigImg .swiper-slide .mark").height())){
            t = $('.details .bigImg .swiper-slide').height() - $(".details .bigImg .swiper-slide .mark").height();
        }
        $(".details .bigImg .swiper-slide .mark").css('left', l);
        $(".details .bigImg .swiper-slide .mark").css('top', t);
        var bigImgL = l*$(' .enlargeImag').width()/$(".details .bigImg .swiper-slide .mark").width();
        var bigImgT = t*$('.enlargeImag').height()/$(".details .bigImg .swiper-slide .mark").height();
        $('.enlargeImag img').css('top', -bigImgT);
        $('.enlargeImag img').css('left', -bigImgL);
     });

    //点击规格
    $('.details dl dd .spec button').click(function() {
        $(this).css({
            'border':'1px solid #4b943d',
            'background':'#f4fff2',
        }).siblings().css({
            'border':'1px solid #d4d4d4',
            'background':'0',
        }).parent().find('p').css('border', '0');;
    });
    //点击加数量
    var num=0;
    function add(){
        $('.add').click(function() {
            num++;
            price();
            $('.count').val(num);
        });
    }
    add();
    //点击减数量
    function reduce(){
        $('.reduce').click(function() {
            num--;
            $('.count').val(num);
            if($('.count').val()<=0){
                $('.count').val(0)
                num=0;
            }
        price();

        });
    }
    reduce();
    //价格
    function price(){
        $('.details dl dd .spec button').click(function(){
            var price = '￥'+(20*$(this).index()*num).toFixed(1);
            $(this).parent().prev('h4').find('span').find('i').html(price);
        })
    }
    //评论
    var commentSwiper = new Swiper('.commentSwiper', {
        slidesPerView: 4,
        spaceBetween: 6,
    });
    //积分商品详情页面结束
    //倒计时
    var timer =setInterval(function(){
        // function show_time(){
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

    }, 1000)

});

