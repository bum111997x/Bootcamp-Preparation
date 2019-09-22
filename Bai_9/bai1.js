function isFirstLetterUpperCase(str) {
    regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        console.log("Ky tu dau la chu viet hoa");
    } else {
        console.log("Ky tu dau khong phai chu viet hoa");
    }
}

isFirstLetterUpperCase('Abcd');
isFirstLetterUpperCase('abcd');
isFirstLetterUpperCase('Nguyen van Nam');
isFirstLetterUpperCase('NGUYEN VAN NAM');
isFirstLetterUpperCase('nguyen van Nam');