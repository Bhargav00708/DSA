function totalFruit(fruits) {
  let right = 0;
  let left = 0;
  const map = new Map();
  while (right < fruits.length) {
    if (!map.has(fruits[right])) {
      map.set(fruits[right], 1);
    } else {
      const count = map.get(fruits[right]) + 1;
      map.set(fruits[right], count);
    }
    if (map.size > 2) {
      const count = map.get(fruits[left]) - 1;
      if (count === 0) {
        map.delete(fruits[left]);
      } else {
        map.set(fruits[left], count);
      }
      ++left;
    }
    ++right;
  }
  return right - left;
}

console.log(totalFruit([1, 2, 3, 2, 2]));
