const arr=[1,2,3,4,5]
function getArray(arr){
    for (let i of arr) {
        for(let j=i+1;j<arr.length;j++){
            if(i+arr[j]===7){
                return [i , arr[j]]
            }
        }
        
    }
    

}
const b=getArray(arr)
console.log(b);


