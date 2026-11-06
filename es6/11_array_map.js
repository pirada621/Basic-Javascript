const array = [1, 2, 3]
//------------[2, 4, 6]
//หรือเรียกว่า mutate array

// for(let i=0; i<array.length; i++){
//     array[i]= array[i]*2
// }
// console.log(array);

//วิธีแก้ไข
const result =[]
// for(let i=0; i<array.length; i++){
//     const a= array[i]*2
//     result.push(a)
//}

array.forEach(e=>{
    const a = e*2
    result.push(a)
});

//ปัญหายังคงมีอยู่ เรื่อง side effect
console.log(result);
console.log(array);


console.log("--------------------");

//ลองมาใช้ Array Map
//const result_map = array.map(result => result*2)
console.log(array.map(result => result*2));
//console.log(result_map);
console.log(array);