// Encapsulación - Ocultar los datalles para que no puedan ser accedidos y modificarse directamente sino que solo por medio de funciones o métodos se puedan acceder a ellos.

// Constructor
function Company(name) {
    let employees = []
    this.name = name

    this.getEmployees = function() {
        return employees
    }

    this.addEmployee = function(employee) {
        employees.push(employee)
    }
}

const company = new Company("Huastechnology")
console.log(company)
company.addEmployee("Victoria")

console.log(company.employees) // No permite acceder al arreglo
console.log(company.getEmployees()) // Se puede acceder al arreglo