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
In HTML:
```html
<head>
  <script src=""></script>
</head>
```

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
console.log(CreateTransition(0, 10, 10, true));
/*
returns Array:
0
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
```

---

`AdvancedCreateTransition(min, max, steps, decimalhandling)`
Alias: `createTrans_a`
Returns: `array`

Function to create an array with range of values in steps with various settings.
You can choose to floor, round or ceil the number in 4th argument or anything else to do nothing about it.

Arguments:
* `min`: `number` type, used for minimum value
* `max`: `number` type, used for maximum value
* `steps`: `number` type, generally used to be proper target length
* `decimalhandling`: `integer` or `string` type. `1`, `"f"` or `"floor"` "floor"s the number, `2`, `r` or `round` rounds the number to closest integer, and fjnally `3`, `c`, `ceil` ceils the number. Anything else can be used but it doesn't change the output so it leaves it as it was.

Example:
```js
console.log(AdvancedCreateTransition(0, 5, 10, 2);
/*
returns Array:
0
1
1
2
2
3
3
4
4
5
5
*/
```
