/**
 Challenge 1
A) Create a for loop that iterates through an array and returns the sum of the elements of the array.
B) Create a functional iterator for an array that returns each value of the array when called, one element at a time.
*/


// function sumFunc(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }

// const array = [1, 2, 3, 4];
// console.log(sumFunc(array));


// function* returnIterator(arr) {
//     for (const element of arr) {
//         yield element
//     }
// }
// const array2 = ['a', 'b', 'c', 'd'];
// const myIterator = returnIterator(array2);
// console.log(myIterator.next().value); // -> should log 'a'
// console.log(myIterator.next().value); // -> should log 'b'
// console.log(myIterator.next().value); // -> should log 'c'
// console.log(myIterator.next().value); // -> should log 'd'


/**
 Challenge 2
Create an iterator with a next method that returns each value of the array when .next is called.
*/


// function* nextIterator(arr) {
//     for(const element of arr) {
//         yield element
//     }
// }

// const array3 = [1, 2, 3];
// const iteratorWithNext = nextIterator(array3);
// console.log(iteratorWithNext.next().value); // -> should log 1
// console.log(iteratorWithNext.next().value); // -> should log 2
// console.log(iteratorWithNext.next().value); // -> should log 3


/**
 Challenge 3
Write code to iterate through an entire array using your nextIterator and sum the values.
*/


// function sumArray(arr) {
//     let sum = 0;
//     function* nextIterator() {
//         for (let i of arr) {
//             sum += i
//         }
//         yield sum
//     }
//     return nextIterator().next().value
// }


// const array4 = [1, 2, 3, 4];
// console.log(sumArray(array4));


/**
 Challenge 4
Create an iterator with a next method that returns each value of a set when .next is called
*/


// function* setIterator(set) {
//     for (const element of set) {
//         yield element
//     }
// }

// const mySet = new Set('hey');
// const iterateSet = setIterator(mySet);
// console.log(iterateSet.next().value); // -> should log 'h'
// console.log(iterateSet.next().value); // -> should log 'e'
// console.log(iterateSet.next().value); // -> should log 'y'


/**
 Challenge 5
Create an iterator with a next method that returns an array with two elements (where the first element is the index and the second is the value at that index) when .next is called.
*/


// function* indexIterator(arr) {
//     for (let index in arr) {
//         yield [index,arr[index]]
//     }
// }

// const array5 = ['a', 'b', 'c', 'd'];
// const iteratorWithIndex = indexIterator(array5);
// console.log(iteratorWithIndex.next().value); // -> should log [0, 'a']
// console.log(iteratorWithIndex.next().value); // -> should log [1, 'b']
// console.log(iteratorWithIndex.next().value); // -> should log [2, 'c']


/**
 Challenge 6
Create an iterator that returns each word from a string of words on the call of its .next method (hint: use regex!)
Then attach it as a method to the prototype of a constructor Words. Hint: research Symbol.iterator!
*/


// function Words(string) {
//     this.str = string;
// }

// Words.prototype[Symbol.iterator] = function () {
//     name: 'Tyush';
//     age: 19
//     return {
//         next() {
//             return this.name
//         }
//     }
// }

// const helloWorld = new Words('Hello World');
// for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'


/**
 Challenge 7
Build a function that walks through an array and returns the element concatenated with the string "was found after index x", where x is the previous index.
Note: if it is the first element it should say that it is the first
*/


function valueAndPrevIndex(array){

}

const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());


/**
 Challenge 8
Write a function that will console.log "hello there", or "gibberish", every three seconds depending on if the word passed into the function is 'english'.
Do not use any type of loop constructor and only make the call to createConversation onc
*/


function* createConversation(string) {
    
}

console.log(createConversation('english').next());
