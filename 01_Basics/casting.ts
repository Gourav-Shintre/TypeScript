let z:unknown=44
console.log( (z as string).length);  //output is undefined  bcz no. have no length

let k:unknown="abc"
console.log( (z as string).length);  //output is 3



// Casting with <> 
let n:unknown="anna";
console.log((<string>n).replace('a','b'));


 