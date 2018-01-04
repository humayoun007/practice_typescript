# To test this project at first you need to install typescript in your machine.

## Installing TypeScript
----------------------------------

**There are two main ways to get the TypeScript tools:**

1. Via npm (the Node.js package manager)
2. By installing TypeScript’s Visual Studio plugins

Visual Studio 2015 and Visual Studio 2013 Update 2 include TypeScript by default. 
If you didn’t install TypeScript with Visual Studio, you can still [download](https://www.typescriptlang.org/#download-links) it.

If you install node.js in your machine then you need to type the following command in your nodejs command prompt on the project folder root as an example here *sample_01* folder. 

> npm install -g typescript

## Compiling Code
--------------------------

**At the command line, run the _TypeScript compiler_:**

> tsc greeter.ts

> start employee.html

*This project is a very basic project to understand how the typescript works !!*

**This project has only one ts(typescript) file and one html file. 
js(javascript) file is generated when you compile ts file by using the command which i have shown in just before.**

*Typescript file has `interface` and `class` which is like below:*

```javascript 

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

```

*And html file is as simple as possible , only included `employee.js` script file as an reference*

```html

<!DOCTYPE html>
<html>
    <head>
        <title>Employee Typescript Sample</title>
    </head>
    <body>
        <script src="employee.js"></script>
    </body>
</html>

```
Wants to go in tutorial folder ? Click [here](/tutorial)
