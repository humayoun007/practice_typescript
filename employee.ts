class Employee{
    fullname:string;
    constructor(public firstname:string,public middlename:string,public lastname:string){
        this.fullname = firstname + middlename + lastname;
    }
}

interface Person{
    firstname:string;
    middlename:string;
    lastname:string;

}


function sayWelcome(person:Person){
    return "Welcome " + " Mr./Mrs. " + person.firstname + " " + person.middlename + " " + person.lastname;
}

var personName = new Employee("Md.","Humayoun","Kabir");

document.body.innerHTML = sayWelcome(personName);