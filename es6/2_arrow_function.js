//ES5
var greet = function(name, message){
    return message+ name
}

console.log(greet('Pirada','Hello'))

//ES6
// var arrowGreet = (name, message) => {
//     return message+name
// }

//ลดรูปกรณีมีการ return เพียงอย่างเดียว
//var arrowGreet = (name,message)=> message + name

//ลดรูปต่อไปได้อีกถ้าฟังก์ชั่นมีการรับเพียง 1 paramiter
var arrowGreet = (message)=> message
console.log(arrowGreet('Hello Every Body'))

//ตัวอย่าง
var square = x => x*x
console.log(square(3))