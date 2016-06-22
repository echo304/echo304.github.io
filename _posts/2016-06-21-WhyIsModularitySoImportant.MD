---
layout: post
title:  "Importance of Modularity : POV of Testing"
description: "Why is Modularity so imporatant writing JavaScript application? (From the point of view of the testing)"
permalink: WhyIsModularitySoImportant
---

Every people who starts to learn JavaScript hear about "Module pattern" or "Modularity". There are many reason for us to keep our application high level of modularity. <br>
1. Module Pattern makes application easy to read <br>
2. Module Pattern makes component of application reusable <br>
3. <strong style="text-decoration: underline">Module Pattern helps developer to test the code more easily</strong> <br>
4. ...others <br>

In this article, I'm going to focus on testability.
<!--excerpt_separator-->
<br>
<br>
<br>
<h4>How modularity improves testability?</h4>
<br>

Assume that you need to unit-test this express route handler.
{% highlight javascript %}
// router.js
router.get('/', function (req, res) {
  // for the explanation, using synchronous code
  var data = [1, 2, 3]; 
  res.send(data);
});

/*=========================================================================*/
// test.js
describe('/ router', function () {
  it('should respond with fetchedData', function (done) {
    // Send API call to '/' route?
  });
});
{% endhighlight %}
What you need to test here is anonymous callback function which is given to `router.get()` method as a second argument. You can send API call to '/' route and test whether it works or not. But that's not a unit test, integration test. Unit test should test a single part that do only one thing in your application so that can be tested in fast speed. (For more detail about <a href="https://www.sitepoint.com/javascript-testing-unit-functional-integration/" target="_blank">Unit vs Functional vs Integration Tests</a>)
<br>
<br>

Let's break current code snippet down into the units
{% highlight javascript %}
// router.js
var handler = require('./handler.js');

router.get('/', handler);

/*=========================================================================*/
// handler.js
module.exports = function handler (req, res) {
  // for the explanation, using synchronous code
  var data = [1, 2, 3];
  res.send(data);
}

/*=========================================================================*/
// test.js
var handler = require('./handler.js');
var sinon = require('sinon');

describe('/ router', function () {
  it('should respond with fetchedData', function () {
    var expectedData = [/* some data */];
    
    // Declare variable and create spy function(do nothing)
    var res, req;
    req.send = sinon.spy();
    
    // test handler function only
    handler(req, res);
    // calledWith() method from Sinon.JS
    expect(res.send.calledWith([1, 2, 3])).to.equal(true);
  });
});
{% endhighlight %}

Cool, now you can easily test `handler()` decoupled from `router.get()` method by modularizing handler method and create `spy` function with `sinon`. Even though this is extremely simple example and I removed some complexity for the explanation, this is the reason why modularizing is so important to make our test easy.
<br>
<br>
<br>
<h4>Additional Resources</h4>
<a href="http://sinonjs.org/" target="_blank">Sinon.JS</a>
<br>
<a href="https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js" target="_blank">Best Practices for Spies, Stubs and Mocks in Sinon.js</a>