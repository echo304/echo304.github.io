<h1>About Node.js</h1>

1. Event loop: What exactly non-blocking I/O is?
2. Global and Process: How to access more info
3. Event Emitters: Almost everything in Nodejs is Event Emitter
4. Streams and buffers: Effective way to work with data which I have to know
5. Clusters: Fork processes like a pro
6. Handling async errors: AsyncWrap, Domain and uncaughtException
7. C++ addons: Contributing to the core and writing your own C++ addons

<h3>Event Loop</h3>
 - When JS runs some codes, async function(mainly callback function) is pushed into the end of the event queue
 - Non-blocking I/O is very powerful feature unless use them correctly

<h3>Global</h3> 
 - Question : Where is the global scope in Node? (e.g. window in chrome);
 - Answer : <strong><em>Global</em></strong> object!
 - global object has certain properties
   - process: Process, system, environment information(able to access CLI input, env with passwords, memory, etc.)
   - __filename: File name and path to the currently running script where this statement is
   - __dirname: Absolute path to the currently running script
   - module: Object to export code making this file a module
   - require(): Method to import modules, JSON files, and folders
 - and some of from browser
   - console
   - setInterval
   - setTimeout

<h3>Event Emitters</h3>
 - Uses observer pattern
 - Event Emitter emit(trigger) string based event.
 - And event should be registered in advance(listen to Event)
 
<h3>Stream</h3>
 - Break down the whole data into small chunk and utilize them one by one
 - To do so, It won't block the thread
 - two main factor : event('data', 'end'), pipe()

    <h4>Cluster</h4>
     + Will allows to utilize all CPU power of each Machine (e.g. Workers)
     + Will allows to scale Node programs vertically
     + To see the workers serving different requiest, use <em>loadtest</em> testing tool (<em>$ npm install -g loadtest</em>)

<h3>Handling async errors</h3>
 - Listen to all on('error') events
 - add 'uncaughtException' event on the process object
 - Using <em>Domain</em> module

<h3>C++ Addons : Low-level addons</h3>
 - The feature which makes Node powerful

<h1><a href="https://davidwalsh.name/event-delegate">About Event Delegation</a></h1>
