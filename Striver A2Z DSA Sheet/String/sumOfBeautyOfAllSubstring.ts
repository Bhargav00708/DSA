// ! Same Technique as our Object But here Map is faster
// ! So it will work
/**
 * @param {string} s
 * @return {number}
 */
const beautySum = function (s: string) {
  let result = 0;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], 1);
    for (let j = i + 1; j < s.length; j++) {
      if (map.has(s[j])) {
        map.set(s[j], map.get(s[j]) + 1);
      } else {
        map.set(s[j], 1);
      }
      if (map.size >= 2) {
        result = result + freq(map);
      }
    }
    map.clear();
  }
  return result;
};
const freq = (map: Map<string, number>) => {
  let min = 500;
  let max = 1;
  for (let keys of map.values()) {
    min = Math.min(min, keys);
    max = Math.max(max, keys);
  }
  return max - min;
};
