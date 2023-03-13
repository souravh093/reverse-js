const students = [
    { name: 'John', age: 18, grade: 'A' },
    { name: 'Jane', age: 19, grade: 'B' },
    { name: 'Bob', age: 20, grade: 'A' },
    { name: 'Alice', age: 18, grade: 'C' }
  ];

const newProduct = {
    name: 'Mock',
    age: 28,
    grade: 'D'
}

const allTogether = [...students, newProduct];
console.log(allTogether);

const filteredStudent = allTogether.filter(student => student.name !== 'Bob');
console.log(filteredStudent);

  const showStudent = students.map(student => {
    return student.name
    })

  console.log(showStudent);


  const [day1, day2, day3, ...day5] = [255, 922, 1000, 500, 780, 620, 15];

//   console.log(day5);


//   function helloKo(num1, num2) {
//     const nums = [num1, num2];
//     return nums;
//   }

//   const [helloKo1, helloKo2] = helloKo(5, 9);

//   console.log(helloKo1);

const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
isActive ? showUser() : hideUser();