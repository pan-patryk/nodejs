var asyncAdd = (a,b) => {
  return new Promise((resolve,reject) => {
      setTimeout(() => {
        if (typeof a ==='number' && typeof b ==='number'){
          resolve(a+b);
        } else {
          reject('Arguments must be numbers');
        }
      },2500);
  });
};

asyncAdd(7,5).then((result) => {
  console.log('Result: '+ result);
  return asyncAdd(result, 33);
}).then((result) => {
  console.log('Should be 45 it is: ' + result);
}).catch((error) =>{
  console.log('Error' + error);
});
