function getMedian(arr1,arr2){
    let arr=arr1.concat(arr2)
    arr.sort((a,b)=>(a-b))
    let n=arr.length
    if(n%2===0){
        return (arr[n/2] + arr[n/2-1] )/2
    }
    else{
        return arr[Math.floor(n/2)]
    }

}
console.log(getMedian([1,3],[2,2]));
