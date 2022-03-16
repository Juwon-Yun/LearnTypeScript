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
