/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s: string) {
  let globalObj = {};
  let length = 0;
  let maxLength = 0;
  let realsubStr = 0;
  for (let i = 0; i < s.length; i++) {
    if (globalObj.hasOwnProperty(s[i])) {
      if (realsubStr < globalObj[s[i]]) {
        realsubStr = globalObj[s[i]];
      }
      length = i - realsubStr;
    } else {
      ++length;
    }
    globalObj[s[i]] = i;
    if (maxLength < length) {
      maxLength = length;
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abba"));
