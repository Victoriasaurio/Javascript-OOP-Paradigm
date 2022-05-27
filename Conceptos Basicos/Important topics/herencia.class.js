class Person {
    constructor(name, lastname) {
        this.name =  name
        this.lastname = lastname
        this.age = null
    }
}

class Programmer extends Person {
    constructor(name, lastname, codeanguage) {
        super(name, lastname) // Llama al constructor de Person
        this.codelenguage = codeanguage
    }
}

const person =  new Person('Patricio', 'Read')
console.log(person)

const programmer = new Programmer('Victoria', 'Guzmán', 'Javascript')
console.log(programmer)