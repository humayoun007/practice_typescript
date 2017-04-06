var Employee = (function () {
    function Employee(firstname, middlename, lastname) {
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.fullname = firstname + middlename + lastname;
    }
    return Employee;
}());
function sayWelcome(person) {
    return "Welcome " + " Mr./Mrs. " + person.firstname + " " + person.middlename + " " + person.lastname;
}
var personName = new Employee("Md.", "Humayoun", "Kabir");
document.body.innerHTML = sayWelcome(personName);
