//全选按钮
$('.all_check').click(function(){
    console.log($(this).is(":checked"))
    if($(this).is(":checked")){
        $(this).parents('.shopping_store').find("input[type='checkbox']").prop('checked',true);
    }else{
        $(this).parents('.shopping_store').find("input[type='checkbox']").prop('checked',false);
    }
    var p = $(this)
    collect(p);
})
//商品取消按钮
var flg;
function rebel(obj){
    obj.parents('.shopping_store').find('.checklist').each(function(){
        if($(this).is(':checked')){
            flg = true;
        }else{
            flg = false;
            return flg;
        }
    })
    console.log(flg)
    if(flg == false){
        obj.parents('.shopping_store').find('.all_check').prop('checked',false);
    }else{
        obj.parents('.shopping_store').find('.all_check').prop('checked',true);
    }
}
$('.checklist').click(function(){
    var p = $(this);
    rebel(p);
    var p = $(this)
    collect(p);
})
//产品数量加减
function judge(obj){
    if(obj.parent().find('u').html() <=0){
        obj.parent().find('u').html('0');
    }
    var allmoney = obj.parent().find('u').html() * obj.parent().siblings('.shopping_listprice').find('p').html();
    obj.parent().siblings('.shopping_listmoney').find('p').html(allmoney);
}
//店铺价格汇总
function collect(obj){
    var collprice = 0;
    obj.parents('.shopping_store').find('.checklist').each(function(){
        if($(this).is(':checked') == true){
            collprice = Number($(this).parents('.shopping_goods').find('.shopping_listmoney>p').html())+Number(collprice);

        }
        console.log($(this).is(':checked'));
    })
    obj.parents('.shopping_store').find('.shopping_summoneylist>p').html('￥'+collprice);
    var sumstmoney = 0;
    obj.parents('.shopping_storebox').find('.shopping_summoneylist>p').each(function(){
        sumstmoney = Number($(this).html().substring(1)) + Number(sumstmoney)
    });
    obj.parents('.shopping_storebox').find('.shopping_totalr>p').html('￥'+sumstmoney);
}
$('.sjian').click(function(){
    var num = $(this).parent().find('u').html();
    num--;
    $(this).parent().find('u').html(num);
    var p = $(this);
    judge(p);
    collect(p);
})
$('.sjia').click(function(){
    var num = $(this).parent().find('u').html();
    num++;
    $(this).parent().find('u').html(num);
    var p = $(this);
    judge(p);
    collect(p);
})
//删除按钮
$('.shopping_listhandle>span').click(function(){
    var p = $(this).parents('.shopping_storebox').find('.all_check');
    console.log($(this).parents('.shopping_store').find('.shopping_goods').length);
    if($(this).parents('.shopping_store').find('.shopping_goods').length == 1){
        $(this).parents('.shopping_store').remove();
    }else{
        $(this).parents('.shopping_goods').remove();
    }
    if($('.shopping_storebox').children().is('.shopping_store') == false){
        $(location).prop('href', 'g_sky.html');
    }
    console.log($('.shopping_storebox').children().is('.shopping_store'))
    collect(p);
})
//全选
$('.shopping_totalall').click(function(){
    $('.shopping_storebox input').each(function(){
        $(this).prop('checked',true);
        var p = $(this)
        collect(p);
        // console.log($('.shopping_storebox>input'));
    })
})
//批量删除
$('.shopping_totaldelete').click(function(){
    $('.shopping_storebox').remove();
})