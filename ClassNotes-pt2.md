# CSS

### Positioning

**Centering Horizontally**
_Horizontal Text Elements_ - use the `text-align` css property with a value of `center`.

```css
.centered-text {
    text-align: center;
}
```

_Horizontal Block Elements_ - use the `margin` property and assign the right and left margin properties to `auto` see the below for shorthand.

```css
.centered-block {
    margin: 0 auto;
}
```

**Centering Vertically**

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```

**Flexbox**
An easier way to position elements, rather than concerning yourself with vertically-based block layouts and inline-based horizontal layouts. Gives the container the ability to alter its items' width/height to best fill the available space. Useful for mobile compatible development.

Main Axis = Horizontal Axis
Cross Axis = Vertical Axis

Properties that control alignment

-   `justify-content` controls alignment of all items on main axis
-   `align-items` controls alignment of all items on the cross axis

**Centering both Vertically and Horizontally**

Use `align-items` to center your div in the "cross" axis (y axis) and use `justify-content` to align your div on the "main" axis (x-axis)

```css
.parent {
    display: flex;
    align-items: center;
    justify-content: center;
}
```

**Footers**

```css
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}
```

[More information on Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
[More Information on Float](https://www.w3schools.com/css/css_float.asp)

# Javascript

_HTML_ - you can attach a Javascript file to an HTML file in the header section using the `<script>` tag.

**What is Javascript?**
Programming language, often abbreviated as JS which enables interactive web pages and is an essential part of client-based web applications. Web browsers have a Javascript engine that compiles and executes Javascript pulled in as a source file from the server that is hosting the site.

### Data Types

-   string - a series of text characters like "Hello". you can use single or double quotes.
-   number - two types of numbers, numbers with decimals, and ones without.

```js
var x1 = 34.0; // Written with decimals
var x2 = 34; // Written without decimals
```

-   boolean - can have two values, true or false.
-   array - a collection of data

```js
var cars = ["Saab", "Volvo", "BMW"];
var items = [1.0, 1, "1", true];
```

### Variables

Variables are containers that store values.
Assignment - assigning a value to a variable.
Declaration - defining the type of the variable.

-   `var` - The main way to declare a variable. The **scope** of this variable can be global or local. The scope is global when the var is declared outside of a function, meaning any variable declared with var outside of a function block is available for use in the whole window. However, when it is declared within a function, it is available to that function and can be accessed only within that function. Try to avoid `var` because it is deprecated.

-   `let` - was introduced as an improvement to `var` in that it is locally scoped. Meaning you cannot access it outside of the block that it was declared. Specifically for a variable that you can re-assign.

```javascript
let greeting = "say Hi";
let times = 4;

if (times > 3) {
    const hello = "say Hello instead";
    console.log(hello); // "say Hello instead"
}
console.log(hello); // hello is not defined
```

-   `const` - maintains a constant value. Shares some similarities with `let` in that it can only be accessed in the block where it is scoped. `const` cannot be updated or re-declared.

_mutable_ - A mutable object is an object whose state can be modified after it is created.

```javascript
let a = ["foo", "bar"];
let b = a;

a.push("baz");

console.log(b); // ['foo', 'bar', 'baz']
console.log(a === b); // true
```

[Good article for immutable/mutable examples](https://benmccormick.org/2016/06/04/what-are-mutable-and-immutable-data-structures-2)

```javascript
const greeting = "say Hi";
greeting = "say Hello instead"; // error: Assignment to constant variable.
```

_Note: Javascript is a case sensitive language_

### Declarations or Assignments

Assigns a value to it's corresponding variable.

```javascript
const greeting = "hi";
var num = 3;
```

_null_ - an object in javascript. You can assign it to a variable

```js
var demo = null;
```

_undefined_ - a variable was declared but no value has been assigned to that variable

```js
var demo; //undefined
```

### Comparisons

`==` - Checks to see if the one value is equal to another

```javascript
if (num == 3) {
    //do something
}
```

`===` - Checks to see if the value and the TYPE are equivalent

```javascript
0 == "0"; //true
0 === "0"; //false
```

### Scope

_Determines the visibility of local and global variables._

```javascript
// code here can NOT use carName

