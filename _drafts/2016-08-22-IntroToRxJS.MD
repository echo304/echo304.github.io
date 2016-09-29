---
layout: post
title:  "Introduction to RxJS"
description: "Reactive Programming, stream, observable and brief introduction to RxJS"
permalink: introductionToRxJs
---

<p>
  <a href="http://reactivex.io/" target="_blank">Reactive Extension</a> is an open-source library for composing asynchronous and event-based programs by using observable. ReactiveX has variety of implementations for several programming languages including C#, Java, Scala, Swift, JavaScript and the others. In these series of posts regarding Reactive Extension cover mainly on RxJS, which is an implementation for JavaScript.
</p>
<!--excerpt_separator-->

<h4>What is Observables?</h4>
<p>
  The Rx's Observable is a stream that emit data asynchronously and continuously over time. Which means that Observables allow developers to work with an interface that provides extremely intuitive and straight-forward way of programming asynchronous tasks. Basically, the observable is just one of the main elements of Rx and there are other elements that constitute Rx. (Operators, Subjects, etc..) Many people explain the observable with a stream but I think it may not be super clear those who are not familiar with a concept of stream.(Many junior deveolpers including myself) Instead, I'm going to say that observable is just an interface that helps developers to handle event easily.
</p>
<p>
  Basically, the event system in JavaScript is asynchronous. This is cristal clear and make sense to every JavaScript developer. But as you might know, managing event/listener is bit cumbersome because of the following reasons.
  <ul>
    <li>1. Memory Leakage : You may forget to remove the event listner once it will not be used anymore, which causes performance issue</li>
    <li>2. Multiple Event : Your application become more complicated when you handle multiple events</li>
    <li>3. Lack of Parallel excution : JavaScript's event system makes it easy to handle asynchronous tasks but we need more on parallel excutions!</li>
  </ul>
</p>
<p>
  And Observables comes rescue. With Observables you can handle most of the complicated asynchronous situation very easily. Before diving into the world of Observables, let's briefly talk about a rising programming paradigm 'Reactive Programming'.
</p>

<h4>What is Reactive Programming?</h4>
<p>
  The reactive programming is a paradigm that creating a program that is reactive to the data which is consistently changing. 

  In JavaScript world, we can achieve it by using RxJS and wielding the observables as a powerful weapon.
</p>
