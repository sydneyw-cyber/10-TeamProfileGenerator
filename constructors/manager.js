// creating Manager constructor 

const Employee = require('./employee')

function Manager(id, name, email, office) {
    Employee.call(this, id, name, email)

    this.office = office;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.getRole = function() {
    return 'Manager'
}

module.exports = Manager