function getLongestUnique(str){
    if(!str){
        return []  
    }
    let start=0;
    let end=0;
    let longestString='';
    let maxLength=0;
    let set=new Set()
    while(end<str.length){
        if(!set.has(str[end])){
            set.add(str[end])
            end++;
            maxLength=Math.max(maxLength,set.size);
            longestString=str.slice(start,end);
            
        }else{
            set.delete(str[start]);
            start++;
        }


    }
    return [maxLength,longestString]


}
console.log(getLongestUnique('abcdaaabgftdfg'))