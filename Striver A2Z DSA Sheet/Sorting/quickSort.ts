// Swap helper
function swap(arr: Array<number>, i: number, j: number) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return temp;
}
// Pivot helper
function pivot(arr: Array<number>, start = 0, end = 0) {
  let pivot = arr[start];
  let swapIdx = start;

  // ! Here Write your own logic
  // ! like [10,8,11,9] so here 8 is i and 9 is j and then increment i till you found arr[i] > arr[pivot]
  // ! and then decrement j till arr[j] <= arr[pivot] and do this till i > j and then replace arr[j] with arr[pivot]
  // ! abdul bari video
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(
  arr: Array<number>,
  left: number = 0,
  right: number = arr.length - 1
) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([11, -1, 10, 9]));
