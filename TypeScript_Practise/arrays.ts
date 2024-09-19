let namees:string[]=['abc','xyz']

namees.push("anna")
// namees.push(12)
console.log(namees);


let heross : Array<number|string>=['bbbb',22]
heross.push('annaa')
heross.push(12)
console.log(heross);


type user1={
    name:string,
    age:number
}

const allUsers : user1[]=[]

allUsers.push({name:"nnnn",age:12})
console.log(allUsers[0].age);
