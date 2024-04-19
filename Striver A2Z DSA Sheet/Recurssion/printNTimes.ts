"use strict";
// ? 1 to 5
// const n:number = 5;
// function printMe(n:number){
//     if(n === 0){
//         return;
//     }
//     console.log(n);
//     printMe(n-1)
// }

// printMe(n);


// ? 5 to 1
// function printMe(n:number){
//     if(n === 0) return;
//     printMe(n-1);
//     console.log(n);
// }

// printMe(5);

// ? sum
function printMe(n:number, sum : number){
    if(n === 0) return sum;
    return printMe(n-1,sum + n);
}

console.log(printMe(5,0));

