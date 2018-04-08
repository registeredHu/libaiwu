/*
* @Author: name
* @Date:   2018-02-07 16:00:51
* @Last Modified by:   name
* @Last Modified time: 2018-02-07 17:56:24
*/
$(function(){
    $(".g_box li a").hover(function(){
        $(this).css("color","#498e3d").siblings().css("color","#999999");
    },function(){
        $(this).css("color","#999999");
    })

    $(".g_peo").hover(function(){
        $(this).css("color","#498e3d").siblings().css("color","#999999");
    },function(){
        $(this).css("color","#999999");
    })

    $(".g_imp input").click(function(){
        $(this).css("color","#498e3d").siblings().css("color","#999999");
    });
     $(".g_imp input").mouseout(function(){
         $(this).css("color","#999999");
     });
})