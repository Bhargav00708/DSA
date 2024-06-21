// const n:number = 5;
// let firstNum = 0;
// let secondNum = 1;
// const answer:number[] = [];
// function fibboNacci(num: number , answer:number[]){
//     for(let i = num - 2; i <= n; ++i){
//         let sum = firstNum + secondNum;
//         answer.push(sum);
//         firstNum = secondNum;
//         secondNum = sum;
//     }
//     return answer;
// }

// if(n === 1){
//    answer.push(0);
//    console.log(answer);
   
// }
// else if(n === 2){
//     answer.push(0);
//     answer.push(1);
//     console.log(answer);
// }
// else{
//     answer.push(0);
//     answer.push(1);
//     console.log(fibboNacci(n,answer));
// }

// ? Recurssion Approach.

function Fib(n:number):number {
    if (n <= 1) {
      return n;
    } else {
      return Fib(n - 1) + Fib(n - 2);
    }
  }
   
const n = 3;
console.log(n + "th Fibonacci Number: " + Fib(n));

// With Memoization.
function fibonacci(n, memo = {}) {
    if (n in memo) {
      return memo[n];
    }
    if (n <= 2) {
      return 1;
    }
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  }