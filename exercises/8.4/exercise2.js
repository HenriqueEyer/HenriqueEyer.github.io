const assert = require('assert')

// escreva aqui o seu código
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }

}

let person = new Person("Diana", 34)

assert.equal(typeof Person.prototype, "object")
assert.ok(person instanceof Person)
assert.equal(person.name, "Diana")
assert.equal(person.age, 34)

// Crie uma classe com o nome Person que possua dois atributos, 
// name e age. Os dois atributos devem ser configurados 
// através de parametros passados durante a criação do objeto: