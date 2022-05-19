/**
 * constructor Object - Notación literal de javascript.
 */
const string = new Object("hello world")
string.name = "Special string"
string.test = function () {
    return this + " test"
}

console.log(string.test())
console.log(string.name)

const user = {
    name: "Victoria",
    lastname: "Guzmán",
    age: 23,
    showName() {
        return this.name
    }
}

console.log(Object.keys(user))
console.log(Object.values(user))

/**
 * new - Importante declararla para poder crear una nueva instancia.
 * 
 * "use strict" - Otorga undefined cuando no se usa la palabra 'new'
 */

const mankind = {
    Person: function () {
        "use strict"
        this.name = ""
        this.lastname = ""
    }    
}

const person = mankind.Person() // Sintaxís incorrecta
console.log(person) // undefined
/**
 * Al no declarar 'new' se le asigna a mankind el siguiente valor: { Person: [Function: Person], name: '', lastname '' }
 * Esto es porque busca el siguiente objeto disponible. mankind al no contar con un "use strict" se le asigna
 * la instancia de Person.
 */
console.log(mankind) 
