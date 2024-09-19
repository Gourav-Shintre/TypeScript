// type annotation in objects
let obj : {
    name: string
    id : number
}
obj={
    name:"gourav",
    id:101
}
console.log(obj.id);

// Const variables must be declared and initialized in a single statement. Separate declaration and initialization is not supported.
// const num3:number 

let num4:string="3"


class demo{
    public val1:number
    public val2:number

    constructor(val1:number,val2:number){
        this.val1=val1
        this.val2=val2
    }
    static add(val1:number,val2:number):number{
        return val1 + val2
    }
}
console.log(demo.add(10,10))

// using square brackets declaring arrays
let fruits:string[]=["appl3","banna",'keli']
// using generic type declarng array
let people:Array<number|string>=[21,34]
fruits.map((i)=>{
    console.log(i);
    

})

for(let i in people){
    console.log(people[i]);
    
}


// tuple  in tuple sequence matters
let person:[number,string]=[22,'oss']

let array1 :[number,boolean]=[12,true]
array1.push(22)
console.log(array1);

let employee: [number, string] = [1, "Steve"];

// retrieving value by index and performing an operation 
employee[1] = employee[1].concat(" Jobs"); 
console.log(employee); //Output: [1, 'Steve Jobs']




// enums
enum printDay{
    sunday=3,
    monday=5,
    tuesday=22
}
console.log(printDay);

console.log(typeof printDay);

export{}