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
