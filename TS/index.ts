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