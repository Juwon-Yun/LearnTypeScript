function multi(x : number) :number{ 
    return x * 2
}

multi(30)

// 함수에서 void 타입 활용 가능 ( 아무것도 리턴하지 않음 ) 
// 타입이 지정된 파라미터는 필수 입력 값이다.

// 파라미터가 옵션인 경우엔 변수?: 타입 
// 변수?:number는 변수:number|undefi
function voidfunc(x : number) :void{ 

}

function quiz( x: number | string) :void { 
    // type Narrowing
    // union type에서 type을 지정하는 방법
    console.log( +x + 3)
}

// 변수가 타입이 불확실하면 if문으로 Narrowing을 해줘야 조작가능
function quiz2(x: number | string) { 
    // if (typeof x === 'string') { 
        // return x + '1'
    // }
    // else {
        // return x  + 1
    // }
    return typeof x === 'string' ?  x + '1' :  x + 1

}

function myfunc( x : number | string) { 
    let array: number[] = []
    if (typeof x === 'number') { 
        array[0] = x
    }

    // assertion 문법, 타입 덮어쓰기
    array[1] = x as number    

    // as 문법의 용도 => Narrowing할 때 사용, 잘못쓰면 ts를 안쓰는것과 같음
    // 무슨 타입이 들어올지 100% 확실할 때 사용한다. 엄격하게 써야함
    let name: string = 'yun'
    
    // 구버전 as 문법
    // <number>name
    
}