// let students = ['Henk', 'Jan', 'Piet', 'Freek', 'Stabila '];

let students = [
    {
        name: 'Henk',
        course: 'FSD',
        age: 28
    },
    {
        name: 'Piet',
        course: 'FE',
        age: 38
    },
    {
        name: 'Jan',
        course: 'BE',
        age: 98
    },
    {
        name: 'Frank',
        course: 'FE',
        age: 8
    },
    {
        name: 'Theo',
        age: 48
    }
]

console.log(students[1].course);

let littleStudents = students.map((student) => {
    return student.name + 'je';
})
console.log(littleStudents);

let coursesList = students.find((student) => {
    return student.name === 'Henk';
})
console.log(coursesList.name + ' doet ' + coursesList.course);

let theo = students.filter((student) => {
    return student.name === 'Theo';
})

console.log(theo[0].age);


console.log('---------------------------')
let numbers = [7,2,4,1,5,3,6,8];
let sorted = numbers.sort((a,b) => {return a-b});
console.log(sorted);

