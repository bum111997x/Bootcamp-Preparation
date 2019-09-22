let SwitchButtom = function (status,lamp) {
    this.status = status;

    this.turnOff = function () {
        this.status = false;
        lamp.turnOff();
    };

    this.turnOn = function() {
        this.status = true;
        lamp.turnOn();
    }

};

let ElectricLamp = function (status) {
    this.status = status;

    this.turnOff = function () {
        this.status = false;
    };

    this.turnOn = function () {
        this.status = true;
    }

};

let den = new ElectricLamp(true);
let switchButton = new SwitchButtom(true,den);
switchButton.turnOff();
console.log(den.status);
switchButton.turnOn();
console.log(den.status);