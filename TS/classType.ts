class Person3 { 
    name: string
    constructor(name: string) {
        this.name = name
    }

    func(name : string) { 
        console.log('hi' + name)
    }

}

let per1 = new Person3('park')
let per2 = new Person3('kim')

per1.func('park')

per2.func('kim')

class Car { 
    carName: string
    price: number
    constructor(carName: string, price: number) { 
        this.carName = carName
        this.price = price
    }

    tex():number { 
        return this.price * 0.1
    }
}

class Word{
    num;
    str;
    constructor(...param:[]) {
        let nums: number[] = []
        let strs: string[] = []
        
        param.forEach((i) => {
            typeof i === 'string' ? strs.push(i)  : nums.push(i)
        })
        
        this.num = nums;
        this.str = strs;
    }
}