let person = {
    name:"Nicholas",
    friends:["Shelby","court","Van"],
    getName: function(){
        return this.name
    }
}

let anotherPerson = Object.create(person)
anotherPerson = 'Greg'
anotherPerson.friends.push("ygj")

let bPerson = Object.create(person)

bPerson.friends.push('ygj222')

