interface takePhoto {
    cameraMode : string,
    filter : string,
    burst : number
}
interface stories{
    createStory():string
}

class instagram implements takePhoto ,stories {
    
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number,
       
    ){}
    createStory():string{
        return 'story created'
        
    }

}
class youtube implements takePhoto {
    
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number,
        public shorts : string
    ){}

}














export{}