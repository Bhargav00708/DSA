// ! count number of substring.
// ! we can create two hashmap one till num char and second till num - 1 unique char
// ! like if we have abbbcccdaaa
// ! if num is 3
// ! so here in num-1 hashmap 0-4 and in num hashmap 0-6
// ! so here we can get abbbc,abbbcc,abbbccc excetly 3 unique char.
function kDistinctChar(str: string, num: number) {
  let firstPointer = 0;
  let secondPointer = 0;
  const obj = {};
  const answer: string[] = [];
  while (secondPointer < str.length) {
    obj[str[secondPointer]] = ++obj[str[secondPointer]] || 1;
    const objKeysLength = Object.keys(obj).length;
    if (objKeysLength === num) {
      let buildString = ``;
      for (let i = firstPointer; i <= secondPointer; ++i) {
        buildString += str[i];
      }
      answer.push(buildString);
    } else if (objKeysLength > num) {
      delete obj[str[firstPointer]];
      ++firstPointer;
      const objKeysLength = Object.keys(obj).length;
      if (objKeysLength === num) {
        let buildString = ``;
        for (let i = firstPointer; i <= secondPointer; ++i) {
          buildString += str[i];
        }
        answer.push(buildString);
      }
    }
    ++secondPointer;
  }
  return answer;
}

console.log(kDistinctChar("abaaca", 1));
