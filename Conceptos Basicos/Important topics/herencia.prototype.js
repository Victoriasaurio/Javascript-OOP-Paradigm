function Person() {
    this.name = ""
    this.lastname = ""
}

function Programmer() {
    this.codelenguage = ""
}

Programmer.prototype = new Person() 

// Programmer es una instancia de Person, ya que, Hereda de ella.
const person = new Person()
person.name = 'Patricio'
person.lastname = 'Read'
console.log(person)

const programmer = new Programmer()
programmer.name = 'Victoria'
programmer.lastname = 'Guzmán'
programmer.codelenguage = 'Javascript'
console.log(programmer)