class User {
    private readonly city: string = "Jaypur";
    protected pNumber: number = 12344;

    constructor(
        public email: string,
        public name: string
    ) {}

    get emailId(): string {
        return `Email ID is ${this.email}`;
    }

    set phoneNumber(pNumber: number) {
        this.pNumber = pNumber;
    }
}

const a = new User("abc.com", "jjj");

// Set phone number using the setter method
a.phoneNumber = 9876543210;

console.log(a); // Output the updated instance of 'a'

export {}; // Export an empty object to comply with TypeScript module system
