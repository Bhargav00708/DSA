// ? Here if nums[i] > nums[i+1] count is > 1 so it is not sorted and if count is 1 so check that
// ? nums[0] > nums[nums.length - 1] if this condition is not met so it is not sorted if count is 1


const check = function (nums:number[]) {
    let count = 0;
    for(let i = 0; i < nums.length; i++)
        {
            if(nums[i] > nums[i+1])
               {
                ++count;
               }
        }
    if((count > 1) || ((count == 1) && nums[0] < nums[nums.length-1]))
        {
            return false;
        }
    return true;
};

console.log(check([1,2,3,4,5,6,1]));
