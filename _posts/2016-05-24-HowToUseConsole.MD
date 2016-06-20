---
layout: post
title:  "Logs like Hacker"
---

<a href="https://egghead.io/series/js-console-for-power-users" target="_blank"><em>This Post is written after watching this Egghead.io video lecture</em></a>

<br><br><br>
<h3>Do you Log all day?</h3>
<br>
`console.log` is called Debugger for the Poors. Even though it is not the best debugging tool, definitely the most common debugging tool. The reason is simple. Because it's very handy. You can log something on the Dev. console with `console.log( /* something */ )`

<!--excerpt_separator-->
<br>
<br>
(OK, let's open your Dev. console) <br>
<br>
Like this! (Click Buttons)
<br>

<button class="btn btn-primary" type="button" id="log1">Simple Log</button>
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
  Code
</button>
<div class="collapse" id="collapseExample1">
  <div class="well">
    <code>
        console.log('This is simple log!!');
    </code>
  </div>
</div>
<script>
    document.getElementById('log1').addEventListener('click', function() {
        console.log('This is simple log!!!!');
    });
</script>
So far, it looks fine. Simply log on the console. But What if you have tons of console.log all over your code? Like this!

<button class="btn btn-warning" type="button" id="log2">Annoying Log</button>
<script>
    document.getElementById('log2').addEventListener('click', function() {
        for(var i = 0; i != 50; i++) {
            if(i === 20) {
                console.log('This is simple log!!!!ZO ');
            } else {
                console.log('This is simple log!!!!' + i);
            }
        }
    });
</script>
<br>

One different log messages in the previous 50 log messages. Can you find it? It very commonly happens when you use tons of `console.log` while you work on front-end side.

<br>
<h3>What Should I do?</h3>
<br>
Actually, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Console" target="_blank">`Console`</a> object has a lot of method more than we thought.

During the research, I found some interesting method among them.



- `console.warn` : It will log yellow warning log (Nothing Special)  <button class="btn btn-warning btn-xs" type="button" id="log3">Warn</button>
<button class="btn btn-primary btn-xs" type="button" data-toggle="collapse" data-target="#collapseExample3" aria-expanded="false" aria-controls="collapseExample1">
  Code
</button>
<div class="collapse" id="collapseExample3">
  <div class="well">
    <code>
        console.warn('This is console.warn!!');
    </code>
  </div>
</div>
<script>
    document.getElementById('log3').addEventListener('click', function() {
        console.warn('This is console.warn!!!!');
    });
</script>
- `console.error` : Error log with red color but doesn't break your app, and provide call stack of function! Which is super useful! <button class="btn btn-danger btn-xs" type="button" id="log4">Error</button>
<button class="btn btn-primary btn-xs" type="button" data-toggle="collapse" data-target="#collapseExample4" aria-expanded="false" aria-controls="collapseExample1">
  Code
</button>
<div class="collapse" id="collapseExample4">
  <div class="well">
    <code>
        console.error('This is console.error!!');
    </code>
  </div>
</div>
<script>
    document.getElementById('log4').addEventListener('click', function() {
        console.error('This is console.error!!!!');
    });
</script>
- `console.info` : provide info log with Blue color (Nothing Special) <button class="btn btn-info btn-xs" type="button" id="log5">Info</button>
<button class="btn btn-primary btn-xs" type="button" data-toggle="collapse" data-target="#collapseExample5" aria-expanded="false" aria-controls="collapseExample1">
  Code
</button>
<div class="collapse" id="collapseExample5">
  <div class="well">
    <code>
        console.info('This is console.info!!');
    </code>
  </div>
</div>
<script>
    document.getElementById('log5').addEventListener('click', function() {
        console.info('This is console.info!!!!');
    });
</script>
- `console.debug` : just print it with blue color. Nothing Special but, these kind of log method(which has different color) are useful when you're working on group project. By using only `console.debug`, you don't need to worry about accidently deleting someone else's `console.log` <button class="btn btn-primary btn-xs" type="button" id="log6">Debug</button>
<button class="btn btn-primary btn-xs" type="button" data-toggle="collapse" data-target="#collapseExample6" aria-expanded="false" aria-controls="collapseExample1">
  Code
</button>
<div class="collapse" id="collapseExample6">
  <div class="well">
    <code>
        console.debug('This is console.debug!!');
    </code>
  </div>
</div>
<script>
    document.getElementById('log6').addEventListener('click', function() {
        console.debug('This is console.debug!!!!');
    });
</script>
<br>
<br>
<br>
<h3>Is that All?</h3>
<br>
![My helpful screenshot](/assets/log.png)
<br>
<br>
<strong>Nope!!!</strong><br><br> Different log method can be more useful with dev tool(I personally use Chrome)
You can filter the log messages with filter feature of chrome Dev. tool. Isn't it awesome? With that, you can easily log messages!

<br>
<h3>Advanced Feature</h3>
<br>

- `console.group` : Log can be collapsed(grouped) <button class="btn btn-primary btn-xs" type="button" id="log7">Something...</button>
<button class="btn btn-primary btn-xs" type="button" data-toggle="collapse" data-target="#collapseExample7" aria-expanded="false" aria-controls="collapseExample1">
  Code
</button>
<div class="collapse" id="collapseExample7">
  <div class="well">
    <code>
        console.groupCollapsed('...is there...(click)');<br>
        console.log('G');<br>
        console.log('I');<br>
        console.log('T');<br>
        console.log('|');<br>
        console.log('K');<br>
        console.log('R');<br>
        console.log('A');<br>
        console.log('K');<br>
        console.log('E');<br>
        console.log('N');<br>
        console.log('is grouped');<br>
        console.groupEnd();<br>
    </code>
  </div>
</div>
<script>
    document.getElementById('log7').addEventListener('click', function() {
        console.groupCollapsed('...is there...(click)'); 
        console.log('G');
        console.log('I');
        console.log('T');
        console.log('|');
        console.log('K');
        console.log('R');
        console.log('A');
        console.log('K');
        console.log('E');
        console.log('N');
        console.log('is grouped');
        console.groupEnd();
    });
</script>
and it can be nested!!!!!!
<br>

- `console.assert(arg, 'something')` : if arg is falsy value, log error with 'something' but it don't do anything else. Just logging. Be aware of it! <button class="btn btn-danger btn-xs" type="button" id="log8">assert</button>
<button class="btn btn-primary btn-xs" type="button" data-toggle="collapse" data-target="#collapseExample8" aria-expanded="false" aria-controls="collapseExample1">
  Code
</button>
<div class="collapse" id="collapseExample8">
  <div class="well">
    <code>
        console.assert(false, 'This is console.assert!!');
    </code>
  </div>
</div>
<script>
    document.getElementById('log8').addEventListener('click', function() {
        console.assert(false, 'This is console.assert!!!!');
    });
</script>

- `console.table(collection)` : This one is my favorite Log method. If the target need to be logged is object, it is really painful to open every log message checking the properties. With `console.table`, it becomes piece of cake. If first arg is object, you can add 2nd parameter array with some sort of filter!!!! awesome!!!! (Since it's not a standard feature, it may not work on your browser) <button class="btn btn-danger btn-xs" type="button" id="log9">table</button>
<button class="btn btn-primary btn-xs" type="button" data-toggle="collapse" data-target="#collapseExample9" aria-expanded="false" aria-controls="collapseExample1">
  Code
</button>
<div class="collapse" id="collapseExample9">
  <div class="well">
    <code>
        var people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]] <br>
        console.table(people);<br>
    </code>
  </div>
</div>
<script>
    document.getElementById('log9').addEventListener('click', function() {
        var people = [["John", "Smith"], ["Jane", "Doe"], ["Emily", "Jones"]]
        console.table(people);
    });
</script>

