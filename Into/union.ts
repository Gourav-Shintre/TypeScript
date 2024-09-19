let score : number|string=33
score="god"

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    age: number;
}

// Correct initialization of gourav as either a User or Admin
let gourav: User | Admin = {
    name: "Anna",
    id: 1,
};

console.log(gourav);


export{}