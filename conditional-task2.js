let  bmiWeight = 100;
let bmiHeight = 1.70;

let bmi = bmiHeight / (bmiHeight * bmiHeight)

if (bmi < 18.5) {
    console.log('you are underweight');
} else if(bmi >= 18.5 && bmi <= 24.9){
    console.log('You are normal');
} else if(bmi >= 25 && bmi <= 29.9){
    console.log('You are overWeight');
}
else{
    console.log('You are obese');
}