function add(a,b,...c){
    console.log(c);
    
    return a+b+c
}
const a=add(10,20,10,10)
console.log(a);


const arr=['a','b','ccc']

function getl(name1,name2,name3){
    console.log(name1);
    console.log(name2);
    console.log(name3);
    return name1

    
    

}

getl(...arr)
// console.log(aa);

let user ={
    name:"gourav",
    age:23,
    arr:[1,2,3,4]
}
const [first, second, third, fourth] = arr;
const {age,...other}=user
console.log(age);
console.log(other);
console.log(one);




