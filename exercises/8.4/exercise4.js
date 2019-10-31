const assert = require('assert')

// escreva aqui o seu código
class Robot {
    constructor(name, active=false){ 
        this.name=name;
        if(active===null) {
        this.active=false;
        } else {
        this.active=active;
        }
    }

}

let robot1 = new Robot("Tars", true)

assert.equal(typeof Robot.prototype, "object")
assert.ok(robot1 instanceof Robot)
assert.equal(robot1.name, "Tars")
assert.equal(robot1.active, true)

let robot2 = new Robot("Case")

assert.equal(typeof Robot.prototype, "object")
assert.ok(robot2 instanceof Robot)
assert.equal(robot2.name, "Case")
assert.equal(robot2.active, false)

let robot3 = new Robot("Kipp", null)

assert.equal(typeof Robot.prototype, "object")
assert.ok(robot3 instanceof Robot)
assert.equal(robot3.name, "Kipp")
assert.equal(robot3.active, false)

// Crie uma classe com o nome Robot que possua os atributos name e active. 
// Os dois atributos devem ser configurados através de parametros 
// passados durante a criação do objeto. 
// Caso nenhum valor seja passado para active, 
// o valor false deve ser configurado como valor padrão: