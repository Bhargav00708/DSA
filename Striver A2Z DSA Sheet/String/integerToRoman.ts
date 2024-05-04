var intToRoman = function (num:number) {
  let globalArray:any = [
    ["I", 1],
    ["IV", 4],
    ["V", 5],
    ["IX", 9],
    ["X", 10],
    ["XL", 40],
    ["L", 50],
    ["XC", 90],
    ["C", 100],
    ["CD", 400],
    ["D", 500],
    ["CM", 900],
    ["M", 1000],
  ];
  let globalString:string = ``;
  while (num > 0) {
    let flag = false;
    for (let i = 0; i < globalArray.length; i++) {
      if (globalArray[i][1] > num) {
        globalString += globalArray[i - 1][0];
        num -= globalArray[i - 1][1];
        flag = true;
        break;
      }
    }
    if (!flag) {
      globalString += globalArray[12][0];
      num -= globalArray[12][1];
    }
  }
  return globalString;
};

console.log(intToRoman(3749));


// 2nd solution

// int[] values = {1000,900,500,400,100,90,50,40,10,9,5,4,1};
// String[] strs = {"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};

// StringBuilder sb = new StringBuilder();

// for(int i=0;i<values.length;i++) {
//     while(num >= values[i]) {
//         num -= values[i];
//         sb.append(strs[i]);
//     }
// }
// return sb.toString();
// }