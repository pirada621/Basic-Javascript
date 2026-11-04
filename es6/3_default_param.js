//ES5
function sayHi(name){
    var name = name || 'Pirada'
    console.log("Hi"+name);
}
sayHi()
sayHi('Pirada')

//ES6
function sayHello(name = 'Pirada'){
    console.log("Hi"+name);
}

sayHello()
sayHello('AdariP')