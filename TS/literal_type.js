// Literal Types
var name23;
// 변수의 값까지 지정하는 타입스크립트 문법
// name23 = 34234;
// 변수에 뭐가 들어올지 더 엄격하게 관리가능
var me;
me = 'solo';
// Literal Type Function
function hello(a) {
    return 1;
}
hello("hello");
// 가위바위보 param
// array return 
var play = function (param) {
    return [param];
};
function play2(param) {
    return [param];
}
// const 변수의 한계
var content = { name: 'kim' };
content.name;
// kim이라는 type만 들어올 수 있다.
function myF(a) {
    return a;
}
// type은 string, 즉 kim이 아니기에 에러
// myF(content.name as 'kim')
// as const 라는 키워드 사용하기
//  1. object value 값을 그대로 타입으로 지정해줌
//  2. object 속성들을 모두 readonly 붙여줌
// let content = { readonly name: 'kim' } = let content = { name: 'kim' } as const
