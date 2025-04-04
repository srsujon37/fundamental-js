const age = 92;
const price = 500

if (age <= 12){
    console.log("you can eat for free");
}
else if(age >= 60){
    const discount = price *50/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(age >= 60){
    50%discount
    const discount = price * 60/100;
    const payAmount = price - discount
    console.log(payAmount);
}

else{
    console.log(price);
}

const result = 20;
// const fail = 32

if (result >= 80) {
    console.log("Grade A+");
}
else if(result >= 70){
    console.log("Grade A");
}
else if(result >= 60){
    console.log("Grade A-");
}
else if(result >= 50){
    console.log("Grade B");
}
else if(result >= 33){
    console.log("Grade D");
}
else if(result < 32){
    console.log("Grade F");
}

else {
    console.log(result);
}
