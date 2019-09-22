function Email(str) {
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (regexp.test(str)){
        return true;
    }else
        return false;
}

let email1 = "a@gmail.com";
console.log(Email(email1));
let email2 = "ab@yahoo.com";
console.log(Email(email2));
let email3 = "abc@hotmail.com";
console.log(Email(email3));
let email4 = "@gmail.com";
console.log(Email(email4));
let email5 = "ab@gmail.";
console.log(Email(email5));
let email6 = "@#abc@gmail.com";
console.log(Email(email6));