// ? Here we can use ^(X-OR) operator or we can also use(n(n+1)/2) approach.

const missingNumber = function(nums:Array<number>) {
    let answer = 0;
    let i = 0;
    for(i = 0; i < nums.length; i++)
        {
            answer = answer ^ nums[i] ^ i;
        }
    return answer ^ i;
}
    