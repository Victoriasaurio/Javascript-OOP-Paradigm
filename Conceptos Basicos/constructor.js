/**
 * Constructor - Generador de objetos. Son funciones que permiten crear objetos.
 * 
 * En otros lenguajes de programación los constructores en javascript serían los equivalestes a la palabra reservada Class.
 * En javascript son class NO EXISTE, sin embargo, los constructores para crear una entidad son formados apartir de funciones.
 */

const user = {
    name: "Victoria Esperanza",
    lastname: "Guzmán",
    age: 23,
    showFullName() {
        return `${this.name} ${this.lastname}`
    }
}

// Constructor de objetos.
// This(En esta ocasión significa) - Creación de un objeto con estas propiedades.
function Person() {
    this.name = ""
    this.lastname = ""
    this.age = 0
    this.showFullName = function() {
        return `${this.name} ${this.lastname}`
    }
}

const user_second = new Person()
user_second.name = "Pato"
user_second.lastname = "Saurio"
user_second.age = 3
console.log(user_second.showFullName());