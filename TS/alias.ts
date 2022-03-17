// type alias 
type AnimalType = string | number | undefined

let animal: AnimalType = 123;

type Person = { name: string, age: number }
 
let person1: Person = { name: 'y', age: 1 }

// object , const 
// ts에서는 object element의 수정까지 막을 수 있다.
const info = { region: 'Seoul' }
info.region = 'Daejun'

// readonly 속성으로 수정 불가능하게 함
// ? => 기존 타입 + undefine 가능
type GirlFriend = { readonly name?:string}

const girlFriend : GirlFriend = {
    name : 'Ember'
}

// 수정시 에러
// 타입스크립트 에러는 에디터 & 터미널에서만 존재함
// girlFriend.name = 'Yura'

type Name = string;
type Age = number;

type PersonType = Name | Age

// & 연산자로 object 타입 합치기
type PositionX = { x: number }
type PositionY = { y: number }

// { x : number, y : number }로 합치기

type NewType = PositionX & PositionY

// object extend 하기
const positionXY:NewType = { x  : 10, y : 20 }


// 참고 같은 이름의 type 변수는 재정의 불가능함