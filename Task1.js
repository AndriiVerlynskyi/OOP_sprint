class Student {
    constructor (fullName, direction) {
        this.fullName = fullName;
        this.direction = direction;
    }
    showFullName() {
        return this.fullName
    }
    nameIncludes(data) {
        const fullNameArray = this.showFullName().split(" ");
        const name = fullNameArray[0];
        return name.includes(data)        
    }
    static studentBuilder () {
        return new Student("Ihor Kohut", "qc")
    }
    get getDirection () {
        return this.direction
    }
    set setDirection (direction) {
        this.direction = direction
    }
}

const stud1 = new Student('Ivan Petrenko', 'web');
const stud2 = new Student('Sergiy Koval', 'python');
const stud3 = Student.studentBuilder();

console.log(stud1.getDirection);
stud1.setDirection = 'qc'
console.log(stud1.getDirection)

console.log(stud3.showFullName());
console.log(stud3.nameIncludes("Iho")) //Has to be true, because the name is Ihor
console.log(stud3.nameIncludes("Iva")) //Has to be false, because the name is Ihor

