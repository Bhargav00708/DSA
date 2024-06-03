// const n:number = 36;
// const answer:Array<number> = [];
// for(let i = 1; i <= n; ++i){
//     if(n % i === 0){
//         answer.push(i);
//     }
// }

// console.log(answer);

// ? Here if we notice so here in answer (1,36),(2,18),(3,12),(4,9),(6,6) come
// ? so here we can also take quontinent till numbers sqrt.
// ? In above code time complexity would be o(n) and in this case it is o(sqrt(n))

const n: number = 36;
const answer: Array<number> = [];

for (let divisor = 1; divisor <= Math.sqrt(n); ++divisor) {
  if (n % divisor === 0) {
    answer.push(divisor);
    const quontinent: number = n / divisor;
    quontinent === divisor ? undefined : answer.push(quontinent);
  }
}

console.log(answer);
