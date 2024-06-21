// ? Here we have to iterate from the first with [0,1] and then [0,2] and then
// ? go on and we only have to insert element if it's arr[j] > currentVal

function insertionSort(arr: Array<number>) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j: any;
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      console.log(arr);
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

const arr = [-90, 100, 89, 108, -100];
insertionSort(arr);
