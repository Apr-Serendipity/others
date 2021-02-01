// -------------------demo code--------------------
obj1 = {
  name: "zhangsan",
  age: 14,
  address: {
    country: "china",
    city: "beijing"
  }
}

obj2 = deepclone(obj1);

obj1.age = 18;

console.log(obj2.age);

console.log(obj2);


// ------------------deepclone function----------------

function deepclone(obj) {

  if (obj == null || typeof obj !== "object") {  
    return obj;
  }

  let res;

  if (obj instanceof Array) {  // 1: determine if it's an array, do not use typeof
    res = [];
  } else {
    res = {};
  }

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = deepclone(obj[key]);  // in case the value is also an object
    }
  }

  return res;
}

