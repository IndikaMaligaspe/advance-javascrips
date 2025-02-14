# Performance Optimization in JavaScript

Performance optimization is crucial for creating efficient and responsive applications. This section covers various techniques for optimizing JavaScript code, including debouncing and throttling.

## Table of Contents

1. [Introduction](#introduction)
2. [Debouncing](#debouncing)
3. [Throttling](#throttling)
4. [Examples](#Examples)
5. [Further Reading](#further-reading)

## Introduction

Performance optimization involves techniques to improve the speed and efficiency of your code. Two common methods for controlling the rate of function execution are **debouncing** and **throttling**.

## Debouncing

Debouncing ensures that a function is only executed after a certain amount of time has passed since it was last invoked. This is useful for scenarios where you want to limit the number of times a function is called, such as handling search input where you only want to send a request after the user has stopped typing.




## Throttling

Throttling ensures that a function is only executed once every specified amount of time. This is useful for scenarios where you want to limit the rate at which a function is called, such as handling scroll events where you want to perform an action at most once every few milliseconds

## Lazy loading

Lazy loading is the practice of loading resources (like images, scripts, components or modiles) only when they are needed rather than at the initial page load. For example, images that are not in the initial viewport can be loaded only when the user scrolls down to them.

## Examples
1. Debouncing Example - [Typescript](./debounce.ts) , [Javascript](./debounce.js)
2. Throttling Example - [Typescript](./throttle.ts) , [Javascript](./throttle.js)
3. Lazy Loading Example - [web](./web/lazy_load/README.md) , [console](./lasyload.ts)



