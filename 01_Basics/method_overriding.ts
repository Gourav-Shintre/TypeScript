class sum{
    num1:number
    num2:number
    constructor(num1:number,num2:number){
        this.num1=num1,
        this.num2=num2
    }

    calculation(): number{
        return this.num1 +this.num2
    }

}

class mul extends sum{
    constructor(num1:number,num2:number){
        super(num1,num2);
    }
    calculation(): number {
        return this.num1 * this.num2
        
    }
}

const m=new mul(10,2);
console.log(m.calculation());
const s=new sum(10,2);
console.log(s.calculation());

