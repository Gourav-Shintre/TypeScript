class personn{
    private name:string;

    public constructor(name:string){
        this.name=name
    }

    public getname(){
        return this.name;
    }

}

const pp=new personn("boss");
console.log(pp.getname())
