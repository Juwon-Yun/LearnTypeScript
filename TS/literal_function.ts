 type functionType = (a: string) => number;

let myFunc:functionType = function (a) { 
    return +a
}

// object 안에 함수 만들기
let memberInfo = {
    name: 'kim',
    // 파라미터가 있는데 타입지정안하면 에러
    pluseOne(a : number) :number{ 
        return a + 1
    },
    changeName: () => { }
}

memberInfo.pluseOne(1)

