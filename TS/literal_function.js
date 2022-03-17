var myFunc = function (a) {
    return +a;
};
// object 안에 함수 만들기
var memberInfo = {
    name: 'kim',
    // 파라미터가 있는데 타입지정안하면 에러
    pluseOne: function (a) {
        return a + 1;
    },
    changeName: function () { }
};
memberInfo.pluseOne(1);
