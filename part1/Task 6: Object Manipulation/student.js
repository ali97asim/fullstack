class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

// Example Usage
const student1 = new Student("Ali", 20, "A");
console.log(student1.getDetails()); // Output: Name: Ali, Age: 20, Grade: A
