class ToyotaCar{
    constructor(name){
        this.name=name
        console.log(`hello ${name}`);
    }

    start(){
        console.log("start");
        
    }
    stop(){
        console.log("stop");
        
    }
    setBrand(brand){
        return this.bran=brand
    }
}
let obj = new ToyotaCar('anna');
// obj.start()
// console.log(obj.setBrand('BMW'))