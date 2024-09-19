function getString(str) {
    let string = str.toLowerCase();
    let charArray = string.split("");
    let output = {};

    // Count occurrences of each character
    charArray.forEach(i => {
        output[i] = output[i] ? output[i] + 1 : 1;
    });

    let maxCount = 0;
    let maxChar = '';

    // Find the character with the maximum count
    for (let j in output) {
        // console.log(output);
        
        if (output[j] > maxCount) {
            maxCount = output[j];
            maxChar = j;
            console.log(maxChar);
            
        }
    }

    console.log(`max character is ${maxChar} and length is ${maxCount}`);
}

getString("Gourav G G G G ssssssShintre");
