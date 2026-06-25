let person = {
    name : "Mike",
    address : "123 nairobi kenya",
    age : 27,
    'is student': true
}
console.log(person)
console.log(person.name)
console.log(person['is student'])
console.log(person['address'])

person.phone_number = '0756295128'

console.log(person)

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))