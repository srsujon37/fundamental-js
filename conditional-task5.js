// var num1 = 8;
// var num2 = 5

// if (num1 > num2) {
//     const result = num1 * 2;
//     console.log(result);
// } else if (num1 <= num2) {
//     const result = num1 + num2;
//     console.log(result);
// } 
// else {
//     console.log('num1 is not bigger than num2');
// }

// result =( num1 > num2 )?( num1 * 2) : num1 + num2;


// console.log(result);


let num1 = 10;
let num2 = 5;
let result;


if (num1 > num2) {
   result = num1 * 2
} else {
    result = num1 + num2
}

console.log(result);

result = num1 > num2 ? num1 * 2 : num1 + num2;