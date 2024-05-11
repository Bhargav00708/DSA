// ! Solve that it is not solved still getting error.

function atoi(s: string): number {
  let answer: number | string = 0;
  const regex = /^[-+]?\d+/;
  s = s.trim();
  if (!regex.test(s)) {
    return answer;
  }
  answer = "0";
  if (/^[-+]?[0-9]*/.test(s[0])) {
    answer = s[0];
  }
  for (let i = 1; i < s.length; ++i) {
    if (/[0-9]/.test(s[i])) {
      answer += s[i];
    } else {
      answer = parseInt(answer) as number;
      return answer as number;
    }
  }
  answer = parseInt(answer) as number;
  return answer as number;
}

console.log(atoi("-042"));
