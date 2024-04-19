const nums: Array<number> = [3,2,5,10,89];
function reverseArray(startPointer: number, endPointer: number){
    if(startPointer === endPointer) return nums;
    [nums[startPointer],nums[endPointer]] = [nums[endPointer],nums[startPointer]]; 
    return reverseArray(++startPointer,--endPointer);
}

console.log(reverseArray(0,nums.length - 1));
