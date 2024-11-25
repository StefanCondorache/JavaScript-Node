const { readFile, writeFile } = require('fs')

console.log('start');

readFile('./TestFolder/first.txt', 'utf8',(err, result) => {    // without utf8 it returns a buffer 
    if(err){
        console.log(err);
        return
    }
    const first = result;
    
    readFile('./TestFolder/second.txt', 'utf8',(err, result) => { 
    if(err){
        console.log(err);
        return
    }
    const second = result;

    writeFile('./TestFolder/result-async.txt',
        `Here is the result : \n${first}\n${second}`,
        (err, result) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('done with this task');
            
        }
    )
    })
})

console.log("starting the next task");
