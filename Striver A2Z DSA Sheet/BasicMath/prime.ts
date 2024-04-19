// ? Here to find prime number we can take second approach of divisor.ts 

const n:number = 31;
let count:number = 0;

for(let i = 2; i <= Math.sqrt(n); ++i){
    if(n % i === 0){
        ++count;
    }
}

console.log(`it is ${count === 0 ? `prime number`:`not a prime number`}`);