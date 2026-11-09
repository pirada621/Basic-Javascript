//Synchronous & Asyncronous Programming in Javascript

// function doA(){
//     setTimeout(function(){
//     console.log("This is 1st say message");
//     },2000)

// }

// function doB(){
//     console.log("This is 2nd say message");
// }

// //ทดสอบเรียกฟังก์ชะนด้านบน
// doA()
// doB()

//การแก้ปัญหาด้านบนแบบ Asyncronous
function doA(callback){
    console.log("Loading...")
    setTimeout(function(){
    console.log("This is 1st say message");
    },2000)

}

function doB(){
    console.log("This is 2nd say message");
}

//เรียกทำงาน
doA(function(){
    doB()
})