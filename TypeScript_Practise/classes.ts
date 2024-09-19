class user {
    name :string
    age : number
    constructor(name:string,age:number){
        this.name=name
        this.age=age

    }
}

const  u = new user('abc',20)
u.age=44
console.log(u.age);


class person{
   

    constructor(private name : string){

    }
    get userName ():string{
        return this.name
    }

    set UserName(new_Name : string){
        if(new_Name.length >0){
            console.log(`${new_Name} is valid`);
            
        }else{
            console.log(`${new_Name}Name cannot be empty.`);

        }

    }
}

const p = new person('gourav')
console.log(p.UserName);
p.UserName='anna'
console.log(p.userName);
p.UserName=''
console.log();

export{}