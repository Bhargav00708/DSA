//     *    
//    ***
//   *****

const raw:number = 5;
const space:string = ``;
let spaceCount = raw - 1;
let startCount = 1;
for(let i = 0; i < raw; ++i){
    let result:string = ``;
    let spaceString:string = ``;
    for(let k = 0; k < spaceCount; ++k){
        spaceString += ` `;
    }
    for(let j = 0; j < startCount; ++j){
        result += `*`; 
    }
    result = spaceString + result;
    spaceString = ``;
    for(let k = 0; k < spaceCount; ++k){
        spaceString += ` `;
    }
    result += spaceString;
    console.log(result);
    --spaceCount;
    startCount = startCount + 2;
}
