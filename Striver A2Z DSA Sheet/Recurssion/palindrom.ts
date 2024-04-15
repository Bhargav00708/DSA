const str1:string = "ABCDCBZ";

function isPalindrom(str:string,startPointer:number,endPointer:number):boolean{
    if(startPointer === endPointer){
        return true;
    }
    if(str[startPointer] === str[endPointer]){
        return isPalindrom(str,++startPointer,--endPointer);
    }
    else{
        return false;
    }
}

console.log(isPalindrom(str1,0,str1.length - 1));
