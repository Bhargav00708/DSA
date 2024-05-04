function isIsomorphic(s: string, t: string): boolean {
  let obj: { [index: string]: string } = {};
  let obj2: { [index: string]: number } = {};

  for (let i = 0; i < s.length; ++i) {
    if (obj[s[i]]) {
      if (obj[s[i]] !== t[i]) {
        return false;
      }
    } else {
      obj[s[i]] = t[i];
    }
  }
  // for s = badc and t = baba case.
  for (let data of t) {
    obj2[data] = ++obj2[data] || 1;
  }
  if (Object.keys(obj).length !== Object.keys(obj2).length) {
    return false;
  } else {
    return true;
  }
}
