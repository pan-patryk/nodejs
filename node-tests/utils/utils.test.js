const utils = require('./utils.js');
const expect = require('expect');

describe('utils',() => {
  it('should add 2 numbers',() =>{
     var result = utils.add(33,11);

     expect(result).toBe(44).toBeA('number');

     // if (result !== 44){
     //   throw new Error(`Expected 44 got ${result}`);
     // }
  });
  it('should square the number', ()=> {
    var result=utils.square(4);
    expect(result).toBe(16).toBeA('number');
    // if (result !== 16){
    //   throw new Error(`Expected 16 got ${result}`);
    // }
  });
  it('should veryfy first and last name are set', ()=>{
    var user={location:'Lisbon',age:25};
    var result=utils.setName(user,'Patryk Przybyła');
    expect(result).toInclude({
      firstName:'Patryk',
      lastName:'Przybyła'
    })

  });
  it('should asyncAdd two numbers', (done) => {
    utils.asyncAdd(3, 4, (sum) => {
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });
  it('should asyncSquare number', (done) => {
    utils.asyncSquare(4, (sum) => {
      expect(sum).toBe(16).toBeA('number');
      done();
    });
  });
  // it('sould expect some values', ()=>{
    // expect(12).toNotBe(12);
    // expect({name:'Andrew'}).toEqual({name:'Andrew'});
    // expect([2,3,4]).toInclude(4);
    // expect({
    //   name: 'Patryk',
    //   age: 25,
    //   location: 'Lisbon'
    // }).toExclude({
    //   age: 23
    // })
  // });

});
