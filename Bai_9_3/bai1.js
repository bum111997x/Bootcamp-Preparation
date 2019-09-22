function Account(str) {
    regexp = /^[_a-z0-9]{6,}$/
    if (regexp.test(str)){
        return true;
    }else
        return false;
}

let account1 = "123abc_";
console.log(Account(account1));
let account2 = "_abc123";
console.log(Account(account2));
let account3 = "______";
console.log(Account(account3));
let account4 = "123456";
console.log((Account(account4)));
let account5 = "abcdefg";
console.log(Account(account5));
let account6 = ".@";
console.log(Account(account6));
let account7 = "12345";
console.log(Account(account7));
let account8 = "1234_";
console.log(Account(account8));
let account9 = "abcde ";
console.log(Account(account9));