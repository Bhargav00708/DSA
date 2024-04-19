const singleNumber = function(nums) {
    let demo = nums[0];
    for(let i = 1; i < nums.length; i++)
        {
            demo ^= nums[i];
        }
    return demo;
};