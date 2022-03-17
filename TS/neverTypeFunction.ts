// :void 로 대체가능하기때문에 필요가없다.
function errorFunc(): never {
    throw new Error('this')
}

function errorFunc2(): never {
    while (true) { 
    }
}

function errorFunc3(param: string){
    if (typeof param === 'string') {
        console.log(param)
    } else{
        console.log(param)
    }
}


