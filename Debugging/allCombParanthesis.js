/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  let allResult = [];
  function myBracket(openBracket, closedBracket, myString) {
    // ! if n = 3 so if we get 6 length string then return.
    if (myString.length == 2 * n) {
      allResult.push(myString);
      return;
    }
    // ! Here we are putting this condition because open bracket should always lesser then n.
    if (n > openBracket) {
      myBracket(openBracket + 1, closedBracket, myString + "(");
    }
    // ! Here we are putting this condition because closed bracket should always be lesser then open bracket.
    if (openBracket > closedBracket) {
      myBracket(openBracket, closedBracket + 1, myString + ")");
    }
  }
  myBracket(0, 0, "");
  return allResult;
};

console.log(generateParenthesis(2));
