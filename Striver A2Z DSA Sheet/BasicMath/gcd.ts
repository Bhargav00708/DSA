// ? gcd is the greatest number which is divided by both a and b like in 4 and 8 gcd is 4

// ? this is Euclidean algorithms.

// ? Time Complexity: O(logmin(a,b)), where ɸ is 1.61.

function gcd(a: number, b: number) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

console.log(gcd(8, 4));
