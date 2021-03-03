//Object.create()

let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"],
    getName: function () {
        return this.name;
    },
};


let anotherPerson = Object.create(person)
anotherPerson.name= "Greg"
anotherPerson.friends.push("ygj")

let bPerson = Object.create(person)

bPerson.friends.push("ygj222")

console.log(anotherPerson.name); //"Greg"
console.log(anotherPerson.name === anotherPerson.getName()); //true
console.log(bPerson.name); // "Nicholas"
console.log(anotherPerson.friends); //["Shelby", "Court", "Van", "Rob", "Barbie"]
console.log(bPerson.friends); //["Shelby", "Court", "Van", "Rob", "Barbie"]

