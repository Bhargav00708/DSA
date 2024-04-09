// 1      1
// 12    21
// 123  321
// 12344321

const raw:number = 4;
let spaceCount = raw * 2 - 2;
for(let i = 1; i <= raw; ++i){
    let spaceString:string = ``;
    let result:string = ``;
    for(let k = 1; k <= i; ++k){
        result += k;
    }
    for(let j = 0; j < spaceCount; ++j){
        spaceString += ` `;
    }
    result += spaceString;
    for(let k = i; 0 < k; --k){
        result += k;
    }
    console.log(result);
    spaceCount = spaceCount - 2;
}
