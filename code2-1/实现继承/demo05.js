let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"],
    getName: function () {
        return this.name
    }
}

function createAnother(original) {
    let clone = Object.create(original)
    clone.sayHi = function () {
        console.log('hi')
    }
    clone.getFriends = function () {
        console.log(this.friends)
    }
    return clone
}

let anotherPerson = createAnother(person)