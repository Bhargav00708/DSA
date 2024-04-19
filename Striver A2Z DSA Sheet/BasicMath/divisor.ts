// const n:number = 36;
// const answer:Array<number> = [];
// for(let i = 1; i <= n; ++i){
//     if(n % i === 0){
//         answer.push(i);
//     }
// }

// console.log(answer);

// ? Here if we notice so here in answer (1,36),(2,18),(3,12),(4,9),(6,6) come 
// ? so here we can also take reminder till numbers sqrt.
// ? In above code time complexity would be o(n) and in this case it is o(sqrt(n))

const n:number = 36;
const answer:Array<number> = [];

for(let i = 1; i <= Math.sqrt(n); ++i){
    if(n % i === 0){
        answer.push(i);
        const reminder:number = n / i;
        reminder === i ? undefined : answer.push(reminder);
    }
}

console.log(answer);
