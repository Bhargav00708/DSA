// Only the first (intLength + 1) / 2 characters matter. The remaining characters are just a reflection.

// Say intLength == 7, so we consider only 4 characters. The minimum number is 1000 and maximum - 9999.

// Therefore, we can have 9999 - 1000 + 1 == 9000 palindromes. To find out the palindrome, we add a q - 1 to the minimum number, reverse, and concatenate.

// For example, for query 8765, the base number is 1000 + 8765 - 1 == 9764. Concatenating it with 679, we get 9764679 as the result.

var kthPalindrome = function (queries, intLength) {
  var kthPalindrome = function (queries, intLength) {
    let output = [];
    // 1. We use FIRST 2 digits to create palindromes: Math.floor((3+1)/2)=2
    let digit = Math.floor((intLength + 1) / 2);

    for (let i = 0; i < queries.length; i++) {
      // 10 + 1 - 1;
      let helper = 10 ** (digit - 1) - 1 + queries[i];
      if (helper >= 10 ** digit) {
        output.push(-1);
      } else {
        // 3-2 = 1
        let m = intLength - digit;
        // reverse only last digit
        let add = helper.toString().substr(0, m).split("").reverse().join("");
        helper = helper * 10 ** m + add * 1; // add * 1 to convert it into string;
        output.push(helper);
      }
    }
    return output;
  };
};

console.log(kthPalindrome([1, 2, 3, 4, 5, 90], 3));
