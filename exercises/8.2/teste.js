
var obj = {
    length: 0,

    addElem: function addElem(elem) {
        
        [].push.call(this, elem);
    }
};

// Vamos adicionar alguns objetos vazios apenas para ilustrar.
obj.addElem('arroz');
obj.addElem({});
console.log(obj.length);
console.log(obj);
// → 2