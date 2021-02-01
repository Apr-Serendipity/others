```
define a class, constructor, 
instance a class
```

class Student {

  constructor(name, number) {
    this.name = name;
    this.number = number;
  }

  // description = "some text here"

  sayHi() {  // 1: there is no function keyword here
    console.log(`${this.name} is saying hi`);
  }
}

// console.log(Student.description);  // undefined, wrong guess!!

const xialuo = new Student("xialuo", 110);
console.log(xialuo.number);
xialuo.sayHi();

const madongmei = new Student("madongmei", 120);
console.log(madongmei.number);
madongmei.sayHi();
