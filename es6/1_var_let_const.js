//ปัญหาของการใช้ var
//var name = "john"
//{
//    var name = "jany"
//    console.warn(name);
//}

// function a(){
//     var name = "jany"
//     console.warn(name);
// }

// console.warn(name);

// //ตัวอย่างปัญหาอื่นที่เกิดจาก Var
// var messages = ['Hello','JavaScript','es2015'];
// for(var i=0; i<=messages.length; i++){
//     console.warn(i);

//     setTimeout(function(){
//         console.warn(i);
//         console.warn(messages[i])
//     }, 1000)
// }


//ตัวอย่างการใช้ let
// var fullname;
// var fullname;
// console.log(fullname)

// let fullname;
// let fullname;
// console.log(fullname)

// let name = "john"
// {
//    let name = "jany"
//    console.log(name);
// }

// name = "joey"
// console.log(name)

// let messages = ['Hello','JavaScript','es2015'];
// for(let i=0; i<=messages.length; i++){
//     //console.log(i);
//     setTimeout(function(){
//         //console.log(i);
//         console.log(messages[i])
//     }, 1000)
// }

//ตัวอย่างในการใช้ Const
// const firstname
// console.log(firstname);

// const firstname = "Pirada"
// ลองเปลี่ยนค่า
// console.log(firstname);
// firstname = "AdariP"
// console.log(firstname);

const person ={}
person.name ="Pirada"
person.email ="Pirada621@gmail.com"
console.log(person);