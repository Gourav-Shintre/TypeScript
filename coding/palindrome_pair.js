function palendromePair(arr){
    let len=arr.length;
    let list=[]
    for(let i=0;i<len;i++){
        let str1=arr[i]
        let right=str1.length-1;
        let left=0
        let isPal=true
        while(left<right){
            if(str1[left]!==str1[right]) {
                isPal=false;
                break;
            }
            left++;
            right--;
        }
        if(isPal){
            list.push(str1)
        }
    }
    return list

}
console.log(palendromePair(['madam','boss','anna','ganna','dad']))