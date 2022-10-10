//Modules
const names = require('./3-firstModule');
const func = require('./4-secondModule');
const person = require('./5-thirdModule');
require('./6-mindGrenade');

Object.values(names).forEach(name => {
 func(name); 
});

func('Bart')

console.log(person);