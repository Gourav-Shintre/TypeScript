function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        console.log(x.toUpperCase());
    }
}

// Example usage:
const dateObj = new Date("1993-02-23");  // Correct format for creating a Date object
logValue(dateObj);
logValue("hello");