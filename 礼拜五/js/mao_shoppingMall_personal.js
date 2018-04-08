/*
* @Author: name
* @Date:   2018-02-05 15:54:20
* @Last Modified by:   name
* @Last Modified time: 2018-02-07 21:37:17
*/

$(function(){
    //绑定手机
    //手机验证
    //号码输入框失去焦点
    $('input[name="phoneNumber"]').blur(function(){
        var reg= /(^1[3][0-9]\d{8}$)|(^1[4][7]\d{8}$)|(^1[5][0-3]\d{8}$)|(^1[5][5-9]\d{8}$)|(^1[7][0]\d{8}$)|(^1[7][7]\d{8}$)|(^1[8][0]\d{8}$)|(^1[8][2-9]\d{8}$)/;
        if($(this).val()==''){
            $(this).next().html("请输入您的手机号");
            $(this).next().css("display","block");
        }else if(!reg.test($(this).val())){
           $(this).next().html('手机号码不正确，请重新输入');
            $(this).next().css("display","block");
        }else{
            $(this).next().html('');
        }
    });
    //密码验证
    $('input[name="password"]').blur(function() {
        var reg=/^[@A-Za-z0-9!#$%^&*_.~]{6,22}$/;
        if($(this).val()==''){
            $(this).next().html("请输入密码");
            $(this).next().css("display","block");
        }else if(!reg.test($(this).val())){
           $(this).next().html('密码格式不正确，请重新输入');
            $(this).next().css("display","block");
        }else{
            $(this).next().html('');
        }
    });
    //再次输入密码
    $('input[name="psd"]').blur(function() {
        var reg=/^[@A-Za-z0-9!#$%^&*_.~]{6,22}$/;
        if($(this).val()==''){
            $(this).next().html("请输入密码");
            $(this).next().css("display","block");
        }else if(!reg.test($(this).val())){
           $(this).next().html('密码格式不正确，请重新输入');
            $(this).next().css("display","block");
        }else if($(this).val()!=$(this).prev().prev().val()){
            alert('fs');
            $(this).next().html('密码有误，请重新输入');
            $(this).next().css("display","block");
        }else{
            $(this).next().html('');
        }
    });
    //验证码
      var code;
      function createCode(){
        code = '';//首先默认code为空字符串
        var codeLength = 4;//设置长度
        //设置随机字符
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
        for(var i = 0; i < codeLength; i++){ //循环codeLength 我设置的4就是循环4次
           var index = Math.floor(Math.random()*36); //设置随机数范围,这设置为0 ~ 36
           code += random[index]; //字符串拼接 将每次随机的字符 进行拼接
      }
        $(".creatC").text(code);//将拼接好的字符串赋值给展示的Value
      }
      //页面开始加载验证码
      createCode();
      //验证码加载点击事件
      $(".phone .code span").click(function() {
          createCode();

      });
      //下面就是判断是否==的代码
        $('input[name="code"]').blur(function() {
        if($(this).val().toUpperCase() ==""){
          $(this).parent().next().html("请输入验证码");
        }else if($(this).val().toUpperCase() != code){
          $(this).parent().next().html("验证码不正确，请重新输入");
          // $(this).val().toUpperCase() = "";
          createCode();
        }else{
          $(this).parent().next().html("");
        }
      });
        //手机验证码
        function phoneCode(){
            var phoneCode ='';
            var phoneCodeLength =6;
            for(var i = 0; i < phoneCodeLength; i++){ //循环codeLength 我设置的4就是循环4次
            var index = Math.floor(Math.random()*9); //设置随机数范围,这设置为0 ~ 9
            phoneCode += index; //字符串拼接 将每次随机的字符 进行拼接
        }
        console.log(phoneCode)//将拼接好的字符串赋值给展示的Value
      }
      //页面开始加载验证码
      phoneCode();
      //验证码加载点击事件
      $(".phoneCode button").click(function() {
          phoneCode();

      });

      $('input[name="phoneCode"]').blur(function(){
        if($(this).val() ==""){
          $(this).parent().next().html("请输入验证码");
        }else if($(this).val() != phoneCode){
          $(this).parent().next().html("验证码不正确，请重新输入");
          // phoneCode();
        }else{
           $(this).parent().next().html("")
        }

      });
      $('.binding').click(function() {
        if($(this).parent().find('input[name="phoneNumber"]').html('')||$(this).parent().find('input[name="password"]').html('')||$(this).parent().find('input[name="code"]').html('')||$(this).parent().find('input[name="phoneCode"]').html('')){
            $(this).parent().find('input[name="phoneNumber"]').next().html("请输入您的手机号");
            $(this).parent().find('input[name="phoneNumber"]').css('display', 'block');
        }
      });
      //删除地址
      $('.address .delete').click(function(event) {
        $(this).parent().parent().remove();
        if($(this).parents('.add')==''){
        $(this).parents('.add').find('.addressNull').css('display', 'block');
      }
      });
      //订单积分
      //分页器
      var integralOSwiper = new Swiper('.integralOSwiper');
      //page
      $("#page").paging({
        pageNo:1,
        totalPage: 10,
        totalSize: 300,
        callback: function(num) {
          integralOSwiper.slideTo(num-1,500,false);
        },
      })
      //我的订单
      $('.myOrder .orderAll li').click(function() {
        $(this).find('a').css({
          'background':'#f08200',
          'color':'#ffffff',
        }).parent().siblings().find('a').css({
           'background':'0',
           'color':'#666666'
        });;
      });

})