//Join Array
const numbers = [10,20,30,40]
console.log(numbers.join());
console.log(numbers.join(','));
console.log(numbers.join('-'));
console.log(numbers.join('+'));
console.log(numbers.join(''));

//หาผลรวมสมาชิก
console.log(numbers[0]+numbers[1]+numbers[2]+numbers[3])//100

//ใช้ loop หาผลรวม
let result = 0
for(let i = 0; i < numbers.length; i++){
    result += numbers[i]
}
console.log(result);//100

//Reduce Array
const result_data = numbers.reduce((sum,number) => {
    return sum + number
},0)
console.log(result_data);//100

//Concat ของ Array เป็นการรวม Array
const myarr1 = [5,6,7]
const myarr2 = [8,9,10]

//const myresult = myarr1 + myarr2
const myresult = myarr1.concat(myarr2)
console.log(myresult)
console.log(myarr1)
console.log(myarr2)

//Push
const mutate = ['red','green']
const count = mutate.push('blue')
console.log(mutate);
console.log(count);

//Pop //ลบสมาชิกของ array
const pop = mutate.pop()
console.log(mutate);
console.log(pop)

//Shift ลบสมาชิกตัวแรกออก
const shift = mutate.shift()
console.log(mutate);
console.log(shift);

//Unshift เพิ่มสมาชิกกลับเข้าไปตัวแรก
const unshift = mutate.unshift('red')
mutate.unshift('yellow')
console.log(mutate);
console.log(unshift);

console.log('--------------');

//Splice //ดึงข้อมูลสมาชิกแบบระบุตำแหน่งที่แน่นอน
const mutate_arr = ['red','green','0','1','blue']
//const spilced = mutate_arr.splice()
// const spilced = mutate_arr.splice(0) //การกำหนดตำแหน่งว่าจะเริ่ม remove จากตัวที่ 0
//const spilced = mutate_arr.splice(1)
//const spilced = mutate_arr.splice(1,1) //ลบจากลำดับที่ 1 และลบออก 1 ตัว
//const spilced = mutate_arr.splice(2,2) //ลบจากลำดับที่ 2 และลบออก 2 ตัว
const spilced = mutate_arr.splice(2,2,'white','pink')

console.log(mutate_arr);


//Silce
const mutate_arr1 = ['red','green','0','1','blue']
//const sliced = mutate_arr1.slice(1)
//const sliced = mutate_arr1.slice(1,2) //ดึงตั้งแต่ตำแหน่งที่1 ถึง2 แต่ไม่รวม2
//ถ้าส่งค่า Slice เข้าไปเฉยๆ ไม่ระบุตำแหน่ง จะเป็นการ copy arry
const sliced = mutate_arr1.slice()
console.log(sliced);

//Avoid array Mutation
const fruits = ['banana','apple','mangu']
//หากอยากเพิ่ม strawberry เข้าไปหน้า apple โดยไม่เปลี่ยนแปลงค่าใน fruits เดิมจะทำอย่างไร

// const newFruit = [
//     ...fruits.slice(0,1),
//     'strawberry',
//     ...fruits.slice(1)
// ]

// console.log(newFruit);
// console.log(fruits);

//อยากลบ apple ออกจาก array ตัวใหม่
const newFruit = [
    ...fruits.slice(0,1),
    ...fruits.slice(2)
]

console.log(newFruit);

console.log('--------------');

//การวนลูป Array
const num_arr = ['one','two','three']
num_arr.forEach(result=>{
    console.log(result);
})

console.log('--------------');

//For of
for(const v of num_arr){
    if(v == 'two'){
        //break
        continue
    }
    console.log(v);
}

console.log('--------------');

//การค้นหาตำแหน่งสมาชิกของ array
const num_arrays = [1,4,8,10,8,11,12]
//const index = num_arrays.indexOf(10)
const index = num_arrays.indexOf(8)
console.log(index);

//findindex
const found = num_arrays.findIndex(e=>e%4==0)
console.log(found);