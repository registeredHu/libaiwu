/*
* @Author: name
* @Date:   2018-01-29 10:18:19
* @Last Modified by:   name
* @Last Modified time: 2018-02-07 14:35:49
*/
$("a").each(function() {
    $(this).click(function(){
        $(this).css('text-decoration', 'none');
    })
});
/*
*鼠标放在全部分类上，分类列表显示
*移开显示
 */
$(".header_nav>.left").hover(function(){
    console.log(00);
    $(".allList").css("display","block");
},function(){
    $(".allList").css("display","none");
})
/*
*鼠标放在分类名称上，详细列表显示
*移开显示
 */
$(".allList").hover(function(){
    $(".list_bg").css("display","block")
},function(){
    $(".list_bg").css("display","none")
})
/*
*点击导航变色
 */
$(".header_nav .right li").each(function() {
    $(this).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
});

// 立即购买
$(".shopping_totalr .buy").click(function(){
    var totalr_price=parseInt($(".shopping_totalr p").html().substring(1));
    if(totalr_price!=0){
        $(this).parent().attr('href', 'z_integralmessage.html');
    }
})

$(".chooseSize").click(function(){
        $(this).addClass('chooseSizeClick');
        $(this).siblings().removeClass("chooseSizeClick");
    })
    $(".numCut").click(function(){
        var x=Number($(".goods_number").val());
        if(x<2){
            $(".h7").html("请至少选择一件商品");

        }
        else{
            x--;
            $(".goods_number").val(x);
        };
        console.log(x);
    })
    $(".numAdd").click(function(){
        var x=Number($(".goods_number").val());
        if(x<666){
            x++;
            $(".goods_number").val(x);
        }
        else{$(".h7").html("你选择的商品过多")};
    })
$(".carborder_1 .h1-1").click(function(){
    $(".carborder").css('display', 'none');
})
$(".goods_foot .index_car").click(function(){
    $(".carborder").css('display', 'block');
})

// 点击商品右下角购物车图标，购物车数量加一
$(".addCar").click(function(){
    var totalNum=$(".carborder_1 .goods_number").val();
     $(".total_num").html(totalNum);
     $(".carborder").css('display', 'none');
})

// 商品详情页面点击加入购物车
$(".addTo").click(function(){
    var add_num=$(this).siblings('.count').val();
    $(".total_num").html(add_num);
});

// 搜索
$(".search_but").click(function() {
    var search_word=$(".search_text").val();
    if(search_word=="虾"||search_word=="水果"){
        $(this).parent().attr('href', 'hu_search_result.html');
    }else if(search_word==""){
        $(this).parent().attr('href', 'mao_search_result_null.html');
    }else{
        $(this).parent().attr('href', 'g_404.html');
    }
});

