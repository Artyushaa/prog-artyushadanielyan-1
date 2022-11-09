describe('Challenge 1', () => {
    test(`Create a function createFunction that creates and returns a function. When that created function is called, it should print "hello". When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.
    `,
        () => {
            function createFunction() {
                let str = 'hello'
                function hiFunc() {
                    return str
                }
                return hiFunc
            }
            const function1 = createFunction();
            function1();
            expect(function1()).toBe('hello')
        })
})

describe('Challenge 2', () => {
    test(`Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
    `,
        () => {
            function createFunctionPrinter(input) {
                function word() {
                    return input
                }
                return word
            }
            const printSample = createFunctionPrinter('sample');
            const printHello = createFunctionPrinter('hello');
            expect(printSample()).toBe('sample')
            expect(printHello()).toBe('hello')
        })
})

describe('Challenge 3', () => {
    test(`Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.
    `,
        () => {
            function outer() {
                let counter = 0;
                function incrementCounter() {
                    counter++;
                    return counter
                }
                return incrementCounter;
            }

            const willCounter = outer();
            const jasCounter = outer();

            expect(willCounter()).toBe(1)
            expect(willCounter()).toBe(2)
            expect(willCounter()).toBe(3)
            expect(jasCounter()).toBe(1)
            expect(willCounter()).toBe(4)


            function addByX(x) {
                return function addFunc(y) {
                    return y + x
                }
            }
            const addByTwo = addByX(2);
            expect(addByTwo(1)).toBe(3)
            expect(addByTwo(2)).toBe(4)
            expect(addByTwo(3)).toBe(5)

            const addByThree = addByX(3);
            expect(addByThree(1)).toBe(4)
            expect(addByThree(2)).toBe(5)

            const addByFour = addByX(4);
            expect(addByFour(4)).toBe(8)
            expect(addByFour(5)).toBe(9)
        })
})

describe('Challenge 5', () => {
    test(`Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.
    `,
        () => {
            function after(count, func) {
                let sum = 0;
                function goo() {
                    if (sum >= 0) {
                        sum++
                    }
                    if (sum === count) {
                        return func()
                    } else {
                        return 'nothing is printed'
                    }
                }
                return goo
            }
            const called = function () {
                return 'hello'
            };
            const afterCalled = after(3, called);
            expect(afterCalled()).toBe('nothing is printed')
            expect(afterCalled()).toBe('nothing is printed')
            expect(afterCalled()).toBe('hello')
        })
})

describe('Challenge 6', () => {
    test(`Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();`,
        () => {
            function delay(func, wait) {
                let a = 5;
                setTimeout((e) => {
                    func(a)
                }, wait)
            }
            expect(delay(function (i) {
                return i
            }, 2000)).toBe(5)
        })
})