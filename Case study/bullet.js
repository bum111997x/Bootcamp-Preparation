let Bullet = function (speed, x, y) {
    let ctx = document.getElementById('Canvas').getContext("2d");
    this.speed = speed;
    this.x = x;
    this.y = y;
    this.size = 2;

    this.getX = function () {
        return this.x;
    };

    this.getY = function () {
        return this.y;
    };

    this.moveLeft = function () {
        if (this.x > 25) {
            this.x -= 5;
        }
    };

    this.moveRight = function () {
        if (this.x < 375) {
            this.x += 5;
        }
    };

    this.move = function () {
        this.y -= this.speed;
    };

    this.drawBullet = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
    }
}