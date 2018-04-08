var phonenum = /^1[3|4|5|8][0-9]\d{4,8}$/;
$('.pephonenum').blur(function(){
    if(phonenum.test($(this).val())){
        $(this).css({'background':'url("images/g_shop_suc_19.png") 270px center no-repeat'})
    }else{
        $(this).css({'background':'url("images/phone32.png") 270px center no-repeat'})
    };
})
$('.pephonenum').focus(function(){
    $(this).css({'background':''});
})