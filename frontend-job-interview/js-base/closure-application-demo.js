function createCache(){
  data = {};
  return {
    set: function(key, value){
      data[key] = value;
    },
    get: function(key){
      return data[key];
    }
  }
}

const c = createCache();
c.set('name', 'zhangsan');
c.set('age', 14);
console.log(c.get('name'));
console.log(c.get('age'));
console.log(c.get('address'));

