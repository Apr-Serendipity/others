class Person {
  constructor(name) {
    this.name = name;
  }
}

class Student extends Person {  

  constructor(name, number) {
    super(name);
    this.number = number;
  }

  // description = "some text here"

  sayHi() {  // 1: there is no function keyword here
    console.log(`${this.name} is saying hi`);
  }
}

class Teacher extends Person{

  constructor(name, title) {
    super(name);
    this.title = title;
  }

  sayHi() {
    console.log(`${this.title} ${this.name} is saying hi`);  //2: Don't forget the keyword "this"
  }
}

const xialuo = new Student("xialuo", 110);
console.log(xialuo.number);
xialuo.sayHi();

const wanglaoshi = new Teacher("wanglaoshi", "professor");
wanglaoshi.sayHi();