const eventEmmiter = require('events');

const customEmitter = new eventEmmiter();

customEmitter.on('response', () => {  // eventName, eventItself
    console.log('data recieved');
}
)


customEmitter.emit('response'); 

customEmitter.on('response', (name, age) => {   
    console.log(`some other logic here ${name}${age}`);

}
)

customEmitter.emit('response', 'john', 34);  // the order matters
///////////////////////////////////////

