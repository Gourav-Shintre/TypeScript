function firstUniqueChar(str) {
    let string = str.toLowerCase();
    let charArray = string.split("");
    let output = {};

    // Count occurrences of each character
    charArray.forEach((char) => {
        output[char] = output[char] ? output[char] + 1 : 1;
    });

    console.log(output); // This prints the character count for debugging purposes

    // Find the first character that occurs only once
   for(let char in output){
    if(output[char]===1){
        console.log(`first unique character is ${char}`);
        return char
    }
   }
    return null
}

let str = 'ababababcgcdddi';
let res=firstUniqueChar(str);
console.log(res);

