---
layout: post
title:  "Use Cluster to make your Node.js App fast"
---

console.log
console.warn : just warning
console.error : Error log but doesn't break your app, and provide call stack
console.info : provide info
console.debug : just print it with blue color

you can filter with filter feature of chrome dev tool
always think about is this console.log truely needed?

special case of console.log : substitution with %s, %d (string, digit) and it only works when the first arg is string

console.log('this is my %coutput', "color: blue; font-size: 33px;")
=> %c is substituted with css style

log can be collapsed(grouped)
console.group('something'); // try console.groupCollapsed
console.log('yay');
console.log('I am grouped');
console.groupEnd();

and it can be nested!!!!!!

console.assert(arg, 'something') // if arg is falsy value, log error with 'something' but it don't do anything else. just logging. Be aware of it!

console.count : log its count automatically

how long some job took?
console.time('some');
// do stuff
console.timeEnd('something else'); // spit out time!

if the target to be logged is nested, it will be really painful to open log tab
console.table(nested something) // something should be array or object
and if first arg is object, you can add 2nd parameter array with some sort of filter!!!! awesome!!!!

