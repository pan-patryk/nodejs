const expect = require('expect');
const rewire = require('rewire');

var App = rewire('./app');
describe('App',() => {
  var db = {
    saveUser: expect.createSpy()
  }
  App.__set__('db',db);
  it('should call the spy correcty', () => {
    var spy = expect.createSpy();
    spy('Andrew',25);
    expect(spy).toHaveBeenCalledWith('Andrew',25);
  });
  it('should call saveUser with user object', () => {
    var email = 'andrew@example.com';
    var password = 'aaaaa';
    App.handleSingup(email,password);
    expect(db.saveUser).toHaveBeenCalledWith({email,password})
  })
});
