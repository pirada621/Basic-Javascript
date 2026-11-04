//ฟังก์ชั่นแบบไม่มีการรับ parameter
function wakeup() {
    console.log('Hey! wakeup now');
}

//ฟังก์ชั่นแบบมีการรับ parameter
function sayHello(name) {
    console.log("Hello " + name);
}

//ฟังก์ชั่นแบบมี parameter หลายตัว
function calArea(width, height) {
    var area = width * height;
    return area;
}

//การเรียกใช้งานฟังก์ชั่น
wakeup();
sayHello("Pirada");
console.log("พื้นที่คือ " + calArea(3, 4) + " ตารางเมตร");

//ฟังก์ชั่น Expression
//เป็นการเก็บฟังก์ชั่นลงในตัวแปร
var action  = function(a, b) { //anonymous function
    return a * b;
};
var result = action(4, 3);

console.log(action(3, 5));
console.log(result);
