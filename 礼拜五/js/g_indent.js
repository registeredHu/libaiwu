/*
* @Author: name
* @Date:   2018-02-03 17:59:03
* @Last Modified by:   name
* @Last Modified time: 2018-02-07 15:42:37
*/
$(function(){
    $(".g_pay input").click(function(){
        var a = $(this).val();
        if("1"==a){
            $(this).prop("checked",false)
            $(this).val("0");
        }
        else{
            $(this).val("1");
        }
    })

    $(".g_indent a").hover(function(){
        $(this).css("color","#f08200").siblings().css("color","#959595");
        },function(){
        $(".g_indent a").css("color","#959595");
        }
    )
})