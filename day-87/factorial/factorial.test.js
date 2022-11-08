describe('1. Instructions', () => {
    test('Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.',
        () => {
            function capitalizeFirst(arr, func) {
                function loop (i) {
                  if (i <= arr.length)
                    func(arr[i])
                    loop(i + 1)
                }
                loop(0)
            }

          capitalizeFirst(['pudge', 'mars', 'io'], function (val) {
            console.log(val);
              return val[0].toUpperCase() + val.slice(1)
          })

            expect(  capitalizeFirst(['pudge', 'mars', 'io'], function (val) {
              console.log(val);
                return val[0].toUpperCase() + val.slice(1)
            })).toEqual(['Pudge', 'Mars', 'Io'])
        })
})

// let ary = []
// function capitalizeFirst(arr, func) {
//   function loop (i) {
//     func(arr[i][0].toUpperCase() + arr[i].slice(1))
//     loop(i + 1)
//   }
//   loop(0)
// }
// capitalizeFirst(['pudge', 'mars', 'io'], function (val) {
//   ary.push(val)
//   alert(ary)
// })