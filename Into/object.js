function greet(person) {
    return "Hello ".concat(person.name);
}
var per = { name: "boss", age: 22 }; // Define per with both name and age properties
console.log(greet(per));
function createUser(u) {
    return u.name;
}
var d = {
    id: 3,
    name: "ana"
};
console.log(createUser(d));
