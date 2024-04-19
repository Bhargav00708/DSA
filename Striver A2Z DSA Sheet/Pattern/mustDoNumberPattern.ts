// 1      1
// 12    21
// 123  321
// 12344321

// const raw:number = 4;
// let spaceCount = raw * 2 - 2;
// for(let i = 1; i <= raw; ++i){
//     let spaceString:string = ``;
//     let result:string = ``;
//     for(let k = 1; k <= i; ++k){
//         result += k;
//     }
//     for(let j = 0; j < spaceCount; ++j){
//         spaceString += ` `;
//     }
//     result += spaceString;
//     for(let k = i; 0 < k; --k){
//         result += k;
//     }
//     console.log(result);
//     spaceCount = spaceCount - 2;
// }


const raw = 9;
const printNum = (raw + 1) / 2;
let result = ``;
for(let i = 0; i < raw; ++i){
    result += printNum;
}
console.log(result);

let dummyPrintNum = printNum - 1;
const flag = dummyPrintNum;
let dummyResult = result.split("");
let startPoint = 1; 
let endPoint = raw - 2;
let flagOp = false;
for(let i = 0; i < raw - 2 ; ++i){
    let tempResult = dummyResult;
    for(let j = startPoint; j <= endPoint; ++j){
        tempResult[j] = String(dummyPrintNum);
    }
    console.log(tempResult.join(""));
    dummyResult = tempResult;
    if(startPoint < flag && !flagOp){
        ++startPoint;
        --endPoint;
        --dummyPrintNum;
    }
    else{
        flagOp = true;
        --startPoint;
        ++endPoint;
        ++dummyPrintNum;
    }
}
result = ``;
for(let i = 0; i < raw; ++i){
    result += printNum;
}

console.log(result);
