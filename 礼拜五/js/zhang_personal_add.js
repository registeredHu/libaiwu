
$(function(){
    // 获取input框的值
    var g_name = $(".g_boxr div:eq(0) .g_name").val();
    var i = 0;
    var flag = false;
    // 焦点事件触发正则判断
    // 正则设置为1-20个英文和1到10个汉字
    $(".g_boxr div:eq(0) .g_name").blur(function(){
        if($(this).val()== ''){
            $(this).nextAll("h6").css("display","block");
            $(this).next("img").css("display","none");
        }

        if(/^[a-zA-Z ]{1,20}$/.test($(".g_name").val()) || /^[\u4e00-\u9fa5]{1,10}$/.test($(".g_name").val())){
        $(this).nextAll("h6").css("display","none");
        $(this).next("img").css("display","block");
        i++;
        if(i==5){
            flag = true
        }else{
            flag = false
        }
        console.log(flag);
        console.log(i);
    }
    else{
        $(this).nextAll("h6").css("display","block");
        $(this).next("img").css("display","none");
    }
    })

    $(".g_boxr div:eq(0) .g_name").focus(function(){
        if($(this).val()== ''){
            $(this).nextAll("h6").css("display","block");
            $(this).next("img").css("display","none");
        }
        if(/^[a-zA-Z ]{1,20}$/.test($(this).val()) || /^[\u4e00-\u9fa5]{1,10}$/.test($(this).val())){
            $(this).nextAll("h6").css("display","none");
            $(this).next("img").css("display","block");
            i--;
             if(i==5){
            flag = true
        }else{
            flag = false
        }
        }
        else{
        $(this).nextAll("h6").css("display","none");
        }
    })

     // 函数a为当前的value
    // 函数b为当前的正则
    //失去焦点函数调用
    function lose(a,b){
        if(a.val() == ''){
            a.nextAll("h6").css("display","block");
            a.nextAll("img").css("display","none");
        }

        if(b.test(a.val())){
        a.nextAll("h6").css("display","none");
        a.nextAll("img").css("display","block");
        i++;
        console.log(i);
        if(i==5){
            flag = true
        }
        else{
            flag = false
        }
        console.log(flag);
        }
        else{
        a.nextAll("h6").css("display","block");
        a.nextAll("img").css("display","none");
        }
    }

    // 获取焦点函数调用
    function gain(a,b){
        if(a.val() == ''){
            a.nextAll("h6").css("display","block");
            a.nextAll("img").css("display","none");
        }
        if(b.test(a.val())){
            a.nextAll("h6").css("display","none");
            a.nextAll("img").css("display","block");
            i--;
            if(i==5){
            flag = true
        }
        else{
            flag = false
        }
        }
        else{
            a.nextAll("h6").css("display","none");
        }
    }


    // 地址验证
    $(".g_boxr div:eq(2) .g_site").focus(function(){
        var fra = $(this);
        // 一个任意字符加上其中任何一个匹配的字，不区分大小写，全局匹配
        var res = /^.+[省县乡村社区街道路号]/gi;
            gain(fra,res);
    })

    $(".g_boxr div:eq(2) .g_site").blur(function(){
        var fra = $(this);
        var res = /^.+[省县市乡村社区街道路号]/ig;
            lose(fra,res);
    })

    // 手机验证
    $(".g_boxr div:eq(3) .g_recom").focus(function(){
        var fra = $(this);
        var res = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        gain(fra,res);
    })

    $(".g_boxr div:eq(3) .g_recom").blur(function(){
        var fra = $(this);
        var res = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;
        lose(fra,res);
    })

    //手机区号
    //以零开头，2到3个数字长度
    $(".g_boxr div:eq(3) .g_area").blur(function(){
        var res = /^0\d{2,3}$/;
        if($(this).val()== ''){
            $(this).nextAll("h6").css("display","block");
            $(".g_boxrimg").css("display","none");
        }

        if(res.test($(this).val())){
        $(this).nextAll("h6").css("display","none");
        $(".g_boxrimg").css("display","block");
        i++;
        if(i==5){
            flag = true
        }
        else{
            flag = false
        }
        console.log(flag);
        console.log(i);
    }
    else{
        $(this).nextAll("h6").css("display","block");
        $(".g_boxrimg").css("display","none");
    }
    })

    $(".g_boxr div:eq(3) .g_area").focus(function(){
        var res = /^0\d{2,3}$/;
        if($(this).val()== ''){
            $(this).nextAll("h6").css("display","block");
            $(".g_boxrimg").css("display","none");
        }

        if(res.test($(this).val())){
        $(this).nextAll("h6").css("display","none");
        $(".g_boxrimg").css("display","block");
        i--;
         if(i==5){
            flag = true
        }else{
            flag = false
        }
        }
    })


    $(".g_boxr div:eq(3) .g_name").focus(function(){
        var res = /^0\d{2,3}$/;
        if($(this).val()== ''){
            $(this).nextAll("h6").css("display","block");
            $(".g_boxrimg").css("display","none");
        }
        if(res.test($(this).val())){
        $(this).nextAll("h6").css("display","none");
        $(".g_boxrimg").css("display","block");
        i--;
         if(i==5){
            flag = true
        }else{
            flag = false
        }
        }

    })

     $(".g_boxr div:eq(3) .g_name").blur(function(){
        var res = /^0\d{2,3}$/;
        if($(this).val()== ''){
            $(this).nextAll("h6").css("display","block");
            $(".g_boxrimg").css("display","none");
        }
        if(res.test($(this).val())){
        $(this).nextAll("h6").css("display","none");
        $(".g_boxrimg").css("display","block");
        i++;
        console.log(i);
        if(i==5){
            flag = true
        }
        else{
            flag = false
        }
        console.log(flag);
        }
        else{
        $(this).nextAll("h6").css("display","block");
        $(".g_boxrimg").css("display","none");
        }
    })

    //电话号码
    //7到8位数字
    $(".g_boxr div:eq(3) .g_phone").blur(function(){
        var res = /^\d{7,8}$/;
        if($(this).val()== ''){
            $(this).nextAll("h6").css("display","block");
            $(".g_boxrimg2").css("display","none");
    }

        if(res.test($(this).val())){
        $(this).nextAll("h6").css("display","none");
        $(".g_boxrimg2").css("display","block");
        i++;
        if(i==5){
            flag = true
        }else{
            flag = false
        }
        console.log(flag);
        console.log(i);
    }
    else{
        $(this).nextAll("h6").css("display","block");
        $(".g_boxrimg2").css("display","none");
    }
    })

    $(".g_boxr div:eq(3) .g_phone").focus(function(){
        var res = /^\d{7,8}$/;
        if($(this).val()== ''){
            $(this).nextAll("h6").css("display","block");
            $(".g_boxrimg2").css("display","none");
        }
        if(res.test($(this).val())){
        $(this).nextAll("h6").css("display","none");
        $(".g_boxrimg2").css("display","block");
         i--;
             if(i==5){
            flag = true
        }else{
            flag = false
        }
        }
    })

    // 验证信息结束

    // 单选框
    $(".g_set .g_cho").click(function(){
        var a = $(this).val();
        if("1"==a){
            $(this).prop("checked",false)
            $(this).val("0");
        }
        else{
            $(this).val("1");
        }
    })

    // 保存信息
    $(".g_save a:eq(1)").click(function(){
        if($(".g_set .g_cho").val()== "1" &&
        flag == true && $(".g_boxr input").val()!=""){
            alert("信息保存成功");
        }
        else{
            alert("信息不完整");
        }
    })
})

