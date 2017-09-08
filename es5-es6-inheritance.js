/* ES6/ES2015 classes */
class A {
  constructor() {
    this.a = 10
  }
  print() {
    console.log(this.a, this.b)
  }
}

class B extends A {
  constructor() {
    super()
    this.b = 20
  }
}

/* ES5 equivalent */
function C(name) {
  this.name = name;
}

C.prototype.print = function() {
  console.log(this.name, this.secondName)
}

function D(name, secondName) {
	C.call(this, name);

  this.secondName = secondName
}
// D.prototype.method = function(){}
// will be owerriden by
// D.prototype = Object.create(C.prototype)

D.prototype = Object.create(C.prototype)

// Rabbit.prototype.constructor was overriden by
// D.prototype = Object.create(C.prototype)
D.prototype.constructor = D


D.prototype.prop = 'prop'
D.prototype.dMethod = function(){
	console.log('dMethod');
}

let a = new A()
let b = new B()
let c = new C()
let d = new D('1stName', '2ndName')

d.print();
console.log(d);
d.dMethod();
