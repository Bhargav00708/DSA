const nums:Array<number> = [-7,90,89,70,90,-8];

for(let i = nums.length - 1; 0 < i; --i){
    for(let j = i; 0 < j; --j){
        if(nums[j] < nums[j-1]){
            [nums[j],nums[j-1]] = [nums[j-1],nums[j]];
        }
    }
}

console.log(nums);
