// for (let i = 1; i <= 30; i++){
//     if(i % 5 === 0 ){
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 30; i++){
//     if(i % 3 === 0 ){
//         console.log(i);
//     }
// }

// for (let i = 1; i <= 30; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//         console.log(i);
//     }
// }


// for (let i = 1; i <= 30; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i);
//     }
// }

let total = 0;

for(let i = 1; i <= 20; i++){
    if (i % 3 ===0) {
        console.log(i);
        total = total + i;
    }
}

console.log('total of the numbers', total);