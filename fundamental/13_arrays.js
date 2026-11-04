//Basic Array
var name = ['John', 'Joe', 'Jack', 'Jane']; //จะเกิดปัญหาเมื่อใช้งานสมาชิกในตัวแปร
var fruits = new Array('Apple', 'Banana', 'Orange', 'Mango');

//ex
//console.log(typeof(name));
//console.log(typeof(window.name)); //is string

//แสดงผลในสมาขิกออกมา
//console.log(name)
//เช็กชนิดข้อมูลตะวแปรนี้
//console.log(typeof(name));


var firstname = ['John', 'Joe', 'Jack', 'Jane'];
console.log(firstname[0]);
console.log(firstname[1], firstname[3]);

//เปลี่ยนค่าสมาชิก
firstname[1] = "Jany";
console.log(firstname);

//เพิ่มสมาชิกใหม่เข้าไป
firstname[4] = "Johnny";
console.log(firstname);
console.log(fruits);

//การวนลูบอ่านสมาชิกใน Array
for(var i = 0; firstname[i]; i++) {
    console.log(firstname[i]);
}

//การวนลูบด้วยฟังก์ชั้น forEach
fruits.forEach(myFruits);

function myFruits(value){
    console.log(value);
}