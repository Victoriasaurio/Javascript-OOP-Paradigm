/**
 * class - Conjunto de métodos que permiten definir un objeto.
 * 
 * Ambas declaraciones de instancia Person/Persona son lo mismo
 */

function Person (name, lastname) {
    this.name = name
    this.lastname = lastname
}

// Ambas declaraciones son lo mismo
// const Persona = class {}
class Persona {
    constructor(name, lastname) {
        this.name = name
        this.lastname = lastname
    }

    greet() {
        return `Hello i'm ${this.name} ${this.lastname}`
    }
}

const user_1 = new Persona("Victoria", "Guzmán")
const user_2 = new Persona("Joe", "Tomas")

console.log(user_1)
console.log(user_2.greet())