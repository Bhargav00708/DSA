/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n: number) {
  let allResult: string[] = [];
  function myBracket(
    openBracket: number,
    closedBracket: number,
    myString: string
  ) {
    // ! if n = 3 so if we get 6 length string then return.
    if (myString.length == 2 * n) {
      allResult.push(myString);
      return;
    }
    // ! Here we are putting this condition because openbracket should always lesser then n.
    if (n > openBracket) {
      myBracket(openBracket + 1, closedBracket, myString + "(");
    }
    // ! Here we are putting this condition because closedbracket should always be lesser then openbracket.
    if (openBracket > closedBracket) {
      myBracket(openBracket, closedBracket + 1, myString + ")");
    }
  }
  myBracket(0, 0, "");
  return allResult;
};

console.log(generateParenthesis(3));
