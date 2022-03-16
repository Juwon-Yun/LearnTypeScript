let name2: string = 'kim'
// name2 = 123, type 지정은 변수에 쉴드를 씌운다
let age: number = 30
let isMarry: undefined = undefined

// 다른 타입이 들어오면 에러 
let Members: string[] = ['kim', 'park']

let members2: { member1: string, member2: string } = { member1: 'kim', member2: 'park' }

// 이외에도 변수 생성시 타입스크립트가 타입을 자동으로 부여한다.
// 즉 :type 을 생략가능하다는것

//Q1
let myName :string = 'yunjuwon'
let myAge: number = 30

let favoriteSong: { singer: string, name: string } = { singer: 'STAYC', name: 'RUN2U' }

let project: {member :string[], days:number, started:boolean} = {
    member: ['kim', 'park'],
    days: 30,
    started : true
}

// union type => 두 가지 이상의 타입을 합친다 
let member: (number | string | boolean) = 1234

//할당 이후에는 정해지지만 재할당을 할 경우 다시 타입이 정해진다. 유동적

let memArr: (number | string)[] = [1, 'kim', 3]

let objects: { a: (string | number) } = { a: 123 }

// any type => type 쉴드 해제 문법 => 일반 js 변수화
let anyType: any
anyType = 123
anyType = []

// unknown Type이 any Type 보다 안전한 이유
let unknownName: unknown
unknownName = 123
unknownName = {}

// unknown Type으로 할당받은 새로운 변수는 타입이 다를 경우 에러를 토한다.
// let variable1 : string = unknownName

// unknown type 은 간단한 수학연산도 타입이 맞아야한다. any는 가능

let age2: string | number
// js에서 + 1은 문자 + 숫자가 가능하지만 ts에서 union type + 1은 안된다. ( string | number != number )
// age2 + 1

// Narrowing, Assertion을 배워서 엄격하게 코드를 짜면된다.

let user : string = 'kim'
let age3 :undefined | number = undefined
let married : boolean = false
let chulsu : (string | undefined | number | boolean )[] = [user, age, married]


let school
    : {
        score: (number | boolean)[],
        teacher: string,
        freind: string | string[]
    } = {
    score: [100, 97, 84],
    teacher: 'Phil',
    freind : 'John'
}

school.score[3] = false
school.freind = ['Lee', school.teacher]