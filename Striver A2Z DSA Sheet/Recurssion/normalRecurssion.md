Here’s a JavaScript program that calculates the factorial of a number using recursion:

```javascript
// Function to calculate factorial using recursion
function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: n * factorial of (n - 1)
  return n * factorial(n - 1);
}

// Example usage:
let num = 5;
console.log(`Factorial of ${num} is ${factorial(num)}`);
```

### Explanation:

- The function `factorial(n)` calls itself with the argument `n - 1`.
- The recursion continues until the base case (`n === 0 || n === 1`) is met, at which point it returns 1 and the results are multiplied together as the recursion unwinds.

For example, if `n = 5`, the recursive flow will be:

```
5 * factorial(4)
  4 * factorial(3)
    3 * factorial(2)
      2 * factorial(1)
        1
```

Finally, it returns `5 * 4 * 3 * 2 * 1 = 120`.

Here’s a JavaScript program to calculate the Fibonacci number using recursion:

```javascript
// Function to calculate Fibonacci number using recursion
function fibonacci(n) {
  // Base cases: fib(0) = 0 and fib(1) = 1
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // Recursive case: fib(n) = fib(n - 1) + fib(n - 2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
let num = 6; // Change this to find the nth Fibonacci number
console.log(`Fibonacci number at position ${num} is ${fibonacci(num)}`);
```

### Explanation:

- The function `fibonacci(n)` calls itself with arguments `n - 1` and `n - 2`.
- The base cases are when `n` is `0` or `1`, which return `0` and `1` respectively.
- For all other values of `n`, the function recursively adds the two preceding Fibonacci numbers (`fibonacci(n - 1)` and `fibonacci(n - 2)`).

For example, if `n = 6`, the recursion flow will be:

```
fibonacci(6) = fibonacci(5) + fibonacci(4)
fibonacci(5) = fibonacci(4) + fibonacci(3)
fibonacci(4) = fibonacci(3) + fibonacci(2)
fibonacci(3) = fibonacci(2) + fibonacci(1)
fibonacci(2) = fibonacci(1) + fibonacci(0)
```

The result will be `8`, which is the 6th Fibonacci number in the sequence.

Here’s how you can implement the Fibonacci sequence in JavaScript using recursion with **memoization** to improve performance:

```javascript
// Function to calculate Fibonacci number using recursion and memoization
function fibonacci(n, memo = {}) {
  // Check if the value is already calculated and stored in the memo
  if (n in memo) {
    return memo[n];
  }

  // Base cases: fib(0) = 0 and fib(1) = 1
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // Recursive case: fib(n) = fib(n - 1) + fib(n - 2)
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  return memo[n];
}

// Example usage:
let num = 6; // Change this to find the nth Fibonacci number
console.log(`Fibonacci number at position ${num} is ${fibonacci(num)}`);
```

### Explanation:

- **Memoization** is a technique where we store the results of expensive function calls and return the cached result when the same inputs occur again.
- The `memo` object acts as a cache, storing the Fibonacci number for each `n` that has been calculated. If `fibonacci(n)` has already been computed, it returns the stored result instead of recalculating.
- This avoids the exponential time complexity of plain recursion and brings it down to linear time, i.e., `O(n)`.

For example, with memoization, the recursive flow for `n = 6` would only calculate each Fibonacci number once:

```
fibonacci(6) = fibonacci(5) + fibonacci(4)
fibonacci(5) = fibonacci(4) + fibonacci(3)
fibonacci(4) = fibonacci(3) + fibonacci(2)
fibonacci(3) = fibonacci(2) + fibonacci(1)
fibonacci(2) = fibonacci(1) + fibonacci(0)
```

By storing the results in the `memo` object, it avoids recalculating values like `fibonacci(4)` multiple times.
