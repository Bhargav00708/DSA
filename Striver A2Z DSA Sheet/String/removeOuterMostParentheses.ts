/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S: string) {
  // ! Here we are checking that if ( this sign comes second or more times then we are building our string
  // ! this means we are ignoring it's first time so by that we can remove outer parentheses same while this
  // ! sign ) comes so first we remove ( this sign and if string length is present then we are building it
  // ! same logic as above. 
  let stringStack:string[] = [];
  let buildString = ``;
  for (let data of S) {
    if (data === `(`) {
      if (stringStack.length) {
        buildString += `(`;
      }
      stringStack.push(`(`);
    } else {
      stringStack.pop();
      if (stringStack.length) {
        buildString += `)`;
      }
    }
  }
  return buildString;
};

console.log(removeOuterParentheses(`(()())(())`));

