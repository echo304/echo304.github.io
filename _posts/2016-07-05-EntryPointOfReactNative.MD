---
layout: post
title:  "Change Entry point of React-native App"
description: "React-native provide convenient CLI tool to start developement. But how to change entry point of react-native?"
permalink: reactNative-change-entrypoint
---

<em>Assumption : You know your way around <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a></em><br><br>
<a href="https://facebook.github.io/react-native/" target="_blank">React Native</a> is a framework for building native application using <a href="https://facebook.github.io/react/" target="_blank">React</a>. It's extremely easy to bootstrap React Native boilerplate and run the ios simulator with included React Native CLI command.
{% highlight bash %}
$ react-native init AwesomeProject
$ cd AwesomeProject
$ react-native run-ios
{% endhighlight %}

Let's figure out project structure and its contents.
<!--excerpt_separator-->
{% highlight bash %}
├── android
├── ios
├── index.android.js
├── index.ios.js
├── node_modules
└── package.json

3 directories, 3 files
{% endhighlight %}

In the root directory, `index.ios.js` file is an entry point of React Native application. But depending on the project management policy, there is a chance to change the location of entry point file. If you move `index.ios.js` file to other directory, an error will be thrown.

![Aggressive error screen](/assets/reactnative.png){: .resize-image .img-responsiv .center-block}
<center><em>So aggressive...</em></center><br>

Let's figure out how to change entry point of React Native application.
![change entry](/assets/reactnative.gif)

1. Open `ios/projectName` directory
2. Open `AppDelegate.m` file which contains entry point data
3. Modify jsCodeLocation declaration
4. Restart the ios simulator!

With that, you can change name of entry file for React Native app as well.

Enjoy Hacking!!
