

function getFirstElement<gen>(array :gen[]){
    return array[0]

}
const score=[10,20,30]
const names=['anna','gana']
console.log(getFirstElement(score));
console.log(getFirstElement(names));


type ApiResponse<generic>={
    data:generic,
    isError:boolean
};

type userResponse=ApiResponse<{name:string,age:number}>

const response:userResponse={
    data:{
        name:"boy",
        age:91
    },
    isError:false,
}

export{}