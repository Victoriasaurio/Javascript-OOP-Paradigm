/**
 * PRIMERA ETAPA
 * 
 * asociacion - relación entre objetos que al separarse siguen teniendo un propósito independiente
 */

const company = {
    name: "Huastechnology",
    employees: []
}

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

// relacion
user_1.parent = user_2
// al eliminar la relación el código sigue funcionando

console.log(user_1)
console.log(user_2)

/**
 * agregación - Los objetos pertenecen a un objeto mucho mayor, sin embargo, la agregación al ser eliminada los objetos siguen funcionando de forma independiente
 */

company.employees.push(user_1)
company.employees.push(user_2)

console.log(company)

/**
 * composicion - fuerte relación de agregación donde el objeto no puede existir de manera independiente.
 * 
 * Un componente no tiene vida independiente cuando pertenece a otro objeto, coo por ejemplo: 'street'
 */

const Persona = {
    name: 'pato',
    lastname: 'saurio',
    address: {
        street: "calle 45 141",
        codepostal: "97397",
        city: 'Washington'
    }
}