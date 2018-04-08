/*
* @Author: name
* @Date:   2018-02-03 17:18:06
* @Last Modified by:   name
* @Last Modified time: 2018-02-06 21:15:12
*/

$(function(){
    // 返回上个页面并保留部分数据
    function go(){
    window.history.go(-1);
    }
    $(".g_link a:eq(0)").click(function(){
        go();
    })


})