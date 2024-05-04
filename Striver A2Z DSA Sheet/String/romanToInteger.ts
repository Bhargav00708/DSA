// var romanToInt = function (s: string) {
//   var totalSum = 0;
//   var romanObj = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//     IV: 4,
//     IX: 9,
//     XL: 40,
//     XC: 90,
//     CD: 400,
//     CM: 900,
//   };
//   var combineTwo = ``;
//   for (var i = 0; i < s.length; i++) {
//     combineTwo = s[i] + s[i + 1];
//     if (!romanObj.hasOwnProperty(combineTwo)) {
//       totalSum += romanObj[s[i]];
//     } else {
//       totalSum += romanObj[combineTwo];
//       ++i;
//     }
//   }
//   return totalSum;
// };


//2nd solution

const symbols = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

var romanToInt = function(s:string) {
  let value = 0;
  for(let i = 0; i < s.length; i+=1){
    symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
  }
  return value
};

// ! Here we are doing minus because assume that if you have 1000 rupees and CM = 900 so 1000 - C + M = (1000 - 100 + 1000)
// ! so automatically it will become 900 rupees CM

console.log(romanToInt("MCMXCIV"));