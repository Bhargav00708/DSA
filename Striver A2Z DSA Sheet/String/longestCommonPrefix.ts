function longestCommonPrefix(strs: string[]): string {
    let ans:string = ``;
    for(let i = 0; i < strs[0].length; ++i){
        for(let j = 0; j < strs.length-1; ++j){
            if(strs[j][i] !== strs[j+1][i]){
                return ans;
            }
        }
        console.log(ans);
        ans += strs[0][i];
    }
    return ans;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
