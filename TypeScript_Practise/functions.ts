function sum(num1:number,num2:number):number{
    return num1+num2;
}

sum(12,34)

function getUpper(val:string):string{
    return val.toUpperCase()
}
getUpper('hello')

let loginUser=(name:string,password:string,age?:number)=>{
    console.log(name,password,age);
    

}
loginUser('abc','abc@123',12)