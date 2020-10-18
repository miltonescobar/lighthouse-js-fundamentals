const sayHello = function (name) {
  console.log('Hello, ' + name);
};

sayHello('Caliban');
sayHello('Miranda');
sayHello('Ferdinand');

/*************************************************/

const sayHelloToconsole = function (name) {
  return 'Hello, ' + name;
};

const greeting = sayHelloToconsole('John');

console.log(greeting);
