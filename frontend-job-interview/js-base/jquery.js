class JQuery{
  constructor(selector){
    const elems = document.querySelectorAll(selector);
    this.length = elems.length;
    this.selector = selector;
    for (let i = 0; i < this.length; i ++) {
      this[i] = elems[i];
    }
  }

  get(index) {
    return this[index];
  }

  each(fn) {
    // this.forEach(fn);  // 1: only array has the method -- "forEach"
    for (let i = 0; i < this.length; i ++) {  // 2: using let not const
      // console.log("i: ", i);
      fn(this[i]);
    }
  }

  on(type, fn) {
    this.each(el => el.addEventListener(type,fn));
  }
}

JQuery.prototype.fn1 = function(){
  console.log("fn1");
}

class myJQuery extends JQuery{  // 4：don't forget to write extends
  constructor(selector){
    super(selector);
  }

  fn2(){
    console.log("fn2");
  }
}

const $p = new JQuery('p');  // 3: notice the variable's name: "$p"
// console.log($p.get(0));
// console.log($p.each((elem)=>{console.log(elem)}));
$p.on("click", (event)=>{console.log(event.target)})  
// const $p1 = new myJQuery('p');


