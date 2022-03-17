type Fish = { swim: string }
type Bird = { fly: string }

function combineAnimal( animal : Fish | Bird ){ 
    if ('swim' in animal) { 
        animal.swim = ''
    }
}

// object narrowing
let d = new Date()
if (d instanceof Date) { 

}

// 특정 지을 수 있는 type이 있다면 narrowing 가능하다.
type Car2 = {
    model : 4,
    wheel : '4',
    color : string
}

type Bike = {
    // 비슷한 object타입일 경우 literal type을 강제로 사용, 베타적이지 않아서 ( 유니크하지 않음 ) 
    wheel: '2',
    color : string
}

function func2( x : Car2 | Bike) { 
    if (x.wheel === '4') {
        x.color = 'red'
    } else { 
        x.color = 'blue'
    }
}