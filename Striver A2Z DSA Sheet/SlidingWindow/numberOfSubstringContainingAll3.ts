// here check if there is that number then increment j it will be maximum increment till i - 2 and then length - i
// this trick will helpful for Finite characters like a,b,c,d or you have to use hash map

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let a = 0,
    b = 0,
    c = 0,
    result = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    if (s[i] == "a") ++a;
    if (s[i] == "b") ++b;
    if (s[i] == "c") ++c;
    while (a && b && c) {
      result += s.length - i;
      if (s[j] == "a") --a;
      if (s[j] == "b") --b;
      if (s[j] == "c") --c;
      ++j;
    }
  }
  return result;
};
