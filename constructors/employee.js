// creating Employee constructor 

function Employee(name, id, email) {
    this.id = id
    this.name = name
    this.email = email
}

Employee.prototype.getId = function() {
    return this.id
}

Employee.prototype.getName = function() {
    return this.name
}

Employee.prototype.getEmail = function() {
    return this.email
}

Employee.prototype.getRole = function() {
    return 'Employee'
}

module.exports = Employee