var phonenum = /^1[3|4|5|8][0-9]\d{4,8}$/;
var mima = /^[a-zA-Z][A-Za-z0-9_]{5,19}$/;
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
$('.pemia').blur(function(){
    if(mima.test($(this).val())){
        $(this).css({'background':'url("images/g_shop_suc_19.png") 270px center no-repeat'})
    }else{
        $(this).css({'background':'url("images/phone32.png") 270px center no-repeat'})
    };
})
$('.pemia').focus(function(){
    $(this).css({'background':''});
})
$('.pemiamore').blur(function(){

    if($('.pemia').val() == $(this).val() && $(this).val() !=''){
        $(this).css({'background':'url("images/g_shop_suc_19.png") 270px center no-repeat'})
    }else{
        $(this).css({'background':'url("images/phone32.png") 270px center no-repeat'})
    }
})
$('.pemiamore').focus(function(){
    $(this).css({'background':''});
})
