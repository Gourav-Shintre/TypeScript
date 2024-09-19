let str="abcdefghihbjhjhgfcghjfa"

function getMaxChar(str){
    let string=str.toLowerCase();
    let charArray=string.split("");
    let output={}
    charArray.forEach((i)=>{
        output[i] = output[i] ? output[i] + 1 : 1;
    })
    console.log(output);
    let max=0;
    let max_char='';

    for(let j in output){
        if(output[j]>max){
            max=output[j]
            max_char=j
        }
        
    }
    console.log(`max character is ${max_char} and length is ${max}`);


}
getMaxChar(str)