//complete this code
// class Person {
// 	_name;
// 	_age;
//     constructor(name,age){
//       this._name=name;
//       this._age=age;
//     }
//     set setAge(age){
//         this._age=age;
//     }
//     get getName(){
//         return this._name;
//     }
// }

// class Student extends Person {
//     constructor(name,age){
//         super(name,age);
//     }
//     study(){
//         console.log(`${this._name} is studying`);
//     }
// }

// class Teacher extends Person {
//     constructor(name,age){
//         super(name,age);
//     }
//     teach(){
//         console.log(`${this._name} is teaching`);
//     }
// }

// let student1=new Student('Ramesh',21);
// console.log(student1);
// // student1.teach();
// student1.study();
// let teacher1=new Teacher('Max',30);
// teacher1.teach();

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(age) {
    this._age = age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
