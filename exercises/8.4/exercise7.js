const assert = require('assert')

// escreva aqui o seu código
class User {
    constructor() {
        this._name = "";
    }
    
    get name() { 
        if(this._name==undefined || this._name == null){
            return "";
        } else {
            return this._name;
        }   
    }
    set name(value) {
        this._name=value;
    }
}

// class Thermostat {
//     constructor(fahrenheit) {
//       this.fahrenheit = fahrenheit;
//     }

//     get temperature() {
//       return (5 / 9) * (this.fahrenheit - 32);
//     }

//     set temperature(celsius) {
//       this.fahrenheit = (celsius * 9.0) / 5 + 32;
//     }
//   }


let user1 = new User("Trybe")

assert.equal(typeof User.prototype, "object")
assert.ok(user1 instanceof User)
user1.name = undefined;
assert.equal(user1.name, "")

user1.name = null
assert.equal(user1.name, "")

user1.name = "Tryber"
assert.equal(user1.name, "Tryber")

// Crie a classe User que possua o atributo name. 
// Inicialize o valor de name com o valor "" (string vazia). 
// Não deve ser possível definir o valor de name durante a instanciação da classe.
//  Antes de definir o valor de name, 
//  se o valor recebido for undefined ou null o valor de name deve ser "",
//   caso contrário basta configura-lo com o valor recebido.
//  Analise os asserts presentes para direcionar sua solução: