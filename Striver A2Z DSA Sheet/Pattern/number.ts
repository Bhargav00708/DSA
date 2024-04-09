const raw:number = 4;

//1
//22
for(let i = 1; i <= raw; ++i){
    let str:string = ``;
    for(let j = 0; j < i; ++j){
        str += i;
    }
    console.log(str);
}

//1
//12
for(let i = 1; i <= raw; ++i){
    let str:string = ``;
    for(let j = 1; j <= i; ++j){
        str += j;
    }
    console.log(str);
}

//123
//12
for(let i = raw; 0 < i; --i){
    let str = ``;
    for(let j = 1; j <= i; ++j){
        str += j;
    }
    console.log(str);
}
