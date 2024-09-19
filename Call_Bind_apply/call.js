// const user ={
//     name:"gourav",
//     age:20,
//     city:'hyd',
//     printName: function(){
//         console.log(this.name);
//     }
// }

// const anotheruser={
//     name:"gourav1",
//     age:30,
//     city:'pune'

// }

// user.printName()
// user.printName.call(anotheruser);


let game=function(country,country1){
    // console.log(this);
    
    console.log(this.name,country,country1);
    
}

const gameName={
    name:"BGMI"
}
let bb=game.call(gameName,"India")
game.apply(gameName,["India","Aus"])
let cc=game.bind(gameName,["India","NZ"])
// console.log(bb);
cc();


