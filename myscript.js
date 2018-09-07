//creating function map
function map(array, callback) {
    var result = []; // Create a new Array
    for (var i = 0; i < array.length; i++){
      result[i] = callback(array[i]);
    }
     return result;
}
 //calling function map in variable numbers
var numbers = map([2, 4, 6], function(num){
       return num*2;
});
console.log(numbers);