const title = document.querySelector('.title')
title !== null ? title.innerHTML = '반가워요' : null
title instanceof Element ? title.innerHTML = '반가워요2' : null

// html 요소는 Union 타입이다. 
// Element | null
// title.innerHTMl = '반가워요'

// optional channing 
// title?.innerHTML 

const myFunc2 = () => { 
let link = document.querySelectorAll('.link')
    for (let i = 0; i < link.length; i++) { 
        let temp = link[i]
        if (temp instanceof HTMLAnchorElement) {
            temp.href = 'https://www.kakao.com'
        }
    }
    
}

// link instanceof HTMLAnchorElement ? link.href = 'https://kakao.com' : null

let btn = document.querySelector('.button')
btn?.addEventListener('click', () => { myFunc2() })

