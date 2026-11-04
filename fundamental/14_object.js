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

//Oject Nested มีการซ้อนกันมากกว่า 1 ชั้น
var user = {
    id: 1,
    email: "john@email.com",
    personalInfo: {
        name: "John",
        address: {
            line1: "255 Piboonsongkram Rd.",
            line2: "Bangsue Distric",
            city: "Bangkok",
            zipcode: "10300"
        }
    }
}

//การเข้าถึงสมาชิก
console.log(user.personalInfo);
console.log(user.personalInfo.name);
console.log(user.personalInfo.address);
console.log(user.personalInfo.address.city);