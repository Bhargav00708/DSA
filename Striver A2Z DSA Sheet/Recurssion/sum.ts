function printMe(n:number, sum : number){
    if(n === 0) return sum;
    return printMe(n-1,sum + n);
}

console.log(printMe(5,0));