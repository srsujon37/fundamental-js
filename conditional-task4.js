// const result = 100;

// if (result > 80) {
//     console.log('then go for a lunch');
// } else {
//     if (result <= 80 || result === 60) {
//         console.log('good luck next time');
//     } else {
//         if (result < 60 || result === 40) {
//             console.log('massage unseen');
//         }else{
//             if (result < 40) {
//                 console.log('block your friend');
//             }
//         }
//     }
// }

let friendScore = 33;
let myScore = 85;

if (friendScore > 80) {
    console.log("Go for a lunch");
} else{
    if (friendScore >= 60) {
        console.log('good luck next time');
    } else {
        if (friendScore >= 40) {
            console.log('block your friend');
        } else {
            console.log('go home and act sad');
        }
    }
}
