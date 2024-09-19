function getNumber(arr){
    let output={}
    arr.forEach((i)=>{
        output[i] = output[i] ? output[i] + 1 : 1;
    })
    let max_count=0;
    let number=0;
    for(let j in output){
        
        if(output[j]>max_count)
        {
            max_count=output[j]
            number=j
        }
    }
    return [number,max_count]

}
let arr=[1,2,3,4,4,42,3,4,3,3]
let a=getNumber(arr)

console.log(a);
