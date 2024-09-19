class parent {
    constructor(name){
        this.name=name
        console.log("Hey buddy",name);
        
    }
    hello(){
        console.log("hello from parent");
        
    }
}
class child extends parent {
    constructor(name){
        super(name)
        console.log("hey buddy from child");
        
    }
    hello(){
        console.log("hello from child");
        
    }
    bye(){
        super.hello()
        console.log("Bye");
        
    }
}

let a= new child('annna')
a.bye()
// a.hello()