//ตัวอย่างการสร้าง class ใน javaScript
class Person{
    
    //สร้าง constructor
    constructor(name){
        this.name = name
    }

    sayHi(){
        console.log('Hi, My name is' + this.name)
    }

    get gender(){
        return this._gender
    }

    set gender(g){
        this._gender = g
    }
}

//การสร้าง object หรือ instance
const p = new Person('Pirada')
console.log(p.name);
p.sayHi()

p.gender = "Famale"
console.log(p.gender);