//การเขียนคำอธิบาย JS
//alert("Hello JSSS")
/*
นี่เป็นการอธิบายแบบหลายบรรทัด
*/

//คำสั่งแสดงข้อความออกไปที่หน้าเว็บ
document.write("Hello Javascript<br>");
document.write("<b>ยินดีต้อนรับทุกท่าน</b>");
document.write("<h1><font color='red'>ยินดีต้อนรับทุกท่าน</h1>");

//การสร้างตัวแปรใน Javascript
var name = "Pirada";
var age = 20;

//การแสดงผลไปที่ Console
console.log(name);
console.log(age);

//Method Cofirmed
var status = confirm("Are you OK?");

console.log(status);

//Method Prompt
var msg = prompt("กรุณาป้อนชื่อ","พิรดา");
console.log(msg);

//Condition Operators
var age = prompt("กรุณาป้อนอายุของคุณ","0");
votable =(age >= 18)? "You can vote":"Cannot vote";
console.log(votable);

//Condition if
var age = 12;
if(age <= 10){
    var x = "Children";
}else if(age <= 20){
    var x = "Young";
}else{
    var x = "Old Man"; 
}

console.log(x);

//ฟังก์ชันดึงวันที่ออกมา
var day = new Date().getDay();
switch(day){
    case 0:
        console.log("sunday");
        document.body.style.backgroundColor = "red";
        break;
    case 1:
        console.log("monday");
        document.body.style.backgroundColor = "yellow";
        break;
    case 2:
        console.log("tuesday");
        document.body.style.backgroundColor = "pink";
        break;
    default:
        console.log("invalid day");
        document.body.style.backgroundColor = "white";
        break;
}
console.log(day);