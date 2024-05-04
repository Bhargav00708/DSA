/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s: string) {
  let stackOp: string[] = [];
  let myString = "";
  let allWord = ``;
  // ! Here if any second space will come then in stackOp "" will come that's why we will check with != ""
  for (let data of s) {
    if (data === " ") {
      stackOp.push(myString);
      myString = "";
    } else {
      myString += data;
    }
  }
  stackOp.push(myString);
  console.log(stackOp);
  
  for (let i = stackOp.length - 1; i >= 0; i--) {
    if (stackOp[i] != ``) {
      allWord = allWord + stackOp[i] + " ";
    }
  }
  allWord = allWord.substring(0, allWord.length - 1);
  return allWord;
};

console.log(reverseWords("        the     sky is blue    "));
