
const nationality = ({ firstName, nationality = "Brazilian" }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const otherPerson = {
   firstName: "Ivan",
   lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality(otherPerson))
console.log(nationality(person))