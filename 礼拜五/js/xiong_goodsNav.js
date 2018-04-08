$(function(){

    $(".h1-1").click(function(){
        $(this).addClass('h1-click');
        $(this).siblings().removeClass('h1-click');
    })
})