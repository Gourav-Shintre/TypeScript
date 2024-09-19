// let str="Hello";
// let op=str.split("")
// let empty=""
// for(let i=0;i<op.length;i++){
//     empty=op[i]+empty


// }
// console.log(empty);

function reverseString(str){
    let op=str.split("")
    let empty=""
    for(let i=0;i<op.length;i++){
        empty=op[i]+empty
    }
    return empty

}
const a= reverseString("gourav")
console.log(a);


