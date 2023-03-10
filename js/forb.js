document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if (e && e.keyCode == 123) {
        mAlert();
        e.returnValue = false;
        return (false);
    }
}
function mAlert() {
    alert("大侠怎么可以看这个！");
}

// 防止鼠标右键浏览器‘检查’操作
setInterval(function () {
    debugger;
}, 100)

// 禁止右键
document.oncontextmenu = function () { return false; };
