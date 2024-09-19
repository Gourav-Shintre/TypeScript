abstract class takePhoto{
    cameraMode:string
    filter:string
    constructor(cameramode:string,filter:string){
        this.cameraMode=cameramode
        this.filter=filter
    }
    abstract add(a:number,b:number):number
}

class instragram extends takePhoto{
    bursPhoto:number
    constructor(cameramod:string,filter:string) {
        super(cameramod,filter)
        this.bursPhoto=0

       
    }
    add(a: number, b: number): number {
        return a+b
        
        
    }
    

}
const i=new instragram("sony","anna");
i.bursPhoto=12
console.log(i.add(2,2))
