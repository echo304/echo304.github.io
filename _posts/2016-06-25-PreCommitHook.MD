---
layout: post
title:  "Utilizing Npm Pre-commit Hook"
description: "Utilizing npm pre-commit hook to make your life happy"
permalink: npmPreCommitHook
---

As you and your team's application grows bigger and bigger, cost of repetitive task grows significantly even though the task is very tiny little thing. There are many tool to rescue you from the endless loop of tedious task and NPM is one of them. (And if your project is based on git)

Basically, <a href="https://www.npmjs.com/" target="_blank">NPM</a> is a package manager for Node.js. But it also can be used as a build tool.
<!--excerpt_separator-->

Even though all the tasks are automated with <a href="http://gulpjs.com/" target="_blank">gulp</a> or <a href="http://gruntjs.com/" target="_blank">grunt</a>, NPM can be utilized as a final safety lock for your commit and even for the deployment. Because there is a possibility that you(or your colleague) accidentally change some code after gulp task(which include linting) is terminated and before commit to Git. In that case, your code might be not tested and linted which cause potential errors. 

And <a href="https://www.npmjs.com/package/precommit-hook" target="_blank">precommit-hook</a> comes to rescue you. This module allows you to add pre-commit hook script in ```package.json```, which will be excuted just before you commit your changes with ```git commit``` .

<br>
First, install ```precommit-hook``` npm module with ```--save-dev``` flag. (You don't need to install it as devDependencies but it is highly recommended to make sure anyone who working on the project will have this hook to be installed)
{% highlight bash %}
$ npm install --save-dev precommit-hook
{% endhighlight %}
<br>

Second, just add "pre-commit" property on ```package.json``` and pass array of string that represent npm script.
{% highlight json %}
{
  "scripts": {
    "start": "node index.js",
    "test:server": "./node_modules/.bin/mocha  test/ServerSpec.js",
    "test:web": "./node_modules/.bin/mocha test/WebSpec.js",
    "test": "npm run test:server && npm run test:web" 
  },
  "pre-commit": [
    "test" 
  ]
}
{% endhighlight %}
<br>

Those are all for the configuration. From now, whenever you try to commit, npm script included in array of pre-commit hook will be excuted. And if the excution throws an error or fails, commit will not proceed anymore. YOU HAVE TO FIX ERROR OR TEST before you commit again. <br>

Happy Hacking!

<br>
(* With ```-n``` flag on commit command, you can avoid pre-commit hook verification *)  
