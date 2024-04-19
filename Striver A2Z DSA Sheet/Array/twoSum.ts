// ? we can use hashmap here. 

const twoSum = function (nums: number[], target) {
  var flag01 = false;
  var ansarray: number[] = [];
  for (var i = 0; i < nums.length - 1; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        ansarray.push(i);
        ansarray.push(j);
        flag01 = true;
        break;
      }
    }
    if (flag01 == true) {
      break;
    }
  }
  return ansarray;
};
