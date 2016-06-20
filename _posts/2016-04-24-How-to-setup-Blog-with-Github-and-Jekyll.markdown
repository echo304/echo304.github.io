---
layout: post
title:  "How to start Blog with Github and Jekyll Pt.1"
---
Recently, there are tons of tool and framework that help you to have your own blog. Even if you don't have any experience of blogging like me, you don't need to worry about that. Jekyll comes to rescue you. In this article, I briefly introduce what Jekyll is and share <strong>"practical"</strong> tutorials to start Blogging with Jekyll.
<!--excerpt_separator-->

<br>

<h2>What is Jekyll, though?</h2>
> Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server. Jekyll also happens to be the engine behind GitHub Pages, which means you can use Jekyll to host your project’s page, blog, or website from GitHub’s servers for free.

One of the big misunderstanding about Jekyll is think it as a sort of Blogging Software, but it's a parsing engine implemented by Ruby. By reason of that, Jekyll does not provide any content or template to decorate your blog.
<br>
<br>
<h2>Jekyll Setup</h2>
<br>
Before we start, here are ingredients for the Gourmet.
<ol>
    <li><a href="https://www.ruby-lang.org/en/">Ruby</a> 2.2.0 (or latest)</li>
    <li>Of course, <a href="http://jekyllrb.com/">Jekyll</a> itself</li>
    <li>Friend of every developer, <a href="https://github.com/">Github</a></li>
</ol>

Some might be curious about Ruby, first one. As I mentioned earlier Jekyll was created based on Ruby Language, make sure your Ruby installed properly.
Good news here is if you are Mac User, Ruby has been installed on your machine.

<img align="middle" src="http://d1nr5wevwcuzuv.cloudfront.net/product_photos/3065045/beemo_20sticker_20template_original.png" alt="yay!">

But bad new is that version of built-in Ruby is extremely low

<img align="middle" src="http://orig01.deviantart.net/242d/f/2013/227/9/3/bmo_s_mustache_by_timelord242-d6icafl.png" alt="hmm">
  
<br>
<br>

<h3>Let's get started from Ruby setup</h3>
Since Ruby is built-in on OSX, some method of updating Ruby, for example brew, doesn't work properly(Not sure about the reason)
So, I recommend you to update Ruby by using RVM.
<a href="https://rvm.io/rvm/install">RVM</a> is one of the common and easy ways to update the Ruby on your machine. 
<br>
<br>
Ok, install RVM first. 

{% highlight sh %}
$ curl -sSL https://get.rvm.io | bash -s stable --rub
{% endhighlight %}
<br>

After you install RVM, then upgrade your Ruby.

{% highlight sh %}
$ rvm upgrade 2.2.0
{% endhighlight %}
<br>
And make sure that you type below command to make RVM use new version of Ruby.

{% highlight sh %}
$ rvm use ruby-2.2.0
{% endhighlight %}
<br>
Yay! Now you are ready to start to ready. Let's move on to Jekyll setting.
<br>
<br>
<br>
<h3>Install Jekyll</h3>
<br>
Once you upgrade your Ruby properly, you can simply type below command on your terminal to make Gem to download Jekyll.
(Gem is package manager for Ruby like NPM of Node.js)
<br>
<br>
{% highlight sh %}
$ gem install jekyll
{% endhighlight %}
<br>
Now, move on to the directory where you want to store posts, static files, whatever. You can simply initialize Jekyll.
<br>
<br>
{% highlight sh %}
$ jekyll new myblog
$ cd myblog
~/myblog $ jekyll serve
{% endhighlight %}
<br>
If you want to install jekyll into an existing directory, you can do so by running 
{% highlight sh %}
$ jekyll new .
{% endhighlight %}
from within the directory instead of creating a new one. If the existing directory isn't empty, you'll also have to pass the force flag onto it.
{% highlight sh %}
$ jekyll new . --force
{% endhighlight %}

Jekyll comes with a built-in development server that will allow you to preview what the generated site will look like in your browser locally.

`http://localhost:4000`
<br>
<br>

<h3>Github as a Storage</h3>
Before move on, make sure you have your own Github account.
Login with your account, create new repository your blog url with the account name. Here's an example. `echo304.github.io` <br>(You don't need to care about settings there, just create one)
<br>
<br>
that's all what you have to do on Github website. 
Now, it's time to link your github repository and local jekyll directory.
Move on to the directory you've made and initialize your git setting, then add remote with your github repository url.
<br>
{% highlight sh %}
$ git init
$ git remote add origin http://YOUR GIT REPO URL HERE
{% endhighlight %}
<br>
<br>

Your Repository and Jekyll directory are linked! Let's have some test.
Add every file in the local directory and push them to the remote.
<br>
{% highlight sh %}
$ git add .
$ git commit -m "Initial Commit"
$ git push origin master
{% endhighlight %}
<br>
<br>
And here comes your Blog! You made it!
<br>
`http://youracount.github.io/`

You can post new article or modify exist post(Welcome to Jekyll!) by editing a file inside <strong>_post</strong> directory.
Make sure don't change file format or front-matter of the file!
(Explain Later..)


(Continued on Pt.2)

