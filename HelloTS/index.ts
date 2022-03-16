// .ts 파일은 브라우저가 읽지 못한다 
// ts파일을 js를 변환해서 사용함

// types => string, number, boolean, null, undefined, bigint, [], {}등등

const name2: string[] = ['Yun', 'Juwon']

// union type
const juwon:string | number = 1

// type alias( uppercase )
type MyType = string | number

let juwon2 :MyType[] = ['juwon', 1]

function multiple(x :number) :number {
    return x * 2
}

// tuple type
type Member = [number, boolean];
let john: Member = [123, true]

// object type 속성이 많은 경우
type Member2 = {
    // string으로 된 모든 object 속성의 타입은 'string'
    [key :string] : string
}

let park: Member2 = { name: 'asdfasdf', age: '123123' }

// class type 
class User { 
    name :string;
    constructor(name :string) {
        this.name = name
     }
}

// type 문법이외의 기능도 많다.