function myFunction() {
    var carName = "Volvo";

    // code here CAN use carName
}
```

https://en.wikipedia.org/wiki/Variable_shadowing#JavaScript

### Data Types

-   string - a series of text characters like "Hello". you can use single or double quotes.
-   number - two types of numbers, numbers with decimals, and ones without.

```js
var x1 = 34.0; // Written with decimals
var x2 = 34; // Written without decimals
```

-   boolean - can have two values, true or false.
-   array - a collection of data

```js
var cars = ["Saab", "Volvo", "BMW"];
```

_mutable_ - A mutable object is an object whose state can be modified after it is created.

```javascript
let a = ["foo", "bar"];
let b = a;

a.push("baz");

console.log(b); // ['foo', 'bar', 'baz']
console.log(a === b); // true
```

[Good article for immutable/mutable examples](https://benmccormick.org/2016/06/04/what-are-mutable-and-immutable-data-structures-2)

_null_ - an object in avaript. You can assign it to a variable

```js
var demo = null;
```

_undefined_ - a variable was declared but no value has been assigned to that variable

```js
var demo; //undefined
```

### Numbers

**Converting to a Number**
`parseInt()` - converts a string into an integer whole number. Accepts two arguments, a whole number and a radix for the base number in mathematical systems. For our use it will always be base 10.

```js
var text = "42px";
var integer = parseInt(text, 10);
// returns 42
```

`parseFloat()`- converts a string into a point number (floating point).

```js
var text = "3.14";
var pointNum = parseFloat(text);
// returns 3.14
```

`Number()` - converts a string to a number.

```js
// Convert strings
Number("123"); // returns 123
Number("12.3"); // returns 12.3
Number("3.14someRandomStuff"); // returns NaN
Number("42px"); // returns NaN
```

`NaN` is a failure flag that stands for Not a Number.

You can compare numbers using the following

-   `<` - less than
-   `>` - greater than
-   `<=` - less than or equal to
-   `>=` - greater than or equal to

You can incement or decrement a whole number by using `++` or `--`.

```js
// Increment
let a = 1;
console.log(a++); // 1
console.log(a); // 2
// Decrement
let b = 1;
console.log(b--); // 1
console.log(b); // 0
```

Hmmm... Why did it do that?

Because we used the `++` and `--` as a post-fix, it increments, after it returns the function. We can resolve this by prefixing.

```js
//Increment
let a = 1;
console.log(++a); // 2
console.log(a); // 2

//Decrement
let b = 1;
console.log(--b); // 0
console.log(b); // 0
```

### Generating a Random Number

The [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) library is built into Javascript. You can use the Math.random to generate a random number between [0, 1) (inclusive/exclusive)

```js
Math.random(); // returns a random number, always lower than 1
```

Using `Math.floor()` converts the decimal into an integer (the next lowest integer)

```js
Math.floor(Math.random() * 10); // returns a random integer from 0 to 9
```

### Strings

You can compare strings, similarly to how you compare numbers.

```js
"demo" == "demo"; //true
"hello" == "Hello"; //false
"a" > "b"; // false
```

_Note: Comparison is case sensitive._

`.toLowerCase()` - converts a string to lowercase.

`.toUpperCase()` - converts a string to uppercase

Interpolation

You can insert code values directly into strings by using string interpolation.

```js
`Result is ${result}`;
```

#### Functions

A JavaScript function is a block of code designed to perform a particular task.

```js
function multiply(p1, p2) {
    return p1 * p2; // The function returns the product of p1 and p2
}
```

In the above example, multiply is the name of the function, and `p1` and `p2` are the parameters of the function. We are returning the value of the product of the two parameters.
