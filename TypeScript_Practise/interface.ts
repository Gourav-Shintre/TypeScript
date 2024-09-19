interface game {
    readonly gameName: string,
    gameSize:string,
    gameType:string,
    startTrail():string
    getCoupon(value:number,name : string):number

}
const game1 : game ={
    gameName: 'BGMI',
    gameSize:'2GB',
    gameType: 'Gun',
    startTrail(){
        return 'anna'
    },
    getCoupon : (val:10 , na:'abc') => {
        return 10
    }

}
game1.gameSize='3GB'
// game1.gameName='hh'    readonly
console.log(game1.gameName);
console.log(game1.startTrail());


interface admin extends game {
    role : "admin" | "user" | "learner"
    
}

const hero : admin = {
    gameName: 'BGMI',
    gameSize:'2GB',
    gameType: 'Gun',
    startTrail(){
        return 'anna'
    },
    getCoupon : (val:10 , na:'abc') => {
        return 10
    },

    role : "admin",


}


export{}