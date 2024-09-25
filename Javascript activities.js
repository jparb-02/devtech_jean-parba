let  obj = {};

let person = {
    name: "Patricia",
    age: 96,
}

Object.setPrototypeOf(Object, person);

console.log(Object.getPrototypeOf(Object));

console.log(Object.getPrototypeOf(Object) == person)