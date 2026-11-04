//การเข้าถึง tag ด้วย ID
document.getElementById("result").innerHTML = "Hello Javascript";
document.getElementById("result").style.backgroundColor = "yellow";

document.getElementsByTagName("h1")[0].style.backgroundColor = "pink";
document.getElementsByTagName("h1")[1].style.backgroundColor = "pink";

console.log(document.getElementById("result").innerHTML);

document.getElementsByClassName("myclass")[0].style.backgroundColor = "green";
document.getElementsByClassName("myclass")[1].style.backgroundColor = "green";
document.getElementsByClassName("myclass")[2].style.backgroundColor = "red";