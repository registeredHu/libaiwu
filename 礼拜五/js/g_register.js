/*
* @Author: name
* @Date:   2018-02-03 09:51:26
* @Last Modified by:   name
* @Last Modified time: 2018-02-07 15:24:18
*/
$(function(){
    //设置变量用于提交和登录判断
    var i = 0;
    flag = false;

    //手机号焦点事件
    $(".g_shop_t input:eq(0)").focus(function(){
        var res = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;

        if($(this).val()== ''){
            $(this).next("h6").css("display","block");
            $(this).css("background","");
        }

        if(res.test($(this).val())){
            $(this).next("h6").css("display","none");
            $(this).css({"background":"url('images/g_shop_suc_19.png') 292px center no-repeat"});

            //带入全局变量用于登录和注册判断
            i--;
            if(i==5){
                flag=true;
            }else{
                flag=false;
            }
        }

        else{
            $(this).next("h6").css("display","block");
            $(this).css("background","");
        }
    })

    //手机号失去焦点事件
    $(".g_shop_t input:eq(0)").blur(function(){
        var res = /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/;

        if($(this).val()== ''){
            $(this).next("h6").css("display","block");
            $(this).css("background","");
        }

        if(res.test($(this).val())){
            $(this).next("h6").css("display","none");
            $(this).css({"background":"url('images/g_shop_suc_19.png') 292px center no-repeat"});
            i++;
            if(i==5){
                flag=true;
            }else{
                flag=false;
            }
        }

        else{
            $(this).next("h6").css("display","block");
            $(this).css("background","");
        }
    })

    //密码输入第一行焦点事件
    $(".g_shop_t input:eq(1)").focus(function(){
        if($(this).val()!=""){
            if($(".g_shop_t input:eq(1)").val().length<5){
                $(".g_h61").css("display","block");
                $(this).css("background","");
            }
            else{
                $(this).css({"background":"url('images/g_shop_suc_19.png') 292px center no-repeat"});
                $(".g_h61").css("display","none");
                i--;
                if(i==5){
                flag=true;
                }else{
                flag=false;
                }
            }

        if($(".g_shop_t input:eq(1)").val().length>21){
            $(".g_h61").css("display","block");
            $(this).css("background","");
            }
        }else{
            $(".g_h61").css("display","block");
            $(this).css("background","");
        }
    })

    ////密码输入第一行失去焦点事件
    $(".g_shop_t input:eq(1)").blur(function(){
        if($(this).val()!=""){
        if($(".g_shop_t input:eq(1)").val().length<5){
            $(".g_h61").css("display","block");
            $(this).css("background","");
            }
        else{
            $(this).css({"background":"url('images/g_shop_suc_19.png') 292px center no-repeat"});
            $(".g_h61").css("display","none");
            i++;
            if(i==5){
                flag=true;
            }else{
                flag=false;
            }
        }
        if($(".g_shop_t input:eq(1)").val().length>21){
            $(".g_h61").css("display","block");
            $(this).css("background","");
            }
        }else{
            $(".g_h61").css("display","block");
            $(this).css("background","");
        }
    })

    //密码是否相同失去焦点事件
    $(".g_shop_t input:eq(2)").blur(function(){
        if($(this).val()!="" && $(this).val().length>=5){
            // 判断两次密码是否相同
            if($(".g_shop_t input:eq(1)").val() == $(".g_shop_t input:eq(2)").val()){
                    $(this).css({"background":"url('images/g_shop_suc_19.png') 292px center no-repeat"})
                    $(".g_h61").css("display","none");
                       i++;
                    if(i==5){
                        flag=true;
                    }else{
                        flag=false;
                    }
                }
                else{
                    $(".g_h61").css("display","block");
                     $(this).css("background","");
                    }
                }else{
                    $(".g_h61").css("display","block");
                    $(this).css("background","");
                }
                })

    //密码是否相同焦点事件
    $(".g_shop_t input:eq(2)").focus(function(){
        if($(this).val()!="" && $(this).val().length>=5){
            // 判断两次密码是否相同
            if($(".g_shop_t input:eq(1)").val() == $(".g_shop_t input:eq(2)").val()){
                    $(this).css({"background":"url('images/g_shop_suc_19.png') 292px center no-repeat"})
                    $(".g_h61").css("display","none");
                       i--;
                    if(i==5){
                        flag=true;
                    }else{
                        flag=false;
                    }
                }
                else{
                    $(".g_h61").css("display","block");
                     $(this).css("background","");
                    }
                }else{
                    $(".g_h61").css("display","block");
                    $(this).css("background","");
                }
                })

    //验证码失去焦点事件
    $(".g_codebox .g_code").blur(function(){
        var a = $(this).val();
        //设一个字符串相同进行判断
        if(a == "xqcr"){
            $(this).css({"background":"url('images/g_shop_suc_19.png') 100px center no-repeat"})
                $(".g_h62");
                $(".g_h62").css("display","none");
               i++;
                    if(i==5){
                        flag=true;
                    }else{
                        flag=false;
                    }
        }else{
            $(this).css("background","");
            $(".g_h62").css("display","block");
        }
      })

    //验证码获取焦点事件
    $(".g_codebox .g_code").focus(function(){
        var a = $(this).val();
        if(a == "xqcr"){
            $(this).css({"background":"url('images/g_shop_suc_19.png') 100px center no-repeat"})
                $(".g_h62");
                $(".g_h62").css("display","none");
               i--;
                    if(i==5){
                        flag=true;
                    }else{
                        flag=false;
                    }
        }else{
            $(this).css("background","");
            $(".g_h62").css("display","block");
        }
      })

    //手机验证码失去焦点事件
    $(".g_codebox2 .g_ph").blur(function(){
        //4到6位的任意数
       var res = /^.{4,6}$/;
       if(res.test($(this).val())){
            $(".g_h63").css("display","none");
            $(this).css({"background":"url('images/g_shop_suc_19.png') 100px center no-repeat"})
                $(".g_h62");
                i++;
                    if(i==5){
                        flag=true;
                    }else{
                        flag=false;
                    }
       }else{
            $(".g_h63").css("display","block");
            $(this).css("background","none");
       }
    })

    //手机验证码焦点事件
    $(".g_codebox2 .g_ph").focus(function(){
       var res = /^.{4,6}$/;
       if(res.test($(this).val())){
            $(".g_h63").css("display","none");
            $(this).css({"background":"url('images/g_shop_suc_19.png') 100px center no-repeat"})
                $(".g_h62");
                i--;
                    if(i==5){
                        flag=true;
                    }else{
                        flag=false;
                    }
       }else{
            $(".g_h63").css("display","block");
            $(this).css("background","none");
       }
    })

    //单选框触发事件
    $(".g_shop_m input").click(function(){
        var a = $(this).val();
        if("1"==a){
            $(this).prop("checked",false)
            $(this).val("0");
        }
        else{
            $(this).val("1");
        }
    })

    //注册点击
    $(".g_shop_b .g_shop_b1").click(function(){
        if($(".g_shop_m input").val() ==1 && $(".g_shop input").val()!="" && flag==true){
            alert('注册信息提交成功');
        }else{
            alert("提交失败");
        }
    })

    //登录事件
    $(".g_shop_b .g_shop_b2").click(function(){
        if($(".g_shop_m input").val() ==1 && $(".g_shop input").val()!="" && flag==true){
            alert('登录成功');
        }else{
            alert("登录失败");
        }
    })

})





 // $(this).css({"background":"url('images/g_shop_suc_19.png') 292px center no-repeat"});
