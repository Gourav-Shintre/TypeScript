function greet(person: { name: string, age?: number }): string {
    return `Hello ${person.name}`;
}

let per = { name: "boss", age: 22 }; // Define per with both name and age properties
console.log(greet(per));


type user={
    readonly id:number,
    name:string,
    age?:number
}

function createUser(u:user){
    return u.name
}
let d={
    id:3,
    name:"ana"
}
console.log(createUser(d));

type cardNumber={
    cardnumber:string
}

type cardDate={
    carddate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:number
}

function card(c:cardDetails){
    return c.carddate;
}
 
let cardd={
    cardnumber:"1222",
    cvv:332,
    carddate:"12-23"
}
card(cardd)