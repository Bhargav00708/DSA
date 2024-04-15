const nums:Array<number> = [-7,90,89,70,90];

for(let i = nums.length; 0 < i; --i){
    for(let j = 0; j < i - 1; ++j){
        if(nums[j] > nums[j+1]){
            [nums[j],nums[j+1]] = [nums[j+1],nums[j]]; 
        }
    }
}

console.log(nums);
