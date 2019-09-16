let chunhat = function (dai, rong) {
    this.dai = dai;
    this.rong = rong;

    this.getDai = function (dai) {
        this.dai = dai;
    }

    this.getRong = function (rong) {
        this.rong = rong;
    }

    this.area = function (dai, rong) {
        return this.dai * this.rong;
    }

    this.perimeter = function (dai, rong) {
        return (this.dai + this.rong) * 2;
    }

    this.print = function () {
        alert(this.perimeter());
        alert(this.area());
    }

    this.drawsquare = function () {
        let ctx = document.getElementById('myCanvas').getContext("2d");
        ctx.beginPath();
        ctx.rect(100, 100, this.dai, this.rong);
        ctx.fillStyle = 'red';
        ctx.fill();
    }
};

let data = new chunhat();
data.getDai(100);
data.getRong(50);
data.print();
data.drawsquare();

