var nums = [];
for(var i=0;i<100;++i){
    nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
document.write(nums);
document.write("<br/>");
document.write("The minimum value is: " + minValue);

var maxValue = findMax(nums);
document.write("<br/>");
document.write("The maximum value is: " + maxValue);