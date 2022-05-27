function Person(name, lastname) {
    this.name = name
    this.lastname = lastname
}

function Programmer(codelenguage) {
    this.codelenguage = codelenguage
}

Programmer.prototype = new Person() 