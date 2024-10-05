// next permutation means just next bigger number then current number like
// [1,2,3,4] 1234 => 1243(next bigger number)
// if [4,3,2,1] then 4321 => 1234
// mutative!
function swapValuesByIndex(array: Array<number>, index1: any, index2: any) {
  let value1 = array[index1];
  array[index1] = array[index2];
  array[index2] = value1;
}

// mutative!
function reversePartOfArray(
  array: Array<number>,
  startIndex: any,
  endIndex: any
) {
  while (startIndex < endIndex) {
    swapValuesByIndex(array, startIndex, endIndex);
    startIndex += 1;
    endIndex -= 1;
  }
}

function findLastIndexWhere(array: Array<number>, callbackFn: any) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (callbackFn(array[i], i)) return i;
  }
}

// mutative!
function nextPermutation(nums: any) {
  // step 1: find the last digit that decreases from the one after it
  // Here we are finding index in which number is smaller then it's next number
  // we have to replace that index
  // [1, 2, 3, 5, 4] here we replace number three which is at index 2 we can also replace it with
  // number 5 also but here one edge case like if we replace with it 4 so we get smaller big number then if we replace it with 5
  // so we can't replace it with 5 so in second loop we will find that 4 number
  const firstIndex = findLastIndexWhere(
    nums,
    (num: any, i: any) => nums[i + 1] !== undefined && num < nums[i + 1]
  );

  // step 1a: if the whole array is monotonically increasing from end to beginning, reverse the entire array
  // if we are not able to find next bigger number so it will be last number
  // [4,3,2,1] here we have to reverse entire array to get next permutation
  if (firstIndex === undefined) {
    reversePartOfArray(nums, 0, nums.length - 1);
    return;
  }

  // step 2: find the last digit that is larger than our "pivot" digit
  // here that case comes [1, 2, 3, 5, 4] here we will find 4 number index
  const secondIndex = findLastIndexWhere(
    nums,
    (num: any, i: any) => num > nums[firstIndex]
  );

  // step 3: swap those digits
  swapValuesByIndex(nums, firstIndex, secondIndex);

  // step 4: reverse the part of the number after the swapped one
  // after we have to reverse that left array [1,2,3,4,3,2,1]
  // like here [3,3,2,1] so if we reverse it we can find smaller because we
  // already swap 2 and 3 index means 4 and 3 number
  // here we can use this method because we can notice that in left array we will
  // always get number in descending order
  reversePartOfArray(nums, firstIndex + 1, nums.length - 1);
  return nums;
}

// time complexity: O(n + n + n) = O(n)
// space complexity: O(1)

console.log(nextPermutation([1, 2, 3, 5, 4]));
