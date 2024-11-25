const { readFileSync , writeFileSync} = require('fs')
console.log('start');


const first = readFileSync('./TestFolder/first.txt', 'utf8');
const second = readFileSync('./TestFolder/second.txt', 'utf8');

//console.log(first, "\n",  second);

writeFileSync(
    './TestFolder/result-sync.txt',
    `Here is the result : \n${first}\n${second}`,
    {flag: 'a'}  // to append, without flag it overwrites 
)
console.log('done with this task');
console.log('starting the next one');

