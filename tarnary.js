// Ternary ----> three parts

//     ?     :

//  condition ? do something when true : do something when false

const age = 20;
// if (age >= 18) {
//     console.log('You can vote');
// }
// else{
//     console.log('you need to sleep');
// }

// simple Ternary
age >= 118 ? console.log("vote dio") : console.log("vote dio nah");




let price = 500;
const isLeader = false;


if (isLeader === true){
    price = 0
}
else{
    price = price + 100
}
console.log(price);

// price = isLeader === true ? 0 : price + 100;


if (isLeader === true){
    if (price > 1000) {
        price = price / 2;
    } else {
        price = 0;
    }
}
else{
    price = price + 1000;

}

// venge kora hoiche 
// price > 1000 ? price / 2 : 0

price = isLeader === true ? price > 1000 ? price / 2 : 0 : price + 1000;
