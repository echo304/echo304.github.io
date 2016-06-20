---
layout: post
title:  "About Node"
---

> Node.js is JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

I tried to summarize Key Concept of Node.js to help my understanding about this huge monster.

1. Event loop: What makes Node.js to support non-blocking I/O?
2. Global and Process: How to access more info?
3. Event Emitters: Almost everything in Node.js can emit the Event
4. Streams and buffers: Effective way to work with data
5. Clusters: Fork processes like a pro
6. Handling async errors: AsyncWrap, Domain and uncaughtException
7. C++ addons: Contributing to the core and writing your own C++ addons
<!--excerpt_separator-->
<br>
<br>
<br>
<h2><a href="https://youtu.be/8aGhZQkoFbQ" target="_blank">Event Loop</a><small>  not exclusive concept for Node.js</small></h2>
 - When JS runs some codes, async function(callback function) is pushed into the end of the event queue and waiting for the end of current <a href="http://davidshariff.com/blog/what-is-the-execution-context-in-javascript/" target="_blank">execution stack</a>
 - Once current execution stack is completed, event queue start to dequeue and invoke the function with global context(default) and start to form new excution stack
 - Non-blocking I/O is very powerful feature unless use them correctly
 - <strong>Heads up for the callback Hell and context!!!!!</strong>
<br>
<br>
<br>
<h2>Global</h2>
<h4>Question : Where is the global scope in Node? (e.g. window in chrome)</h4>
 - Answer : <strong><em>`Global`</em></strong> object!
 - global object has certain properties
   - `process`: Process, system, environment information(able to access CLI input, env with passwords, memory, etc.)
   - `__filename`: File name and path to the currently running script where this statement is
    {% highlight javascript %}
    // Example: running node example.js from /Users/mjr
    console.log(__filename);
    // /Users/mjr/example.js
    {% endhighlight %}
   - `__dirname`: Absolute path to the currently running script
    {% highlight javascript %}
    // Example: running node example.js from /Users/mjr
    console.log(__dirname);
    // /Users/mjr
    {% endhighlight %}
   - `module`: Object to export code making this file a module
   - `require()`: Method to import modules, JSON files, and folders
 - and some of the properties and methods from browser
   - `console`
   - `setInterval`
   - `setTimeout`
<br>
<br>
<br>
<h2>Event Emitters</h2>
 - Uses observer pattern
 - Event Emitter emit(trigger) string based event.
 - And event should be registered in advance(listen to Event)
<br>
<br>
<br> 
<h2>Stream</h2>
 - Various objects in Node.js are Stream which is an abstract interface
 - Break down the whole data into small chunk and utilize them one by one
 - To do so, It won't block the thread
 - two main factor: `event('data', 'end')`, `pipe()``
 - Example: Request to an HTTP server
<br>
{% highlight javascript %}
const http = require('http');

var server = http.createServer( (req, res) => {
  // req is an http.IncomingMessage, which is a Readable Stream
  // res is an http.ServerResponse, which is a Writable Stream

  var body = '';
  // we want to get the data as utf8 strings
  // If you don't set an encoding, then you'll get Buffer objects
  req.setEncoding('utf8');

  // Readable streams emit 'data' events once a listener is added
  req.on('data', (chunk) => {
    body += chunk;
  });

  // the end event tells you that you have entire body
  req.on('end', () => {
    try {
      var data = JSON.parse(body);
    } catch (er) {
      // uh oh!  bad json!
      res.statusCode = 400;
      return res.end(`error: ${er.message}`);
    }

    // write back something interesting to the user:
    res.write(typeof data);
    res.end();
  });
});

server.listen(1337);

// $ curl localhost:1337 -d '{}'
// object
// $ curl localhost:1337 -d '"foo"'
// string
// $ curl localhost:1337 -d 'not json'
// error: Unexpected token o
{% endhighlight %}
  

<br>
<br>
<h2><a href="http://echo304.github.io/2016/05/17/Cluster.html" target="_blank">Cluster</a></h2>
 + Will allows to utilize all CPU power of each Machine (e.g. Workers)
 + Will allows to scale Node programs vertically
 + To see the workers serving different request, use `loadtest` testing tool <br />
 `$ npm install -g loadtest`
<br>
<br>
<br>
<h2>Handling async errors</h2>
 - Listen to all `on('error')` events
 - add `UncaughtException` event on the process object
 - Using <em>Domain</em> module
<br>
<br>
<br>
<h2>C++ Addons : Low-level addons</h2>
 - The feature which makes Node powerful
<br>
<br>
<br>
<h1><a href="https://davidwalsh.name/event-delegate">About Event Delegation</a></h1>
