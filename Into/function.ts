function num(a:number):number{
    // a.toLowerCase()  it isnot valid wehen we write the type of a
    return 2+a
}

num(3)


let user=(a:number,b:number=9):number=>{
    return a+b
}
user(1)

let b =function demo():void{
    // return 1

}

function demo1(err:string):never{
    throw new Error("error is"+err);
    
}


export{}