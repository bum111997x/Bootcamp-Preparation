function Temperature(celsius) {
    this.celsius = celsius;

    this.getCelcius = function (celsius) {
        this.celsius = celsius;
    }

    this.getFahrenheit = function (celsius) {
        return this.celsius *1.8 +32;
    }

    this.getKelvin = function (celsius) {
        return this.celsius + 273.15;
    }
};

let temperature = new Temperature();
temperature.getCelcius(25);
alert("Do F la: " +temperature.getFahrenheit());
alert("Do K la: " + temperature.getKelvin());