// //输入框失去焦点判断手机号是否正确
//     $(".passNumber").blur(function(){
//         var passNumber=$(".passNumber").val();
//         var numReg=/(^13\d{9}|^147\d{8}|^15[0-3]\d{8}|^15[5-9]\d{8}|^17[0,7]\d{8}|^180\d{8}|^18[2-9]\d{8})/g;

//         if(numReg.test(passNumber))
//          {$(".h2 img").css("display","block");}

//      //错误提示出现
//         else{$(".h3 img").css("display","block");
//             $(".h3-1").css("display","block");}
//     })
//  // 找回密码界面提交按钮js判断
//     $(".password_submit").click(function(){

//         console.log($(".find_passWord1").val().length);

//         // 判断手机号是否正确
//         var passNumber=$(".passNumber").val();
//         var numReg=/(^13\d{9}|^147\d{8}|^15[0-3]\d{8}|^15[5-9]\d{8}|^17[0,7]\d{8}|^180\d{8}|^18[2-9]\d{8})/g;

//         if(numReg.test(passNumber))
//         {
//             $(".h2 img").css("display","block");

//              // 手机号正确判断验证码是否正确
//             var x = $("#h4-1").val().toLowerCase();
//              if(x ==0){
//             alert('请输入验证码');
//             }else if(x != code.toLowerCase()){
//             alert('验证码不正确，请重新输入');

//             createCode();
//             }else{

                // 判断密码是否符合规则
                // var psword1= $(".find_passWord1").val();
                // var psword2= $(".find_passWord2").val();
                // if(5<$(".find_passWord1").val().length&&$(".find_passWord1").val().length<21)
                //     {
                //         // 判断两次密码是否相同
                //         if($(".find_passWord1").val()==$(".find_passWord2").val())
                //         {
                //         alert('密码修改成功');
                //          }
                //          else{alert("两次密码输入不相同，请重新输入");
                //             createCode();}
                //     }
                //     else{
                //         alert('您输入的密码不符合规范');
                //     }

             // }

//         }
//         else{$(".h3 img").css("display","block");
//             $(".h3-1").css("display","block");}

//     })
