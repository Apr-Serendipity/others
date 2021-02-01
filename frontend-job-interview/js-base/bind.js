function fn1(age, number){
  // const name = "zhangsan"
  console.log(this.name);
  console.log(age);
  console.log(number);
}

o1 = {
  name:"lisi"
}

Function.prototype.bind1 = function(){
  const args = Array.prototype.slice.call(arguments);
  const obj = args.shift();
  // obj.fn = this;
  const self = this;  // 1: 关键在这里，这里的self指向了调用apply的函数对象

  return function(){
    return self.apply(obj, args);  // 2：如果这里直接用this，则会导致this最终的指向是window，而不是函数对象
  }
}

// fn1.bind(o1, 18, 1171510113)();
// console.log("object");
fn1.bind1(o1, 18, 1171510113)();

