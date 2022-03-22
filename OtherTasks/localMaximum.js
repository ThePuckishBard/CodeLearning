var array = [1, 5, 9, 14, 16, 10, 7];

for (var j = 0 ;j > array.length - 1; j++){
    if (array[j] > array[j +1]){
        console.log(array[j]);
    }
    /*if (array[j] > array[j + 1] && array[j] > array[j - 1]){
        console.log(array[j]);
    }*/
}

var array = [7, 1, 5, 9, 14, 16, 10, 7]; // length = 8

if (array[0] > array[1]){
    console.log(array[0]);
}
for (var j = 1 ;j < array.length - 1; j++){
    if (array[j] > array[j + 1] && array[j] > array[j - 1]){
        console.log(array[j]);
    }
}
if (array[array.length-1] > array[array.length-2]){
    console.log(array[0]);
}
