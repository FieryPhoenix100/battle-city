var sizeCell = 32;
var canvas = document.getElementById("screen");
var ctx = canvas.getContext("2d");
var colorBackground = "orange";
var speed = sizeCell / 32;

var map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //0
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //1
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],//2
    [0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //5
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //7
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //8
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //9
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //10
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //11
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //12
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //13
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  //14
];

(function init() {
    canvas.width = sizeCell * 15;
    canvas.height = sizeCell * 15;
    ctx.fillStyle = colorBackground;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    mapInit();
})();

function mapInit() {
    for (let line in map) {
        for (let block in map[+line]) {
            switch (map[+line][+block]) {
                case 1:
                    BrickBuild(block * sizeCell, line * sizeCell);
                    break;
                case 2:
                    BlockBuild(block * sizeCell, line * sizeCell);
                    break;
            }
        }
    }
}

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

function Tank() {
    this.x = 0;
    this.y = 0;
    this.direction = 1;
}

Tank.prototype.move = function(direction) {
    this.direction = direction;
    this.clear();
    switch(direction) {
        case 0: // ^
            this.y -= speed;
            break;
        case 1: // >
            this.x += speed;
            break;
        case 2: // 
            this.y += speed;
            break;
        case 3: // <
            this.x -= speed;
            break;
    }
    this.draw();
}

Tank.prototype.clear = function() {
    ctx.fillStyle = colorBackground;
    ctx.fillRect(this.x, this.y, sizeCell, sizeCell);
}

Tank.prototype.draw = function() {
    ctx.fillStyle = this.color;
    switch(this.direction) {
        case 0: // ^
            ctx.fillRect(this.x + (sizeCell / 2 - sizeCell / 16), this.y, sizeCell / 8, sizeCell / 2);
            ctx.fillRect(this.x, this.y +  sizeCell / 2, sizeCell, sizeCell / 2);
            break;
        case 1: // >
            ctx.fillRect(this.x + (sizeCell / 2 - sizeCell / 16), this.y + (sizeCell / 2 - sizeCell / 16), sizeCell / 2, sizeCell / 8);
            ctx.fillRect(this.x, this.y, sizeCell / 2, sizeCell);
            break;
        case 2: //
            ctx.fillRect(this.x + (sizeCell / 2 - sizeCell / 16), this.y + sizeCell / 2, sizeCell / 8, sizeCell / 2);
            ctx.fillRect(this.x, this.y, sizeCell, sizeCell / 2);
            break;
        case 3: // <
            ctx.fillRect(this.x, this.y + (sizeCell / 2 - sizeCell / 16), sizeCell / 2, sizeCell / 8);
            ctx.fillRect(this.x + sizeCell / 2, this.y, sizeCell / 2, sizeCell);
            break;
    }
}

Tank.prototype.shoot = function() {

}

var userTank = new Tank();
userTank.color = "#006400";

document.addEventListener('keydown', function(event) {
    switch(event.code) {
        case "KeyW":
            userTank.move(0);
            break;
        case "KeyD":
            userTank.move(1);
            break;
        case "KeyS":
            userTank.move(2);
            break;
        case "KeyA":
            userTank.move(3);
            break;
    }
});