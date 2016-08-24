---
layout: post
title:  "Introduction to RxJS"
description: "Reactive Programming, stream, observable and brief introduction to RxJS"
permalink: introductionToRxJs
---

<a href="http://reactivex.io/" target="_blank">Reactive Extension</a> is a library for composing asynchronous and event-based programs by using observable.

<h4>What is Observables?</h4>
The Rx's Observable is a stream that emit data asynchronously and continuously over time. Which means that Observables allow developers to work with an interface that provides extremely intuitive and straight-forward way of programming asynchronous process. Basically, the observable is just one of the main element of Rx and there are other elements that constitute Rx. (Operators, Subjects, etc..) Many people explain the observable with a stream but I think it may not be super clear those who are not familiar with a concept of stream.(Many junior deveolpers including myself) Instead, I'm going to say that observable is just an interface that helps people to handle event easily. Basically, the event system in JavaScript is asynchronous. This is cristal clear and make sense to every JavaScript developer.

<h4>What is Reactive Programming?</h4>
The reactive programming is a paradigm that creating a program that is reactive to the data which is consistently changing. In JavaScript world, we can achieve it by using RxJS and wielding the observables as a powerful weapon.
<!--excerpt_separator-->
