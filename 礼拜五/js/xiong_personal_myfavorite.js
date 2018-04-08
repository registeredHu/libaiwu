
$(function(){

    $(".collect_btn").click(function(){
        $(this).addClass("btnbgcolor_change");
        $(this).html("已失效");
        $(this).siblings(".bgcolor").addClass("bgcolor_change");
    })
})
