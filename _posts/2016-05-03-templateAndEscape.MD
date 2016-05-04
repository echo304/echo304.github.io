---
layout: post
title:  "_.template & _.escape (Underscore.js)"
---

When you build a web application, sometimes you need to add a DOM node directly to the DOM tree. <a href="http://underscorejs.org/" target="_blank">Underscore.js</a> provides _.template methods that allows you to easily create a DOM node with templating feature, so that you can add DOM node to DOM tree without a pain. Additionally, _.template methods also provide HTML escape feature that prevent your client from being messed by bad guys. 

<h3>template <small>_.template(templateString, [settings])</small></h3>

Let's move on to the <a href="http://underscorejs.org/#template" target="_blank">document</a>.

> Compiles JavaScript templates into functions that can be evaluated for rendering. Useful for rendering complicated bits of HTML from JSON data sources. Template functions can both interpolate values, using <%= … %>, as well as execute arbitrary JavaScript code, with <% … %>. If you wish to interpolate a value, and have it be HTML-escaped, use <%- … %>.

Basically, _.template method takes two arguments which are string that indicate a template and setting option.
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
template({value: '<script>'});
// => "<b>&lt;script&gt;</b>"
{% endhighlight %}

<h3>escape</h3>

{% highlight javascript linenos %}
_.escape('<script>');
// => "&lt;script&gt;"
_.escape(";document.createElement('div').text('you got pwned');");
// => ";document.createElement(&#x27;div&#x27;).text(&#x27;you got pwned&#x27;);"
{% endhighlight %}