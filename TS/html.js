var title = document.querySelector('.title');
title !== null ? title.innerHTML = '반가워요' : null;
title instanceof Element ? title.innerHTML = '반가워요2' : null;
// html 요소는 Union 타입이다. 
// Element | null
// title.innerHTMl = '반가워요'
// optional channing 
// title?.innerHTML 
var myFunc2 = function () {
    var link = document.querySelectorAll('.link');
    for (var i = 0; i < link.length; i++) {
        var temp = link[i];
        if (temp instanceof HTMLAnchorElement) {
            temp.href = 'https://www.kakao.com';
        }
    }
};
// link instanceof HTMLAnchorElement ? link.href = 'https://kakao.com' : null
var btn = document.querySelector('.button');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function () { myFunc2(); });
