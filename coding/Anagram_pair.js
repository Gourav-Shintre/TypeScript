function getAnagram(arr){
    let len=arr.length;
    let list=[];
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            str1=arr[i].split("");
            str2=arr[j].split("");
            if(str1.length===str2.length){
                str1.sort();
                str2.sort();
                let isAnagaram=true
                for(k=0;k<str1.length;k++){
                    if(str1[k]!==str2[k]){
                        isAnagaram=false
                        break;
                    } 
                }
                if(isAnagaram===true){
                    list.push([arr[i],arr[j]])
                }
                
            }
        }
    }
    return list

}
console.log(getAnagram(['bat','cat','tab']))