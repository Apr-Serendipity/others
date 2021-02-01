// --------function as a return value--------------

function fn1() {
  const a = 100;
  return function(){
    console.log(a);
  }
}

const a = 200;
fn1()();  // 100

// ---------------function as a parameter of a function-----------

function fn2(fn){
  const b = 300;
  fn();
}

const b = 400;
fn2(function(){
  console.log(b);  
}) // 400

