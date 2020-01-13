$(document).ready(function() {

    start();
});

$(document).mousemove(function(event) {
    mouseX = event.pageX;
    mouseY = event.pageY;
    inCursor = false;
});

class idk {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

var mouseX = 0,
    mouseY = 0;

var x = 200,
    y = 400;
var length = [];

function start() {
    $("body").prepend('<img src="Snake part.png" class="snake" style="top:' + y + 'px;left:' + x + 'px">');
    /*
        setInterval(function() {

        }, 10);
        */

}

function getBigger() {

}

function rendering() {

}