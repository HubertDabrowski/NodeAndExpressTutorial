const {readFileSync, writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/test.txt', 'utf8');

console.log(first,second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`,{flag: 'a' })

console.log('done with this task');
console.log('starting next one');