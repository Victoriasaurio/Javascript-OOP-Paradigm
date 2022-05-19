/**
 * Prototipe - permite expander las propiedades/métodos de un constructor.
 * Hace referencia a las caraterísticas que ya tenia un constructor.
 * @returns 
 */

function Person(name, lastname) {
    this.name = name
    this.lastname = lastname
    this.displayName = function() {
        return `${this.name} ${this.lastname}`
    }
}

const victoria = new Person("Victoria", "Guzmán")
const mario = new Person("Mario", "Ross")
const lucio = new Person("Lucio", "Gomez")
const mariano = new Person("Mariano", "Fuentes")

Person.prototype.greet = function() {
    return `Hello i'm ${this.name}`
}
console.log(victoria.greet())
console.log(mario.greet())
console.log(lucio.greet())
console.log(mariano.greet())

console.log("------------------------------------------------------------")
/**
 * Ejemplo de prototype para alterar/expandir las propiedades de un objeto propio de javascript
 */

const s = new String("Hello world")
String.prototype.concatTest = function () {
    return `${this} test`
}
console.log("My name is Victoria".concatTest())
console.log(s.concatTest())