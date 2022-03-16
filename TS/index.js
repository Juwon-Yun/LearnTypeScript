var name2 = 'kim';
// name2 = 123, type 지정은 변수에 쉴드를 씌운다
var age = 30;
var isMarry = undefined;
// 다른 타입이 들어오면 에러 
var Members = ['kim', 'park'];
var members2 = { member1: 'kim', member2: 'park' };
// 이외에도 변수 생성시 타입스크립트가 타입을 자동으로 부여한다.
// 즉 :type 을 생략가능하다는것
//Q1
var myName = 'yunjuwon';
var myAge = 30;
var favoriteSong = { singer: 'STAYC', name: 'RUN2U' };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true
};
// union type => 두 가지 이상의 타입을 합친다 
var member = 1234;
//할당 이후에는 정해지지만 재할당을 할 경우 다시 타입이 정해진다. 유동적
var memArr = [1, 'kim', 3];
var objects = { a: 123 };
// any type => type 쉴드 해제 문법 => 일반 js 변수화
var anyType;
anyType = 123;
anyType = [];
// unknown Type이 any Type 보다 안전한 이유
var unknownName;
unknownName = 123;
unknownName = {};
// unknown Type으로 할당받은 새로운 변수는 타입이 다를 경우 에러를 토한다.
// let variable1 : string = unknownName
// unknown type 은 간단한 수학연산도 타입이 맞아야한다. any는 가능
var age2;
// js에서 + 1은 문자 + 숫자가 가능하지만 ts에서 union type + 1은 안된다. ( string | number != number )
// age2 + 1
// Narrowing, Assertion을 배워서 엄격하게 코드를 짜면된다.
var user = 'kim';
var age3 = undefined;
var married = false;
var chulsu = [user, age, married];
var school = {
    score: [100, 97, 84],
    teacher: 'Phil',
    freind: 'John'
};
school.score[3] = false;
school.freind = ['Lee', school.teacher];
