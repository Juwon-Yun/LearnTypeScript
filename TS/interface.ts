interface Square { color: string, width : number }

let sq: Square = { color: '', width: 100 }

// interface Student { name: string }
// interface Teacher { name : string, age : number}
interface Student { name: string }

// 중복가능
interface Student { region : string}

interface Teacher extends Student{ age : number}

let student: Student = { name: 'kim', region : '' }
let teacher: Teacher = { name: 'park', age: 30 , region : '' }

// interface의 장점 : extends가 가능함

// intersection Type
type Animal2 = { name: string }
type Cat = { age: number } & Animal2
