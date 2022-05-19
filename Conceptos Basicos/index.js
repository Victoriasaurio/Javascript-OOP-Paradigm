// Introducción al paradigma de programación POO

/**
 * (Reales o abstractos)
 * Objetos - Encapsula las propiedades/datos de una entidad. 
 *         - También llamados: Pares de Clave/Valor a nivel código.
 * 
 * Métodos - POO:Son acciones
 *         - A nivel código se les conoce como: funciones.
 * 
 * This    - Cuando se usa esta palabra reservada dentro de un objeto, esta hace referencia a ese mismo objeto,
 *           junto con sus propiedades.
 */

const user = {
    name: "Victoria Esperanza",
    lastname: "Guzmán",
    age: 23,
    showFullName() {
        return this.name + " " + this.lastname
    }
}

console.log(user.showFullName());

const account = {
    number: "4125745896585236",
    amount: 100,
    deposit(quantity) {
        this.amount = this.amount + quantity
    },
    withdraw(quantity) {
        this.amount = this.amount - quantity
    }
}

account.deposit(100)
account.deposit(50)
account.deposit(10)
console.log(account)

account.withdraw(100)
account.withdraw(50)
console.log(account)

console.log("Hello world".toUpperCase()) // Método de un objeto