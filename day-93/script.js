/**
Challenge 1
Thinking point (no writing code necessary for this challenge): Inspect the code given to you in Challenge 1. In what order should the console logs come out? Howdy first or Partnah first?
 */

// function sayHowdy() {
//     return 'Howdy'
// }

// function testMe() {
//     setTimeout(sayHowdy, 0);
//     return 'Partnah'
// }
// testMe() // ---> 1) 'Partnah' 2) 'Howdy


/**
Challenge 2
Create a function delayedGreet that console logs welcome after 3 seconds.
 */

// function delayedGreet(value) {
//     console.log(value);
// }
// setTimeout(delayedGreet, 3000, 'welcome')


/**
Challenge 3
Create a function helloGoodbye that console logs hello right away, and good bye after 2 seconds.
 */

// function helloGoodbye(value) {
//     console.log(value);
// }
// setTimeout(helloGoodbye, 2000, 'good bye')
// helloGoodbye('hello');


/**
Challenge 4
Create a function brokenRecord that console logs hi again every second. Use the End Code button to stop the console logs when you are satisfied that it is working.
 */

// function brokenRecord(value) {
//     setTimeout(brokenRecord, 1000, value)
//     console.log(value);
// }
// brokenRecord('hi');


/**
Challenge 5
Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.
 */

// let count = 0;
// function limitedRepeat(value) {
//     let myTimeout = setTimeout(limitedRepeat, 1000, 'hello')
//     if (myTimeout) {
//         count ++
//         console.log(value);
//     }
//     if (count === 5) {
//         clearInterval(myTimeout)
//     }
// }
// limitedRepeat('hello'); 


/**
Challenge 6
Write a function called everyXsecsForYsecs that will accept three arguments: a function func, a number interval, and another number duration.

everyXsecsForYsecs will execute the given function every interval number of milliseconds, but then automatically stop after duration milliseconds.

Then pass the below sayHi function into an invocation of everyXsecsForYsecs with 1000 interval time an 5000 duration time.
What do you expect to happen?
 */


// function everyXsecsForYsecs(func, interval, duration) {
//     let id = setInterval(func, interval)

//     setTimeout(() => {
//         clearInterval(id)
//     }, duration)

// }
// function theEnd() {
//     console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 2000, 20000)


/**
Challenge 7
Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.
When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
*/

// function delayCounter(target, wait) {
//     count = 2;
//     function foo() {
//         if (count < 0) {
//             return
//         }
//         target -= count
//         console.log(target);
//         target = 3
//         setTimeout(foo, wait, target)
//         count--
//     }
//     return foo
// }

// const countLogger = delayCounter(3, 1000)
// countLogger();


/**
Challenge 8
Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.
When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.
*/


// function promised(val) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(val)
//         }, 2000)
//     })
// }

// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val));


