// class user{
//     public email:string
//     name:string
//     private readonly  city:string="jaypur"
//     constructor(email:string,name:string){
//         this.email=email
//         this.name=name
//     }
// }
// const a=new user("abc.com","jjj");


class user{
    private readonly  city:string="jaypur"
    constructor(
        public email:string, 
        public name:string
    ){
    
    }
}
const a=new user("abc.com","jjj");

export{}