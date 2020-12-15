# Transition Values
Simple library for JavaScript that allows users to translate between values step by step

### Table of Content
* [Information](#information)
* [Implementation](#implementation)
* [Reference](#reference)

---

## Information
Transition Values is a simple library for JavaScript that lets people create an araay that contains a range of numbers in amount of steps you can specify
It's fairly new and might not be easy to understand for some people, and there may be a few opportunities to clean up code.

## Implementation
TODO: Explain how to implement library to HTML

## Reference
`CreateTransition(min, max, steps, usedecimal)`
Alias: `createTrans`
Returns: `array`

Function to create an array with range of values in steps.

Arguments:
* `min`: `number` type, used for minimum value
* `max`: `number` type, used for maximum value
* `steps`: `number` type, generally used to be proper target length
* `usedecimal`: `boolean` type, if false it rolls the number with decimal point to make number integer

Example:
```js
CreateTransition(1, 10, 10, true);
/*
returns Array:
1
2
3
4
5
6
7
8
9
10
*/
