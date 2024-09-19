function getFirstPositive(arr){
    let numSet= new Set(arr);
    for(let i=1;i<arr.length+1;i++){
        if(!numSet.has(i)){
            return i;
        }
    }

}
console.log(getFirstPositive([1,2,3,4]));
