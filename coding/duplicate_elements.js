// function getArray(arr){
//     let output={}
//     for (let i = 0; i < arr.length; i++) {
//         // If the element already exists in the output, it's a duplicate
//         if (output[arr[i]]) {
//             return true;  // Return true if a duplicate is found
//         } else {
//             output[arr[i]] = 1;  // Otherwise, mark it as encountered
//         }
//     }
    
//     return false;  // Return false if no duplicates are found
// }
    

// let arr=[1,2,3,4]
// const a=getArray(arr)
// console.log(a);


let arr=[1,2,3,4,3]
const set = new Set(arr)
// console.log(set);
console.log( set.size !== arr.length);

