try{
$("body").css("background-color","#ffffff");
document.getElementById("params").setAttribute("placeholder","Body表单(不填则默认GET) or @上传");
document.getElementById("header").setAttribute("placeholder","Header请求头");
}catch(e){};


try{
fileBrowser = api.require("fileBrowser");
fileBrowser.skin({
    skin:1,
    color:{
      bgColor:"#454E60", /*（可选项）字符串类型；每行的背景颜色，支持 rgb，rgba，#；默认："#fff"*/
      titleColor:"#FFFFFF", /*（可选项）字符串类型；每行的标题颜色，支持 rgb，rgba，#；默认："#fff"*/
      subtitleColor:"", /*（可选项）字符串类型；每行的副标题颜色，支持 rgb，rgba，#；默认："#fff"*/
      timeColor:"", /*（可选项）字符串类型；每行的时间颜色，支持 rgb，rgba，#；默认："#fff"*/
      lineColor:"", /*（可选项）字符串类型；每行的分割线颜色，支持 rgb，rgba，#；默认："#fff"*/
    }
});
}catch(e){};


function string_replace(val){
try{
var val=getnull(val).replace(/[\n]{1,}/gi,"\n");
var val=getnull(val).replace(/(^\s*)|(\s*$)/gi,"");
return val;
}catch(e){
return val;
}
};


function ajaxget(surl, callback, type) {
    var json = {};
    json.url = surl;
    json.method = "get";
    json.cache = false;
    if (type == "text" || type == "json") {
        json.dataType = type;
    } else {
        json.dataType = "text";
    }
    api.ajax(json, function(ret, err) {
        if (ret.body) {
            callback && callback(ret.body);
        } else if (err.body) {
            callback && callback(err.body);
        } else {
            callback && callback(ret);
        }
    })
};
