
// const { writeFileSync } = require('fs');

// for(let i = 0; i < 10000; i++){
//     writeFileSync('D:/OneDrive/Desktop/JavaScript/NodeTurorial/Streams/big.txt', `Hello World ${i}\n`, { flag : 'a'});
// }

/////////////////////////////////////////////////////////////////////////

// const { createReadStream } = require('fs');

// const stream = createReadStream('./NodeTurorial/Streams/big.txt');

// // default 64kb
// // last buffer - remainder
// // highWaterMark - controlSize
// // const stream = createReadStream('/path', { highWaterMark : 9000 })
// // const sream = createReadStream('/path', {encoding : 'utf8})

// stream.on('data', (result) => {
//     console.log(result.toString());
// })

// stream.on('error', (err) => {
//     console.log(err);
    
// })
/////////////////////////////////////////////////////////////////

