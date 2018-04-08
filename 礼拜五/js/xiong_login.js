

$(function () {


// 登录界面随机验证码JS开始
   var code;
    function createCode(){
        //首先默认code为空字符串
        code = '';
        //设置长度，这里看需求，我这里设置了4
        var codeLength = 4;
        var codeV = document.getElementById('h4-2');
        //设置随机字符
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
        //循环codeLength 我设置的4就是循环4次
        for(var i = 0; i < codeLength; i++){
            //设置随机数范围,这设置为0 ~ 36
             var index = Math.floor(Math.random()*36);
             //字符串拼接 将每次随机的字符 进行拼接
             code += random[index];
        }
        //将拼接好的字符串赋值给展示的Value
        codeV.innerHTML = code;

    }

    //下面就是判断是否== 的代码
    function validate(){
        var oValue = document.getElementById('input').value.toUpperCase();
        if(oValue ==0){
            alert('请输入验证码');
        }else if(oValue != code){
            alert('验证码不正确，请重新输入');
            oValue = ' ';
            createCode();
        }else{
            window.open('http://www.baidu.com','_self');
        }
    }

    //设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空
    window.onload = function (){

        createCode();
    }

    // 点击看不清楚刷新验证码
    document.getElementById("h4-3").onclick=function(){
        createCode();
    };
    //随机验证码结束



  // 判断手机号是否正确
    $(".passNumber").blur(function(){
        var passNumber=$(".passNumber").val();
        var numReg=/(^13\d{9}|^147\d{8}|^15[0-3]\d{8}|^15[5-9]\d{8}|^17[0,7]\d{8}|^180\d{8}|^18[2-9]\d{8})/g;

        if(numReg.test(passNumber))
         {$(".h2 img").css("display","block");}
        else{$(".h3 img").css("display","block");
            $(".h3-1").css("display","block");}
    })

    // 输入框获取焦点错误提示消失
    $(".passNumber").focus(function(){
            $(".h3 img").css("display","none");
            $(".h3-1").css("display","none");
    })

    // 点击手机验证登录切换界面
    $(".h1-2").click(function(){
        $(".passWord").css("display","none");
        $(".phone_identify").css("display","block");
        $(".h1-2").css("display","none");
        $(".h1-change").css("display","block");
        $(".h1-1").html("会员登录");
    })

    // 点击账号密码验证登录切换界面
    $(".h1-change").click(function(){
        $(".passWord").css("display","block");
        $(".phone_identify").css("display","none");
        $(".h1-2").css("display","block");
        $(".h1-change").css("display","none");
        $(".h1-1").html("登录");
    })

    // 点击登录判断
    $(".h6-1").click(function(){

         // 判断手机号是否正确
        var passNumber=$(".passNumber").val();
        var numReg=/(^13\d{9}|^147\d{8}|^15[0-3]\d{8}|^15[5-9]\d{8}|^17[0,7]\d{8}|^180\d{8}|^18[2-9]\d{8})/g;

        if(numReg.test(passNumber))
        {
            $(".h2 img").css("display","block");

            // 判断密码是否正确
            var psword= $(".passWord").val();
            if(psword==123456){

                 // 判断验证码是否正确
                var x = $("#h4-1").val().toLowerCase();
                 if(x ==0){
                 alert('请输入验证码');
                 }else if(x != code.toLowerCase()){
                 alert('验证码不正确，请重新输入');
                  createCode();
                }
                else{
                       alert("登录成功");

                    }
            }
            else{
                 alert("密码错误,请重新输入");
                 createCode();;
                }
        }
        else{$(".h3 img").css("display","block");
            $(".h3-1").css("display","block");}
    })


    // 找回密码界面提交按钮js判断
    $(".password_submit").click(function(){

        console.log($(".find_passWord1").val().length);

        // 判断手机号是否正确
        var passNumber=$(".passNumber").val();
        var numReg=/(^13\d{9}|^147\d{8}|^15[0-3]\d{8}|^15[5-9]\d{8}|^17[0,7]\d{8}|^180\d{8}|^18[2-9]\d{8})/g;

        if(numReg.test(passNumber))
        {
            $(".h2 img").css("display","block");

             // 手机号正确判断验证码是否正确
            var x = $("#h4-1").val().toLowerCase();
             if(x ==0){
            alert('请输入验证码');
            }else if(x != code.toLowerCase()){
            alert('验证码不正确，请重新输入');

            createCode();
            }else{

                // 判断密码是否符合规则
                var psword1= $(".find_passWord1").val();
                var psword2= $(".find_passWord2").val();
                if(5<$(".find_passWord1").val().length&&$(".find_passWord1").val().length<21)
                    {
                        // 判断两次密码是否相同
                        if($(".find_passWord1").val()==$(".find_passWord2").val())
                        {
                        alert('密码修改成功');
                         }
                         else{alert("两次密码输入不相同，请重新输入");
                            createCode();}
                    }
                    else{
                        alert('您输入的密码不符合规范');
                    }

             }

        }
        else{$(".h3 img").css("display","block");
            $(".h3-1").css("display","block");}

    })







})




