function ClassName(str) {
    regexp = /^[CAP]+[0-9]{4}[GHIKLM]$/;
    if (regexp.test(str)){
        return true;
    }else
        return false;
}

let classname1= "C0318G";
console.log(ClassName(classname1));
let classname2= "P0323A";
console.log(ClassName(classname2));