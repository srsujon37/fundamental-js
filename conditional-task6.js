let age = 66;
let price = 800;


if (age < 10) {
    console.log("ticked free");
} 
else if(age >= 10 && age < 60){
    const discount = price * 50 / 100;
    const totalDiscount = price - discount;
    console.log(totalDiscount);
}
else if(age >= 60 ){
    const discount = price *15/100;
    const seniorDiscount = price - discount;
    console.log(seniorDiscount);
}
else {
    console.log("ticket 800tk");
}