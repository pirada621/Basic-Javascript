export default class User { //มีการเติม default ไปหลัง export
    constructor(name){
        this.name =name;
    }
    sayHi(){
        console.log('Hi'+this.name)
    }
}