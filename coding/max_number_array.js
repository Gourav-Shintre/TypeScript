function getMaxNum(arr){
    let largestNumber=arr[0];
    let secondLargNumber=arr[0]
    for(let i=0; i<arr.length;i++){
        if(arr[i]>largestNumber){
            secondLargNumber=largestNumber;
            largestNumber=arr[i]
        }
        else if (arr[i]> secondLargNumber){
            secondLargNumber=arr[i]
        }
    }
    return {largestNumber ,secondLargNumber}

}

const obj= getMaxNum([12,3,5,234,89,344,233])
console.log(obj);
