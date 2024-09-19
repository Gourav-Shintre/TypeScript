type user={
    readonly id:number
    name:string
    email:string
    password?:string

}

function user_details(u:user){
    console.log(u);
    

}
user_details({id:12,name:'abc',email:'abc@mail.com'})

let myUser :user={
    id:1,
    name:'a',
    email:'a@mail.com'

}

myUser.name='abcd'


type cardNumber={
    cardNumber:number
}
type cardDate={
    cardDate:number
}

type cardDetails = cardNumber & cardDate & {
    cvv : number
}

function card(c:cardDetails){
    console.log(`your card number is ${c.cardNumber}`);
    

}
card({
    cardNumber:123,
    cardDate:2024,
    cvv:123-123

})