let ctx = document.getElementById('Canvas').getContext("2d");

let MyPlane = function (speed, x, y) {
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.size = 50;

    this.moveLeft = function () {
        if (this.x > 0) {
            this.x -= this.speed;
        }
    };

    this.moveRight = function () {
        if (this.x < 350) {
            this.x += this.speed;
        }
    };

    this.getX = function () {
        return this.x;
    };

    this.getY = function () {
        return this.y;
    };

    this.getSize = function () {
        return this.size;
    }

    this.drawPlane = function () {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size,this.size);
        ctx.fillStyle = "red";
        ctx.fill();
    }
};
