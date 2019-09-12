function square() {
    let inputNumber = parseFloat(document.getElementById('inpNumber_1').value);
    result = inputNumber * inputNumber;
    document.getElementById('display_1').innerHTML = "Bình phương của " + inputNumber + " là : " + result;
}

function area_circumference() {
    let inputRadius = parseFloat(document.getElementById('inputRadius').value);
    circumference = inputRadius * 2 * 3.14;
    area = inputRadius * inputRadius * 3.14;
    document.getElementById('display_2').innerHTML = "Chu vi hình tròn là: " + circumference;
    document.getElementById('display_2_1').innerHTML = "Diện tích hình tròn là: " + area;
}

function caculateFactorial() {
    let inputNumber = parseInt(document.getElementById('inputNumber_3').value);
    let result = 1;
    for (let i = 1; i <= inputNumber; i++) {
        result = result * i;
    }
    document.getElementById('display_3').innerHTML = "Giai thừa của " + inputNumber + " là: " + result;
}

function trueOrFalse() {
    let inputCharacters = document.getElementById('inputCharacters').value;
    if (inputCharacters % 1 == 0) {
        document.getElementById('display_4').innerHTML = "True";
    } else
        document.getElementById('display_4').innerHTML = "False";
}

function findMin() {
    let num_1 = parseFloat(document.getElementById('inpNum_1').value);
    let num_2 = parseFloat(document.getElementById('inpNum_2').value);
    let num_3 = parseFloat(document.getElementById('inpNum_3').value);
    let min = num_1;
    if (min > num_2) {
        min = num_2;
    }
    if (min > num_3) {
        min = num_3;
    }
    document.getElementById('display_5').innerHTML = "Số bé nhất là: " + min;
}

function number() {
    let number = parseInt(document.getElementById('inpNum').value);
    if (number > 0) {
        document.getElementById('display_6').innerHTML = "True";
    } else
        document.getElementById('display_6').innerHTML = "False";
}

function reverse() {
    let num_1 = parseInt(document.getElementById('number_1').value);
    let num_2 = parseInt(document.getElementById('number_2').value);
    let arr = [];
    let reverse = [];
    arr.push(num_1);
    arr.push(num_2);
    document.getElementById('display_7').innerHTML = arr;
    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        reverse[j] = arr[i];
    }
    document.getElementById('display_7_1').innerHTML = reverse;
}

function arrayRevere() {
    let arr = [1, 523, 625, 951, 3, 51, 6, 4, 3, 14, 7];
    document.getElementById('display_8').innerHTML = arr;
    arr.reverse();
    document.getElementById('display_8_1').innerHTML = arr;
}

function findCharacter() {
    let arr = [];
    let inputCharacters = document.getElementById('input_Chacracters').value;
    arr = inputCharacters.split("");
    console.log(arr);
    let inputCharacter = prompt('Input Character');
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (inputCharacter === arr[i]) {
            count++;
        } else
            document.getElementById('display_9').innerHTML = "-1";
    }
    document.getElementById('display_9').innerHTML = count;
}