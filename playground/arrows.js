var oldSquare = function(b) {
  return b * b;
};

const square = (a) => a * a;

console.log(oldSquare(3));
console.log(square(9));

var user = {
  name: 'Laura',
  sayHi: () => {
    console.log(arguments)
    console.log(`Hi. I'm ${this.name} `);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name} `);
  }
};

user.sayHi(1, 2, 3);
user.sayHiAlt(1,2, 3);
