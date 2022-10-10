const {readFile , writeFile} = require('fs');

console.log('start');

readFile('./content/first.txt','utf-8', (err,result)=>{
  if(err){
    console.log(err);
    return;
  }
  const first=result;
  readFile('./content/subfolder/test.txt','utf-8', (err,result)=>{
    if(err){
      console.log(err);
      return;
    }
    const second = result;
    writeFile('./content/result-async.txt',`one: ${first}, two: ${second}`,(err,result)=>{
      if(err){
        console.log(err);
        return;
      }
      console.log('done with this task');
    });
  })
})

console.log('starting next one');