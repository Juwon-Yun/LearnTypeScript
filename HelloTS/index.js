// .ts 파일은 브라우저가 읽지 못한다 
// ts파일을 js를 변환해서 사용함
// types => string, number, boolean, null, undefined, bigint, [], {}등등
var name2 = ['Yun', 'Juwon'];
// union type
var juwon = 1;
var juwon2 = ['juwon', 1];
function multiple(x) {
    return x * 2;
}
var john = [123, true];
var park = { name: 'asdfasdf', age: '123123' };
// class type 
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
// type 문법이외의 기능도 많다.
