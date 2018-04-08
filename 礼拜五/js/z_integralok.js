//收货信息页面js
$('.integralok_waist input[type="radio"]').click(function(){
    $(this).parents('li').addClass('integralok_first').siblings().removeClass();
});
$('.integralok_waist i').click(function(){
    $(this).parent().siblings('span').find('.integralok_waistmoren').html('默认地址');
    $(this).html('');
    $(this).parents('li').siblings().find('i').html('设置为默认地址');
    $(this).parents('li').siblings().find('.integralok_waistmoren').html('');
})
//金额小计函数
function subtotal(obj){
    var p = Number(obj.siblings('u').html())*Number(obj.parents('.integralok_leggoods').find('.subt').html().replace(/积分/,''));
    obj.parents('.integralok_leggoods').find('.subt').html(p+'积分');
    var gather = 0;
    $('.subt').each(function(){
        gather = Number($(this).html().replace(/积分/,''))+gather;
    });
    $('.integralok_totalbox>p').html(gather+'积分');
    console.log(gather);
}
//商品数量加减
$('.ijian').click(function(){
    var p = $(this).siblings('u').html();
    p--;
    if(p<=0){
        p=0;
    }
    $(this).siblings('u').html(p);
    var oj = $(this);
    subtotal(oj);
})
$('.ijia').click(function(){
    var p = $(this).siblings('u').html();
    p++;
    $(this).siblings('u').html(p);
    var oj = $(this);
    subtotal(oj);
})
//页面加载计算总价
var submoney = 0;
$('.subt').each(function(){
    submoney = Number($(this).html().replace(/积分/,''))+submoney
})
$('.integralok_totalbox>p').html(submoney+'积分');