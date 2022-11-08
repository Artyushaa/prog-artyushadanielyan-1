// function sum(arr, func) {
//     let count = [];
//     for (let i = 0; i < arr.length; i++) {
//         count.push(func(arr[i], arr[i + 1]))
//     }
//     return count
// }

// let a = sum([5, 6, 8, 2, 3], function (sum,sum1) {
//     return sum * 2
// })
// console.log(a);

// let array = [2,2,3,5,3,5,4]
// function unique(arr) {
//    return arr.filter(function (item, index) {
//        return arr.indexOf(item) === index
//    })
// }
// console.log(unique(array))


// let arr = [8, 3, 6, 2, 4];
// let count = Infinity;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < count) {
//     count = arr[i]
//     let a = arr.indexOf(arr[i])
//     a = count
//   }
// }

// -------------------------------->
// function foo (a, b) {
//   let count = 0;
//   function goo () {
//     console.log(a);
//     count++
//     if(count === 1) {
//       console.log(b);
//       count = 0
//       goo()
//     }
//   }
//   return goo()
// }
// let func = foo('on', 'off')
// console.log(func());

function foo (...args) {
	let arr = [];
	function goo () {
  	for (let i = 0; i < args.length; i++) {
    	for(let j = 0; j < args.length / 2; j++) {
      	arr.push(args[i])
      }
       return arr
    }
   
  }
  return goo
}
let func = foo('on', 'off')
console.log(func())
console.log(func())
console.log(func())



