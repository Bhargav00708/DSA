let num = 6;
while(1){
    const quotient = num / 2;
    if(quotient === 1){
        console.log(`Is Power of 2`);
        break;
    }
    else if(Math.floor(quotient) !== quotient){
        console.log(`Not`);
        break;
    }
    num = quotient;
}