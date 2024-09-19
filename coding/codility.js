function findCommonCharacter(S) {
    const N = S.length;
    // Loop through all pairs of strings in S
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            const str1 = S[i];
            const str2 = S[j];
            // return [i,j]
            // Loop through the characters of the strings and check for common characters at the same index
            for (let k = 0; k < str1.length; k++) {
                if (str1[k] === str2[k]) {
                    // Return the indices of the strings and the common character position
                    return [i, j, k];
                }
            }
        }
    }
    
    // If no pair is found, return an empty array
    return [];
}

// Example usage:

console.log(findCommonCharacter(["abc", "bca", "dbe"])); // Output: [0, 2, 1]
// console.log(findCommonCharacter(["zzzz", "ferz", "zdsr", "fgtd"])); // Output: [0, 1, 3] or [1, 3, 0]
// console.log(findCommonCharacter(["gr", "sd", "rg"])); // Output: []
// console.log(findCommonCharacter(["bdafg", "ceagi"])); // Output: [0, 1, 2]
