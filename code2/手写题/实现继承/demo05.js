let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"],
    getName: function () {
        return this.name;
    },
};
function createAnother(original) {
    let clone = Object.create(original); // create a new object by calling a function
    clone.sayHi = function () {
        // augment the object in some way
        console.log("hi");
    };
    clone.getFriends = function () {
        console.log(this.friends);
    };
    return clone; // return the object
}
let anotherPerson = createAnother(person);
anotherPerson.sayHi(); // "hi"
anotherPerson.getFriends(); // ["Shelby", "Court", "Van"]
