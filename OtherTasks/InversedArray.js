var array = [1,  2, 5, 3, 9, 0];
var extraVar;
for(var j = 0; j < array.length / 2; j++) {
    extraVar = array[j];
    array[j] = array[array.length - j - 1];
    array[array.length - j - 1] = extraVar;
}
console.log(array);
