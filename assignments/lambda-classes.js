// CODE here for your Lambda Classes
class Person {
    constructor(main) {
        this.name = main.name
        this.age = main.age
        this.location = main.location
        this.gender = main.gender
    }

    speak() {
        return `Hello my name is ${this.name}, I am from from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(teacher) {
        super(teacher)
        this.specialty = teacher.specialty
        this.favLanguage = teacher.favLanguage
        this.catchPhrase = teacher.catchPhrase
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(student) {
        super(student)
        this.background = student.previousBackground
        this.className = student.className
        this.favSubjects = student.favSubjects
    }

    listsSubjects() {
        return this.favSubjects;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Person {
    constructor(pm) {
        super(pm)
        this.gradClassName = pm.gradClassName
        this.favInstructor = pm.favInstructor
    }

    standUp() {
        return `${this.name} announces to {channel}, @channel standy times!`;
    }

    debugsCode(name, student, subject) {
        return `${name} debugs ${student}'s code on ${subject}`;
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const alan = new Student({
    name: 'Alan',
    location: 'Utah',
    age: 26,
    gender: 'male',
    favSubjects: 'JavaScript',
    background: "Udacity",
    className: "Webpt5"
});

const brandon = new ProjectManagers({
    name: 'Brandon',
    location: 'Louisiana',
    age: 28,
    gender: 'male',
    gradClassName: "Lambda"
});

console.log(fred.name)
console.log(alan.age)
console.log(fred.catchPhrase)
console.log(brandon.gradClassName)
console.log(fred.demo("JavaScript"))
console.log(alan.sprintChallenge("javaScript Fundamentals"));
console.log(brandon.standUp())