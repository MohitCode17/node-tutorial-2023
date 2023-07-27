// Example: 1 - Register for the event to be fired only one time using once.

// Example: 2 - Create a event emitter instance and register a couple of callbacks.

// Example: 3 - Registering for the event with callback parameter.

const EventEmitter = require('events');

const event = new EventEmitter();

event.on('sayMyName', ()=> {        // second listen to event
    console.log('Hello Mohit'); 
})

event.emit('sayMyName');    // first emit event