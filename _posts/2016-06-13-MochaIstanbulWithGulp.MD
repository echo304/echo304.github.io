---
layout: post
title:  "Mocha, Istanbul and Nodemon with Gulp"
description: "How to use Mocha, Istanbul and Nodemon with Gulp for server-side test and coverage check"
permalink: MochaAndIstanbulAndGulp
---

In 2016, <a href="https://en.wikipedia.org/wiki/Test-driven_development" target="_blank">Test Driven Development(TDD)</a> is no longer brand new concept. Because of that reason, TDD and importance of Testing will not be covered in this article. I'm going to introduce how to automated the server-side testing and test coverage reporting with Gulp-the task runner.

<!--excerpt_separator-->

Like TDD and Testing, the task runner is not in the scope today. So let me briefly talk about task runner.

JavaScript has two main players of task runner that helps developer automate repetitive simple task, which increase efficiency of work flow and productivity. 
First one is <a href="http://gruntjs.com/" target="_blank">Grunt</a> which is more mature and has more plugin and Community. And Second one is <a href="http://gulpjs.com/" target="_blank">Gulp</a>, which will be covered in this article.

Obviously, both task runners work well with most of the current utilities help writing JavaScript application. But compared with Grunt, Gulp is relatively hard to use for whom is not familiar of JavaScropt, because it uses concept of <a href="https://nodejs.org/api/stream.html" target="_blank">Stream</a> which is core part of Node.js.

<h3>Code Example</h3>

Let's dive into actual implementation for setting up automated testing.
Basic requirements are Gulp, Nodemon, Mocha and gulp-wait plugin to give delay between our tasks.

Let's install those requirements with ```npm install```.
{% highlight bash %}
$ npm install --save-dev gulp gulp-nodemon gulp-mocha gulp-wait
{% endhighlight %}

Here is the basic setting for Mocha, Nodemon with Gulp.
<br>
{% highlight javascript %}
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');
var wait = require('gulp-wait');

gulp.task('default', ['nodemon', 'server-test'], function () {
  // set debounceDelay to make sure 'server-test' doesn't run multiple times
  gulp.watch('./server/**/*.js', {debounceDelay: 500}, ['server-test']);
  gulp.watch('./test/server/*.js', {debounceDelay: 500}, ['server-test']);
});

gulp.task('server-test', function(cb) {
  gulp.src('./test/server/ServerSpec.js', {read: false})
    // wait till nodemon get restarted
    // without wait process, mocha often runs before nodemon get re-started
    .pipe(wait(1500))
    .pipe(mocha({
      reporter: 'spec'
    }));
});

gulp.task('nodemon', function (cb) {
  var started = false;
  return nodemon({
    // server file definition
    script: './index',
    ext: 'js'
  }).on('start', function () {
    //avoid nodemon being started multiple times
    if (!started) {
      cb();
      started = true;
    }
  })
  .on('crash', function() {
    console.log('nodemon.crash');
  })
  .on('restart', function() {
    console.log('nodemon.restart');
  })
  .once('quit', function () {
    process.exit();
  });
});
{% endhighlight %}
<br>

With above example code, ```nodemon``` will restart your server once any of files are changed followed by ```'server-test'``` task. Although ```mocha``` test sometime displays weird error<strong style="color: red">(Remember this error!!!)</strong> messages when some of the test fail on the terminal but doesn't break gulp process and works well.

Let's add Instanbul gulp plugin that allows us to check test coverage.
{% highlight bash %}
$ npm install --save-dev gulp-istanbul gulp-plumber
{% endhighlight %}
What is ```gulp-plumber``` though?
As I mentioned before, Gulp uses stream, which can be utilized with <a href="https://nodejs.org/api/stream.html#stream_readable_pipe_destination_options" target="_blank">pipe</a> method, as its core part.
Literally, ```gulp-plumber``` is a plumber that fixes pipe of Node.js stream when the pipe has some dirty error<strong style="color: red">(Yeah, that error)</strong> inside of it.

