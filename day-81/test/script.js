// -----------------------array destructuring------------>

let arr = [1, 2, 3];

const [a, b] = arr;
console.log(a);


// ----------------------object destructring------------->

let obj = {
    name: 'Tyush',
    age: 19
}

const {name, age} = obj;

console.log(name);

// ----------------------spread objects----------------->

let obj1 = {
    name: 'Ruben',
    age: 27,
}

let ary = [{...obj1}]

console.log(ary);

// -----------------------rest parameters--------------->

function foo (c, d, ...args) {
    console.log(c, d);
    console.log(...args);
}

foo("Hello", "world", "!!!!")

// --------------------------default params-------------->

function func (a, b) {
    console.log(a + b);
}

func (5, 5)

// ------------------------destructuring params----------->

function goo (props) {
    const {
        name, age, lastName
    } = props
}