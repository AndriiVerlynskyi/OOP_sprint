class Person {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname
    }
    
    showFullName () {
        return `${this.name} ${this.surname}`
    }
}

class Student extends Person {
    constructor (name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    
    showFullName (middleName) {
        return `${this.name} ${middleName} ${this.surname}`
    }

    showCourse () {
        const date = new Date()
        const yearNow = date.getFullYear();
        const currentCourse = yearNow - this.year;
        if (currentCourse < 7){
            return currentCourse
        } else {
            return 0
        }
    }
}

const stud1 = new Student("Ivan", "Petrov", 2018);
console.log(stud1.showFullName("Ivanov"))
console.log(stud1.showCourse())