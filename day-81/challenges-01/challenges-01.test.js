describe('challange 01', () => {
    test(`Replace the blank underscores inside the console logs with the data type (i.e. 'string') you think each value will be. (Leave the quotes)
    Ex.`, () => {
        expect(typeof 7.0).toBe('number');
        expect(typeof 22).toBe('number');
        expect(typeof true).toBe('boolean');
        var myVar;
        expect(typeof myVar).toBe('undefined')
        myVar = 'Tyush'
        expect(typeof myVar).toBe('string')
    })
})

describe('challange 02', () => {
    test('Create a functon buildSentence that takes three words (strings) and adds them together and console.logs the whole sentence (string) complete with capitalization and punctuation.', () => {
        function buildSentence(word1, word2, word3) {
            // return word1[0].toUpperCase() + word1.slice(1) + " " + word2 + " " + word3
            return word1[0].toUpperCase() + word1.slice(1) + " " + word2 + " " + word3.concat('.')
        }
        // expect(buildSentence("coding", "is", "awesome")).toBe('Coding is awesome')
        expect(buildSentence("we're", "number", "1")).toBe("We're number 1.")
    })
})

describe('challange 03', () => {
    test(`Create a function lastLetter that takes a word (string) and console.logs the last character/letter of that word.
    Hint: Remember that each character/letter in a string has an index position that you can access with brackets: []
    `, () => {
        function lastLetter(word) {
            return word.slice(-1)
        }
        expect(lastLetter("hello")).toBe('o')
        expect(lastLetter("goodbye!")).toBe('!')
        expect(lastLetter("ZeltoiD")).toBe('D')
    })
})

describe('challange 04', () => {
    test(`Create a function buildGreeting that takes a time (integer) and a name (string) and print a greeting based on the following rules:
    If time is between 0 (inclusive) and 11 (inclusive): "Good Morning, <name>!
    If time is between 12 (inclusive) and 16 (inclusive): "Good Afternoon, <name>!
    If time is between 17 (inclusive) and 23 (inclusive): "Good Evening, <name>!
    If time is anything else: "That's not a real time, <name>. Maybe you need some sleep!
    `, () => {
        function buildGreeting(time, name) {
            if (time >= 0 && time <= 11) {
                return `Good Morning, ${name}!`
            } else if (time >= 12 && time <= 16) {
                return `Good Afternoon, ${name}!`
            } else if (time >= 17 && time <= 23) {
                return `Good Evening, ${name}!`
            } else {
                return `That's not a real time, ${name}. Maybe you need some sleep!`
            }
        }
        expect(buildGreeting(8, "Maggie")).toBe("Good Morning, Maggie!")
        expect(buildGreeting(12, "John")).toBe("Good Afternoon, John!")
        expect(buildGreeting(22, "Stacey")).toBe("Good Evening, Stacey!")
        expect(buildGreeting(31, "Derrick")).toBe("That's not a real time, Derrick. Maybe you need some sleep!")
    })
})

describe('challange 05', () => {
    test(`indexOf is a function that you can call on a string (string1) and accepts another string (string2) as an argument.
    It searches through string1 from left to right checking each character to see if it can find string2.
    If it finds string2 it returns the index position of the FIRST character that matches string2. If it cannot find string2 it returns negative one: -1.
    Enter the index position you think indexOf will return for each below.
    `, () => {

        let str = "CodeSmith";
        let hello = "hello";
        let zebra = "zebra";
        let banana = "banana";
        expect(str.indexOf("o")).toBe(1)
        expect(hello.indexOf("ll")).toBe(2)
        expect(zebra.indexOf("z")).toBe(0)
        expect(banana.indexOf("B")).toBe(-1)
    })
})

describe('challange 06', () => {
    test(`Create a function letterExists that takes a word (string) and a character (string), and console.logs whether that letter can be found inside that word.
    `, () => {
        function letterExists(word, letter) {
            return word.includes(letter)
        }

        expect(letterExists("superman", "e")).toBe(true)
        expect(letterExists("starship", "S")).toBe(false)
        expect(letterExists("th1s", "1")).toBe(true)
        expect(letterExists("he!lo", "!")).toBe(true)
    })
})

describe('challange 07', () => {
    test(`Create a function isPrime that console.logs a boolean indicating if 'Number' is prime or not.
    `, () => {

        function isPrime(number) {
            let count = 0;
            let a;
            if (number <= 0) {
                return false
            }
            for (let i = 1; i <= number; i++) {
                if (number % i === 0) {
                    count++
                }
                if (count <= 2) {
                    a = true;
                } else {
                    a = false
                }
            }
            return a
        }
        expect(isPrime(-7)).toBe(false)
        expect(isPrime(2)).toBe(true)
        expect(isPrime(11)).toBe(true)
        expect(isPrime(15)).toBe(false)
    })
})

describe('challange 08', () => {
    test(`Create a function range that console.logs all numbers between 'start' and 'end' in sequential order.
    `, () => {

        function range(start, end) {
            if(start > end) return [];
            let arr = []
            for (let i = start; i <= end; i++) {
                arr.push(i)
            }
            return arr;
        }
        expect(range(1, 4)).toEqual([1, 2, 3, 4])
        expect(range(4, 2)).toEqual([]);
    })
})

describe('challange 09', () => {
    test(`Create a function myIndexOf that takes an array and an element and console.logs the index of the element in the array, or -1 if it doesn't exist.
    Assume the 'ele' will be a primitive data type (no arrays or objects).
    DO NOT USE THE BUILT-IN 'indexOf' METHOD IN YOUR SOLUTION!
    `, () => {
        function myIndexOf(array, ele) {
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (array[i] !== ele) {
                    count++
                }
                else if (array[i] === ele) {
                    return count
                }
                if (count === array.length) {
                    return -1
                } 
            }
        }

        expect(myIndexOf([1, 2, 3, 4, 5], 5)).toBe(4)
        expect(myIndexOf(["a", "b", "c"], "a")).toBe(0)
        expect(myIndexOf(["a", "b", "c"], "d")).toBe(-1)
    })
})

