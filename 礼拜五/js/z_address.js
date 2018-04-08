//价格合计函数
function inteTotal(obj){
    var toprice = 0;
    var price = obj.parents('.inteqraim_leggoods').find('.inteqraim_leggoodsnum').html().substring(1) * Number(obj.siblings('u').html());
    obj.parents('.inteqraim_leggoods').find('.im_subtmoney').html('￥'+price);
    obj.parents('.inteqraim_legbox').find('.im_subtmoney').each(function(){
        toprice = Number($(this).html().substring(1)) + toprice
    })
    // console.log(toprice);
    obj.parents('.inteqraim_leggoods').siblings('.inteqraim_summoney').find('.inteqraim_summoneylistprice').html('￥'+toprice);
    var totalmoney = Number(obj.parents('.inteqraim_leggoods').siblings('.inteqraim_summoney').find('.inteqraim_summoneylistprice').html().substring(1))+Number(obj.parents('.inteqraim_leggoods').siblings('.inteqraim_summoney').find('.inteqraim_summoneylistcarriage').html().substring(1));
    obj.parents('.inteqraim_leggoods').siblings('.inteqraim_summoney').find('.inteqraim_summoneylisttotalprice').html('￥'+totalmoney);
    var poiu = 0;
    $('.inteqraim_summoneylisttotalprice').each(function(){
        poiu = Number($(this).html().substring(1))+ Number(poiu);
    })
    $('.add_okb>p').html('￥'+poiu);
}
//数量加减js
$('.imjian').click(function(){
    var p = Number($(this).siblings('u').html());
    p--;
    if(p<=0){
        p=0;
    }
    $(this).siblings('u').html(p);
    var oj = $(this);
    inteTotal(oj);
})
$('.imjia').click(function(){
    var p = Number($(this).siblings('u').html());
    p++;
    $(this).siblings('u').html(p);
    var oj = $(this);
    inteTotal(oj);
})
//页面加载时计算总金额
var intrqetotal = 0;
$('.inteqraim_summoneylisttotalprice').each(function(){
    $(this).parents('.inteqraim_legbox').find('.im_subtmoney').each(function(){
        intrqetotal = Number($(this).html().substring(1))+intrqetotal;
    })
    $(this).siblings('.inteqraim_summoneylistprice').html('￥'+intrqetotal)
    intrqetotal = Number($(this).siblings('.inteqraim_summoneylistcarriage').html().substring(1))+intrqetotal
    $(this).html('￥'+intrqetotal);
    console.log($(this).html());
    intrqetotal = 0;
})
var pos = 0;
    $('.inteqraim_summoneylisttotalprice').each(function(){
        pos = Number($(this).html().substring(1))+ Number(pos);
    })
$('.add_okb>p').html('￥'+pos);
$('.add_tbox>a').click(function(){
    $('.int_timebb').slideToggle('slow');
})