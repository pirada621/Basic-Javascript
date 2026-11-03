//การสร้างข้อมูล object
var person = {
    firstname: "Pirada",
    lastname: "Chiaochan",
    age: 22,
    gender: "Female",
    fullName: function() {
        return this.firstname + " " + this.lastname;
    }
}

//การเรียนหรือการเข้าถึงสมาชิกใน object
//Method 1
//objectName.PropertyName
console.log(person.firstname);

//Method 2
//objectName["PropertyName"]
console.log(person["lastname"]);

//Method 3
//objectName.MethodName()
console.log(person.fullName());