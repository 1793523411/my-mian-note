let person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"],
    getName: function () {
        return this.name;
    },
};
// person.prototype.hello = function () {
//     console.log('hello~')
// }

function work(a) {
    let obj = Object.create(a);
    obj.subname = "bbb";
    obj.subarr = [1, 2, 3, 4]
    obj.hello = function () {
        console.log('hello')
    }
    return obj
}

let sub1 = work(person)

let sub2 = work(person)

sub1.subarr.push(111111)
sub1.friends.push(111111)

console.log(sub1)
console.log(sub2)