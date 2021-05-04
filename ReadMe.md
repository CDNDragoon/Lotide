# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @cdndragoon/lotide`

**Require it:**

`const _ = require('@cdndragoon/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `_.head`: Returns the first element in an array or the first index in a string. 
                     (element) => `returns first item in array/string`
* `_.tail`: Returns everything except the first element in an array or the indexs in a string.
                     (element) => `returns tail end in a array/string`
* `_.middle`: Returns the middle element in a array or the middle index in a string.
                     (element) => `returns middle in a array/string`
* `_eqArrays`: Returns whether or not two strings or two arrays match exactly.
                     (element) => `returns the outcome of two arrays/strings if they match completely or not`
* `_assertEqual`: Returns if two assertions are equal or not.
                     (element) => `returns the if two assertions match expections`
* `_assertArraysEqual`: Returns the outcome of two arrays and whether or not they match exactly
                     (element) => `returns two arrays and if they match exact expectations`