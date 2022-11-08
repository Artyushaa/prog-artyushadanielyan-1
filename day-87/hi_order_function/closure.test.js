describe('Challenge 1', () => {
    test(`Create a function addTwo that accepts one input and adds 2 to it.
    `,
        () => {
            function addTwo(num) {
                return num +2
            }
            expect(addTwo(3)).toBe(5)
        })
})

describe('Challenge 2', () => {
    test(`Create a function addS that accepts one input and adds an "s" to it.
    `,
        () => {
            function addS(word) {
                return word + "s"
            }
            expect(addS('pizza')).toBe('pizzas')
            expect(addS('bagel')).toBe('bagels')
        })
})

describe('Challenge 3', () => {
    test(`Create a function called map that takes two inputs:
    1.an array of numbers (a list of numbers)
    2.a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
    Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.`,
        () => {
            function map(array, callback) {
                let arr = [];
                for (let i = 0; i < array.length; i++) {
                    arr.push(callback(array[i]))
                }
                return arr
            }
            expect(map([1, 2, 3, 4, 5], function (value) {
                return value * 2
            })).toEqual([2, 4, 6, 8, 10])
        })
})

describe('Challenge 4', () => {
    test(`Create a function called forEach that takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
    `,
        () => {
            function forEach(array, callback) {
                for (let i = 0; i < array.length; i++) {
                    callback(array[i])
                }
            }
            expect(forEach(["hello", "world"], function (val) {
                return val
            })).toBe(undefined)
        })
})

describe('Challenge 5', () => {
    test(`Create a function called forEach that takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
    `,
        () => {
            function mapWith(array, callback) {
                let arr = []
                array.forEach((e) => {
                    return arr.push(callback(e))
                })
                return arr
            }
            expect(mapWith([1, 2, 3, 4, 5], function (value) {
                return value * 2
            })).toEqual([2, 4, 6, 8, 10])
        })
})

describe('Challenge 6', () => {
    test(`Create a function called forEach that takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
    `,
        () => {
            const nums = [4, 1, 2];
            function reduce(array, callback, initialValue) {
                for (let i = 0; i < array.length - 1; i++) {
                    initialValue += callback(array[i], array[i + 1])
                }
                return initialValue
            }
            expect(reduce(nums, function (a, b) { return (a + b); }, 0)).toBe(8)
        })
})

describe('Challenge 7', () => {
    test(`Construct a function intersection that takes in an array of arrays, compares the inner arrays, and returns a new array with elements found in all of them. BONUS: Use reduce!
    `,
        () => {
            function intersection(arrays) {
                let reduce = arrays.reduce((p, c) => {
                    if (Array.isArray(c)) {
                        return [...p, ...intersection(c)]
                    }
                    return [...p,c]
                }, [])
                return reduce
            }
            expect(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]])).toEqual([5,10,15,20,15,88,1,5,7,1,10,15,5,20])
        })
})

// describe('Challenge 8', () => {
//     test(`Construct a function union that takes in an array of arrays, compares the inner arrays, and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first array. BONUS: Use reduce!
//     `,
//         () => {
//             function union(arrays) {
//                 let reduce = arrays.reduce((p, c) => {
//                     if (Array.isArray(c)) {
//                         return p + intersection(c)
//                     }
//                     if (p === c) {

//                     }
//                     return p + c + ","
//                 }, [])
//                 return reduce
//             }
//             expect(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]))
//             // console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
//             // should log: [5, 10, 15, 88, 1, 7, 100]
//         })
// })

// describe('Challenge 8', () => {
//     test(`Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.
//     `,
//         () => {
//             function objOfMatches(array1, array2, callback) {
//                 if(callback(array1).indexOf === array2.indexOf) {
//                     alert('a')
//                 }
//             }
//             expect(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase()})).toBe()
//         })
// })

// harc - 8
