$(function(){

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


      // 失去焦点时判断手机号是否正确
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



    // 修改密码界面提交按钮js判断
    $(".amendPassword_submit").click(function(){

        // 判断手机号是否正确
        var passNumber=$(".passNumber").val();
        var numReg=/(^13\d{9}|^147\d{8}|^15[0-3]\d{8}|^15[5-9]\d{8}|^17[0,7]\d{8}|^180\d{8}|^18[2-9]\d{8})/g;

        if(numReg.test(passNumber))
        {
            $(".h2 img").css("display","block");

             // 判断密码是否符合规则
                var psword1= $(".find_passWord1").val();
                var psword2= $(".find_passWord2").val();
                if(5<$(".amendPassword_input1").val().length&&$(".amendPassword_input1").val().length<21)
                    {
                        // 判断两次密码是否相同
                        if($(".amendPassword_input1").val()==$(".amendPassword_input2").val())
                        {
                            // 判断验证码是否正确
                            var x = $("#h4-1").val().toLowerCase();
                            if(x ==0){
                            alert('请输入验证码');
                            }else if(x != code.toLowerCase()){
                            alert('验证码不正确，请重新输入');
                            createCode();
                            }
                            else{

                                    $(".amendPassword_success").css("display","block");
                                    $(".amendPassword_success").css("display","flex");
                                    createCode();
                            }

                        }
                        else{alert("两次密码输入不相同，请重新输入");
                            createCode();}
                    }
                    else{
                        alert('您输入的密码不符合规范');
                    }

            }
        else{
            $(".h3 img").css("display","block");
            $(".h3-1").css("display","block");}

    })

    // 点击修改成功框隐藏
    $(".amendPassword_success").click(function(){
        $(".amendPassword_success").hide();
        return false;
    })




})