Here is the code example.

{% highlight javascript %}
// other codes...

// add more dependencies
var istanbul = require('gulp-istanbul');
var plumber = require('gulp-plumber');

// add more codes to 'server-test' task
gulp.task('server-test', ['pre-test'], function(cb) {
  gulp.src('./test/server/ServerSpec.js', {read: false})
    // hire a plumber to clean out gulp pipe before you start actual task!
    // without the plumber, gulp task will break with unhandled error event
    // which is extremely annoying
    .pipe(plumber())
    // wait till nodemon get restarted
    // without wait process, mocha often runs before nodemon get re-started
    .pipe(wait(1500))
    .pipe(mocha({
      reporter: 'spec'
    }))
    .pipe(istanbul.writeReports())
    // Enforce a coverage of at least 90% (customize it!)
    .pipe(istanbul.enforceThresholds({ thresholds: { global: 90 } }))
    .on('end', function () {
      cb();
    });
});

gulp.task('pre-test', function () {
  gulp.src(['server/**/*.js']) // Covering files
    // with includeUntested option, Istanbul will check test coverage upon
    // files that are actually tested, which is not accurate report.
    .pipe(istanbul({includeUntested: true}))
    // Force `require` to return covered files
    .pipe(istanbul.hookRequire());
});

// other codes...
{% endhighlight %}

By adding above example codes, you can check test results and code coverage report every time you change a file from the target source. And there is a log about plumbing a unhandled error by our plumber!! Great!

{% highlight bash %}
[15:17:34] Plumber found unhandled error:
 Error in plugin 'gulp-mocha'
Message:
    11 tests failed.
--------------------|----------|----------|----------|----------|----------------|
File                |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
--------------------|----------|----------|----------|----------|----------------|
 server/            |      100 |      100 |      100 |      100 |                |
  app.js            |      100 |      100 |      100 |      100 |                |
 server/controller/ |    18.87 |      100 |      9.3 |    18.87 |                |
  followers.js      |      100 |      100 |      100 |      100 |                |
  items.js          |    14.71 |      100 |     7.41 |    14.71 |... 88,90,93,96 |
  users.js          |    26.32 |      100 |     12.5 |    26.32 |... 43,44,47,57 |
 server/db/         |       75 |    91.67 |      100 |       75 |                |
  config.js         |       75 |    91.67 |      100 |       75 |        9,10,11 |
 server/handler/    |      100 |      100 |      100 |      100 |                |
  handler.js        |      100 |      100 |      100 |      100 |                |
 server/models/     |    92.86 |      100 |        0 |    92.86 |                |
  followers.js      |      100 |      100 |      100 |      100 |                |
  items.js          |      100 |      100 |      100 |      100 |                |
  users.js          |    85.71 |      100 |        0 |    85.71 |             29 |
 server/routes/     |      100 |      100 |      100 |      100 |                |
  index.js          |      100 |      100 |      100 |      100 |                |
  items.js          |      100 |      100 |      100 |      100 |                |
  users.js          |      100 |      100 |      100 |      100 |                |
--------------------|----------|----------|----------|----------|----------------|
All files           |    59.83 |    91.67 |       20 |    59.83 |                |
--------------------|----------|----------|----------|----------|----------------|


=============================== Coverage summary ===============================
Statements   : 59.83% ( 70/117 )
Branches     : 91.67% ( 11/12 )
Functions    : 20% ( 10/50 )
Lines        : 59.83% ( 70/117 )
================================================================================
{% endhighlight %}

This article ends here. Improve your testing experience with Gulp, Mocha and Istanbul.

Enjoy hacking!!

You can find full ```gulpfile.js``` <a href="https://gist.github.com/echo304/cf9c645e6e65b131018505aa58e20078" target="_blank">here</a>.
