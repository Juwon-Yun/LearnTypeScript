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