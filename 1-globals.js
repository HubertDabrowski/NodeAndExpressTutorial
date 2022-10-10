// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed
let a = 'hello world';

const func = number =>{
  console.log(number);
}

setInterval(func, 1000, a);

