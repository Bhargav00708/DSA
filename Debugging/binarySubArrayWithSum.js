var numSubarraysWithSum = function (nums, goal) {
    let obj1 = { 0: 1 };
    let count = 0;
    let total = 0;
    for (let data of nums) {
      total += data;
      obj1[total] = (obj1[total] || 0) + 1;
      let diff = total - goal;
      if (obj1[diff]) {
        count += obj1[diff];
      }
    }
      count = goal ? count : count - nums.length;
    return count;
  };
  
  console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
  