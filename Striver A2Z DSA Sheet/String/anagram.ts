// ! we can also use the 2 object or hash map and we can also use the sort method

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s: string, t: string) {
  if (s.length != t.length) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    let sIndex = s[i];
    t = t.replace(sIndex, "");
  }
  if (t === ``) {
    return true;
  }
  return false;
};


console.log(isAnagram("anagram","nagaram"));
