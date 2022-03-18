class Worker {
    #experience = 1.2;

    constructor (fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this.salary = this.dayRate * this.workingDays * this.#experience;
        Worker.workersArr.push(this)
    }
    showSalary () {
        const salary = this.dayRate * this.workingDays
        return `${this.fullName} salary is ${salary}`
    }
    getSalaryWithExperience (){
        this.salary = this.dayRate * this.workingDays * this.#experience
    }
    showSalaryWithExperience() {
        const salary = this.dayRate * this.workingDays * this.#experience;
        return `${this.fullName} with experience has a salary: ${salary}`
    }
    get getExperience () {
        return this.#experience
    }
    set setExperience (exp) {
        this.#experience = exp
        this.getSalaryWithExperience()
    }
    static workersArr = [];
}

function sortWorkersBysalary () {
    const sortedArray = Worker.workersArr.sort( (a, b) => {
        if (a.salary > b.salary){
            return -1
        }
        if(a.salary < b.salary) {
            return 1
        } 
        return 0
    })
    console.log(sortedArray)
    sortedArray.forEach( worker => {
        console.log(`${worker.fullName} : ${worker.salary}`)
    })
}


const worker1 = new Worker("Petr Petrov", 100, 21);
worker1.experience = 1.5;

const worker2 = new Worker("James Jameson", 180, 15);
const worker3 = new Worker("John Johnson", 120, 20);

sortWorkersBysalary();