var sizeCell = 32;
var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");
var colorBackground = "orange";

(function init() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    ctx.fillStyle = colorBackground;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
})();

function BrickBuild(x, y) {
    var color = "red";
    var colorInterval = "white"
    var sizeInterval = sizeCell / 8;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, sizeCell, sizeCell);
    ctx.fillStyle = colorInterval;
    ctx.fillRect(x, y, sizeCell, sizeInterval / 2);
    ctx.fillRect(x, y + sizeCell / 2 - (sizeInterval / 2), sizeCell, sizeInterval);
    ctx.fillRect(x + (sizeCell / 2), y, sizeInterval, sizeCell / 2);
    ctx.fillRect(x, y + sizeCell - (sizeInterval / 2), sizeCell, sizeInterval / 2);
    ctx.fillRect(x, y + sizeCell / 2, sizeInterval /2, sizeCell / 2);
    ctx.fillRect(x + sizeCell - (sizeInterval / 2), y + sizeCell / 2, sizeInterval /2, sizeCell / 2);
}

function BlockBuild(x, y) {
    var color = "#808080";
    ctx.fillStyle = color;
    ctx.fillRect(x, y, sizeCell, sizeCell);
}