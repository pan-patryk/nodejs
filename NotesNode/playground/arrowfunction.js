var square = (x) => x*x;

console.log(square(8))

var user = {
  name: 'Patryk',
  sayHi: () => {
    console.log(`Hi Im ${this.name}`);
  },
  sayHiAlt () {
    console.log(`Hi Im ${this.name}`);
  }
}
user.sayHiAlt();
