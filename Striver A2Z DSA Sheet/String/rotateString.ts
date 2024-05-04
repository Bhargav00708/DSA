function rotateString(s: string, goal: string): boolean {
  for (let i: number = 0; i < s.length; ++i) {
    let arrayOfs: string[] = s.split("");
    let lastChar: any = arrayOfs.pop();
    let wholeStr = lastChar + arrayOfs.join("");
    s = wholeStr;
    if (wholeStr === goal) {
      return true;
    }
  }
  return false;
}
// ! we can also add string and then find index like = abcde + abcde
// ! abcdeabcde and then we can find cdeab
console.log(rotateString("abcde","cdeab"));
