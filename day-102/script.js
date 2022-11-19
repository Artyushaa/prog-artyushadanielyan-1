// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ]

// let arr = [];

// for (let i = 0; i < matrix.length; i++) {
//     arr.push([])
// }
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         arr[i][j] = matrix[matrix.length -1 -j][i]
//     }
// }
// console.log(arr);

// --------------------------------Symmetric Tree---------------------------->

// function Node(value, left, right) {
//     this.value = value
//     this.left = left
//     this.right = right
// }

// let left_left = new Node(9, null, null)
// let left_right = new Node(6, null, null)
// let right_right = new Node(5, null, null)
// let right_left = new Node(8, null, null)
// let left = new Node(1, left_left, left_right)
// let right = new Node(2, right_left, right_right)
// let root = new Node(10, left, right);

// let left_left = new Node(3, null, null)
// let left_right = new Node(4, null, null)
// let right_right = new Node(3, null, null)
// let right_left = new Node(4, null, null)
// let left = new Node(2, left_left, left_right)
// let right = new Node(2, right_left, right_right)
// let root = new Node(10, left, right);

// function symmetricFunc(left, right) {
//     if (left === null && right === null) {
//         return true
//     }
//     if (left === null || right === null) {
//         return false
//     }
//     if (left.value !== right.value) {
//         return false
//     }
//     return symmetricFunc(left.left, right.right) && symmetricFunc(left.right, right.left);
// }
// let a = symmetricFunc(left, right)
// console.log(a);
// console.log(JSON.stringify(root, null, 2));


// function invertFunc(left, right) {
//     if (left && right) {
//         let a = left;
//         left = right
//         right = a
//     }
//     if (!left || !right) {
//         return false
//     }
//     if (left.value && right.value) {
//         let a = left.value
//         left.value = right.value
//         right.value = a
//     }
//     invertFunc(left.left, right.right);
//     invertFunc(left.right, right.left);
// }

// let b = invertFunc(left, right)
// console.log(JSON.stringify(root, null, 2));


// --------------------------------Palindrome Linked List---------------------------->

// function LinkedList(value, next) {
//     this.value = value;
//     this.next = next;
// }

// let next3 = new LinkedList(1)
// let next2 = new LinkedList(2, next3)
// let next1 = new LinkedList(2, next2)
// let value = new LinkedList(1, next1)

// function palindrome(value) {
//     if (!value) {
//         return false;
//     }
//     if(value.value === value.next.next.next.value && value.next.value === value.next.next.value) {
//         return true
//     } else {
//         return false;
//     }
// }

// let palindrome1 = palindrome(value)
// console.log(palindrome1);

// console.log(JSON.stringify(value, null, 2));



// --------------------------------Merge Two Sorted Lists---------------------------->

// function oneList(value, next) {
//     this.value = value;
//     this.next = next;
// }

// function twoList(value, next) {
//     this.value = value;
//     this.next = next;
// }

// let oneListNext2 = new oneList(4)
// let oneListNext1 = new oneList(2, oneListNext2)
// let oneListValue = new oneList(1, oneListNext1)
// let twoListNext2 = new twoList(6)
// let twoListNext1 = new twoList(5, twoListNext2)
// let twoListValue = new twoList(3, twoListNext1)


// function twoSortedList(list1, list2) {
//     let arr = [];
//     if (list1.value === null && list2.value === null) {
//         return false
//     }
//     if (list1 && list2) {
//         if (list1.value >= list2.value) {
//             arr.push(list2.value, list1.value)
//         } else {
//             arr.push(list1.value, list2.value)
//         }
//         if (list1.next && list2.next) {
//             if (list1.next.value >= list2.next.value) {
//                 arr.push(list2.next.value, list1.next.value)
//             } else {
//                 arr.push(list1.next.value, list2.next.value)
//             }
//         }
//         if (list1.next.next && list2.next.next) {
//             if (list1.next.next.value >= list2.next.next.value) {
//                 arr.push(list2.next.next.value, list1.next.next.value)
//             } else {
//                 arr.push(list1.next.next.value, list2.next.next.value)
//             }
//         }
//     }
//     arr.sort((a, b) => a - b)
//     return arr
// }
// let a = twoSortedList(oneListValue, twoListValue)
// console.log(a);


// --------------------------------Add Two Numbers---------------------------->

// function AddNumbersList1(value, next) {
//     this.value = value;
//     this.next = next;
// }

// function AddNumbersList2(value, next) {
//     this.value = value;
//     this.next = next;
// }



// let numbersList1Next2 = new AddNumbersList1(3)
// let numbersList1Next1 = new AddNumbersList1(4, numbersList1Next2)
// let list1 = new AddNumbersList1(2, numbersList1Next1)

// let numbersList2Next2 = new AddNumbersList2(4)
// let numbersList2Next1 = new AddNumbersList2(6, numbersList2Next2)
// let list2 = new AddNumbersList2(5, numbersList2Next1)

// let number = 0;
// function addNumbers(list1, list2, num) {
//     let arr = []
//     if (list1.value === null && list2.value === null) {
//         return false;
//     }
//     if (list1 && list2) {
//         if (list1.value && list2.value) {
//             arr.push(list1.value + list2.value)
//         }
//     }
//     if (list1.next && list2.next) {
//         if (list1.next.value && list2.next.value) {
//             let count = list1.next.value + list2.next.value;
//             if (count >= 10) {
//                 num = count % 10
//                 arr.push(num)
//                 num = count / 10
//                 num = Math.floor(num)
//             } else {
//                 arr.push(count)
//             }
//         }
//     }
//     if (list1.next.next && list2.next.next) {
//         if (list1.next.next.value && list2.next.next.value) {
//             let count = list1.next.next.value + list2.next.next.value
//             if (count >= 10) {
//                 let num = count % 10
//                 arr.push(num)
//                 num = count / 10
//             } else {
//                 if (num > 0) {
//                     arr.push(count + num)
//                     num = 0
//                 }
//             }
//         }
//     }
//     return arr
// }

// let a = addNumbers(list1, list2, number)
// console.log(a);










