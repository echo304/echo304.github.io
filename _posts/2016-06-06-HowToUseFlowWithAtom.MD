---
layout: post
title:  "Flow - Lightweight Type checker"
---

JavaScript is one of the language that easy to learn thesedays because very flexible nature of the language. The Flexibility of JavaScript consist of many factors including its loose type checking which sometime cause unexpected result and sometimes comes in handy. 

<!--excerpt_separator-->
<br>
{% highlight javascript %}
var a = 1;
var b = '0';
var c = a > b;
console.log(c);
// => true
var a = 1;
var b = '0';
var c = a + b;
console.log(c);
// => '11'
{% endhighlight %}
<br>
This property is definitely two side of the same coin.

Like above example, it will increases uncertainty of your application.(JavaScript has some flaws from the very beginning, like <a href="https://github.com/getify/You-Dont-Know-JS/blob/master/types%20&%20grammar/ch1.md#built-in-types" target="_blank">this</a>) Regardless of result of loose type checking(even if it helps you or it break whole application), this kind of unpredictable cases better to be avoided from common S/W.  

In this situation, <a href="http://flowtype.org/" target="_blank">Flow</a> comes to our rescue. Flow is a open-source static type checker for JavaScript. It improves developer productivity and code quality. By checking type of the variables, function arguments, return values and more, common bugs in JS application can be caught before it runs including below problem. <br>

- automatic type coercion <br>
- `null` problem <br>
- `undefined is not a function` <br>

One Awesome characteristic of Flow is Compatibility which is related to 'Lightweight' type checker I mentioned on the title. Flow is easy to start and easy to use. 

First, You don't need to re-write your existing JavaScript application from the scratch. You can get benefit of Flow by adding `// @flow` comment on the top of the file you want to check type. This comment indicates that we want for Flow to check this file. 

Second, You can easily use Flow by adding one plugin to babel. Compared to <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, this is very attractive feature that makes user get started Flow.

<br><br>
<h3>Get Started</h3>
On the official Website, there is a <a href="http://flowtype.org/docs/getting-started.html#_" target="_blank">tutorial</a> that run Flow with cli tools and npm script. Personally, I prefer to use Flow with <a href="http://babeljs.io/" target="_blank">Babel</a> that is JavaScript Compiler which support Flow plugin. To differenciate from official document, I'm going to briefly explain how to use Flow with Babel.

First, we need to install and setup babel. Since Babel website provide detail instruction about Babel setup, I'll skip this step.

{% highlight json %}
package.json
{
  "name": "flow",
  "version": "1.0.0",
  "scripts": {
    "build": "babel src -d lib -w"
  },
  "dependencies": {
    "babel-cli": "^6.9.0"
  }
}
{% endhighlight %}

Second, <a href="https://github.com/codemix/babel-plugin-typecheck" target="_blank">Flow plugin</a> for Babel is needed. 

{% highlight bash %}
$ npm install --save babel-plugin-typecheck
{% endhighlight %}

Then, add `"typecheck"` plugin in your babel configuration(`.babelrc`)

{% highlight json %}
.babelrc
{
  "presets": ["react"],
  "plugins": [
    ["typecheck", {
      "disable": {
        "production": true
      }
    }]
  ]
}
{% endhighlight %}
"disable" option will disable typecheck if `NODE_ENV` is `production`.
And if you don't use `react preset` with `typecheck` plugin, additional two plugin(`"syntax-flow", "transform-flow-strip-types"`) should be manually downloaded and added to the `plugins` list because those two plugins are included in `react preset`. And make sure to put them after typecheck in the list.

{% highlight json %}
.babelrc
{
  "plugins": ["typecheck", "syntax-flow", "transform-flow-strip-types"]
}
{% endhighlight %}

Now you are ready to play around with flow! (Don't forget to run `npm run build`)

Let's start with very simple example. <br>
with `: string` annotation, the type of `strVar` variable is fixed with String and same thing happens to `numVar` type of Number.

{% highlight flow %}
/* @flow */
const strVar: string = 'It should be String!!!';
const numVar: number = 1;
{% endhighlight %}


What if I try to assign String type value to `numVar` variable which is set to Number type?
{% highlight flow %}
/* @flow */
const strVar: string = 'It should be String!!!';
const numVar: number = '1';
{% endhighlight %}


Babel Compiler returns SyntaxError!
{% highlight bash %}
SyntaxError: src/index.js: Invalid assignment value for "numVar".

Expected:
number

Got:
string
  1 | /* @flow */
  2 | const strVar: string = 'It should be String!!!';
> 3 | const numVar: number = '1';
    | ^
  4 |
  5 | console.log(process.env);
  6 |
{% endhighlight %}

Not only variable, but also function argument, function return value can be set a type.
{% highlight flow %}
// @flow

// set string type to x, number type to y, number type to return value!
function foo(x: string, y: number): number {
  return x.length * y;
}

foo('Hello', 42);
{% endhighlight %}

How about Array?
{% highlight flow %}
// @flow

function bar(numbers: Array<number>): number {
  var result = 0;
  for(var i = 0; i < numbers.length; i++) {
    result = result + numbers[i];
  }
  return result;
}

bar([1, 2, 3, 4]);
{% endhighlight %}
And there are more examples and use cases on the official website. I can't cover every Flow syntax here, so you can refer it to learn more about Flow.


<br><br>
<h3>With <a href="https://atom.io/" target="_blank">Atom</a>...</h3>
Flow becomes more powerful. 

Atom is open-source text-editor created by Github with rich packages and strong community(and totally free) Recently, I moved from ST3 to Atom even though Atom still have startup delay issue because it's more interactive than ST.

To enhance your Flow experience with Atom, you need three packages. <br>
- <a href="https://atom.io/packages/linter" target="_blank">linter</a> <br>
- <a href="https://atom.io/packages/linter-flow" target="_blank">linter-flow</a> <br>
- <a href="https://atom.io/packages/language-babel" target="_blank">language-babel</a> <br>

After install those packages, install `flow-bin` npm module globally and type `flow init` in your working directory to create `.flowconfig` file for linter-flow package. 

And...Boom! Now you can check type with real-time without switching your text-editor screen to terminal to check result of babel complier.

<img src="https://i.github-camo.com/b80f7d4c1217ffc30c88186b21322653198bd47c/68747470733a2f2f6e616d616e2e73332e616d617a6f6e6177732e636f6d2f6c696e7465722d666c6f772d706c75732f6c696e7465722d666c6f772d706c75732e676966" alt="">

<br>
<br>
<br>
<h3>One more thing prepared for you</h3>
<h4>Why JavaScript has so many Flaws?</h4>
<iframe width="560" height="315" src="https://www.youtube.com/embed/fg4e-2lBw5E" frameborder="0" allowfullscreen></iframe>
