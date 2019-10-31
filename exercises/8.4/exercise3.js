const assert = require('assert')

// escreva aqui o seu código
class Dog {
    constructor(){
        this.name="";
    }

    get nameValue(){
        return this.name;
    }

    set nameUpdate(value){
        this.name=value;
    }
}
let dog = new Dog("Dog!!!")

assert.equal(typeof Dog.prototype, "object")
assert.ok(dog instanceof Dog)
assert.equal(dog.name, "")
dog.name = "Peter"
assert.equal(dog.name, "Peter")

// Crie uma classe com o nome Dog que possua o atributo name. 
// Inicialize o valor de name com o valor "" (string vazia). 
// Não deve ser possível definir o valor de name durante a 
//instanciação da classe.