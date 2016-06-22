---
layout: post
title:  "_.template Method (Underscore.js)"
description: "_.template method of underscore.js"
permalink: templateMethod
---

When you build a web application, sometimes you need to add a DOM node directly to the DOM tree. <a href="http://underscorejs.org/" target="_blank">Underscore.js</a> provides _.template methods that allows you to easily create a DOM node with templating feature, so that you can add DOM node to DOM tree without a pain. Additionally, _.template methods also provide HTML escape feature that prevent your client from being messed by bad guys. 
<!--excerpt_separator-->

<h3>template <small>_.template(templateString, [settings])</small></h3>

Let's move on to the <a href="http://underscorejs.org/#template" target="_blank">documentation</a>.

> Compiles JavaScript templates into functions that can be evaluated for rendering. Useful for rendering complicated bits of HTML from JSON data sources. Template functions can both interpolate values, using <%= … %>, as well as execute arbitrary JavaScript code, with <% … %>. If you wish to interpolate a value, and have it be HTML-escaped, use <%- … %>.

Basically, _.template method takes two arguments which are string that indicate a template and setting option. Template string has three types of identifier which operate corresponding feature.

<ol>
    <li>Interpolate values : <%= ... %></li>
    <li>Excute JS code : <% ... %></li>
    <li>Interpolate value with HTML-escape : <-% ... %></li>
</ol>

{% highlight javascript linenos %}
var compiled = _.template("hello: <%= name %>");
compiled({name: 'moe'});
// => "hello: moe"
var template = _.template("<b><%- value %></b>");
template({value: "<script>"});
// => "<b>&lt;script&gt;</b>"
var template = _.template("<% _.times(5, function(i){ %><%- i %><% }); %>");
template();
// => "01234"
{% endhighlight %}

Those are quite straitforward and simple features as a template engine.(There are tons of template engines for JavaScript) 

Let me introduce one more feature that underscore template engine provides for you. Assume that there are JSON data which contains username, text, updatedAt properties. Now you create template for those data and try to convert them in to a form of HTML element(string). 

But, what if some of the JSON data doesn't have username property? 

It will break your application and not work properly.
How do we solve this problem?

{% highlight javascript linenos %}
var template = _.template('<span class="snglMsg"><%- _.escape(username) %> :
 <%- _.escape(text) %> <br><%- moment(updatedAt).fromNow() %></span>');
template({ /* data without username property */ });
// => Throw Reference Error
{% endhighlight %}

You can pass the object <em>{variable: 'whatever'}</em> as a 2nd parameter when you call _.template method and set the variables inside template with <em>whatever.variableName</em>.

{% highlight javascript linenos %}
var template = _.template('<span class="snglMsg"><%- _.escape(data.username) 
%> : <%- _.escape(data.text) %> <br><%- moment(data.updatedAt).fromNow() %>
</span>' , {variable: 'data'});
template({ /* data without username property */ });
// => Return String with blank in location of missing property 
{% endhighlight %}



When you build a web application, sometimes you need to add a DOM node directly to the DOM tree. And this is one of the vulnerable moment that easily can be attacked by <a href="https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)" target="_blank">XSS</a>. There are tons of XSS methods and Anti-XSS methods. But with Underscore, you can simply filter most of those malicious script. <strong>(NOT 100%!)</strong>

As I mentioned, <-% ... %> in template will allow you to interpolate value with <strong>HTML-escape</strong>. And Here is one more useful function that Underscore prepare for you.

<h4>escape</h4>

It's quite straight-forward to use. Just pass string as a argument, It will return HTML-escaped string. Isn't it cool?

{% highlight javascript linenos %}
_.escape('<script>');
// => "&lt;script&gt;"
_.escape(";document.createElement('div').text('you got pwned');");
// => ";document.createElement(&#x27;div&#x27;).text(&#x27;you got pwned&#x27;);"
{% endhighlight %}

<h3>Conclusion</h3>
Generally, recent JavaScript Frameworks provide built-in Escape feature to the users. So basically, users don't need to worry about it. But be aware that those escape features are not perfect and your application might be attacked anytime. 