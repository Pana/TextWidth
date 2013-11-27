/****************************************
*
*  Author: Pana Wang
*  Date: 2013.11.27
*
****************************************/

var Canvas = require('canvas')

/*
*   参数:
*      text -- 文本内容
*      font -- 字体, 大小  默认'10px Arial'
*/
module.exports = function(text, font){
    var canvas = new Canvas(1000, 1000)
        , ctx = canvas.getContext('2d')

    if(font) ctx.font
        
    return ctx.measureText(text).width
}