// ! Tech dose DP problem.

var longestPalindrome = function (s: string) {
  let longest = "";

  // here we are checking two scenarios index and their left and right
  // and in second scenarion we are taking index and index + 1(means index-1,index+1) and their
  // left right element
  const findLongestPalindrome = (str: string, i: number, j: number) => {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
      i -= 1;
      j += 1;
    }
    // slice the qualified substring from the second last iteration
    return str.slice(i + 1, j);
  };
  for (let i = 0; i < s.length; i++) {
    // palindrome can center around 1 or 2 letters
    const current1 = findLongestPalindrome(s, i, i);
    const current2 = findLongestPalindrome(s, i, i + 1);
    const longerPalindrome =
      current1.length > current2.length ? current1 : current2;
    if (longerPalindrome.length > longest.length) {
      longest = longerPalindrome;
    }
  }
  return longest;
};

console.log(longestPalindrome("babad"));
