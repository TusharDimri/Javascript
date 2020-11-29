console.log("We are at Tutorial 31");

class Employee {
    // Constructor of the Class
    constructor(givenName, givenExperience, givenDivision){
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }
    
    // Class Method
    slogan(){
        return `I am ${this.name} and this company is the best.`;
    }

    // Class Method
    joiningYear(){
        return 2020 - this.experience;
    }

    // Static Methods
    static add(a, b){
        return a+b;
    }
    // Static Methods can be used without making objects of that class.
}

tushar1 = new Employee("Tushar", 1, "C");
console.log(tushar1);
console.log(tushar1.slogan());
console.log(tushar1.joiningYear());

// Calling Static Methods
console.log(Employee.add(68, 1));
// Note:- Static Methods can be called using Class name only. We cannpt call them using Object name.

// -------------------------------------- INHERITANCE in Javascript --------------------------------------

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language  = language;
        this.github = github;
    }

    favouriteLanguage(){
        if (this.language == "Python"){
            return "Python";
        }
        else{
            return "Javascript";
        }
    }
    static multiply(a, b){
        return a * b;
    }
}
// Class Programmer Extends from class Employee
tushar2 = new Programmer("Tushar Dimri", 1, "C", "Python", "Tushar19");
console.log(tushar2);
console.log(tushar2.name);
console.log(tushar2.experience);
console.log(tushar2.division);
console.log(tushar2.slogan());
console.log(tushar2.joiningYear());
console.log(tushar2.favouriteLanguage());
console.log(Programmer.multiply(1, 69));
console.log(Programmer.add(1, 68));