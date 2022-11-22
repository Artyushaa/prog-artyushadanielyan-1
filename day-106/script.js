{
    function Hooman(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    };

    let newHooman = new Hooman('Panda', 30, 'panda@gmail.com');

    console.log(JSON.stringify(newHooman, null, 2));
};

{
    class Hooman {
        constructor(name, age, email) {
            this.name = name;
            this.age = age;
            this.email = email;
        };
    };

    let newHooman = new Hooman('Dwayne', 18, 'Dwayne@gmail.com')
    console.log(JSON.stringify(newHooman, null, 2));
};

{
    Animal.prototype.Hunt = function () {
        return this.hunt
    }

    function Animal(name, meat) {
        this.name = name;
        this.hunt = meat 
    }

    function Dog(age, name, meat) {
        this.age = age
        Animal.call(this, name, meat)
    }

    function Cat(age, name, meat) {
        this.age = age
        Animal.call(this, name, meat)
    }
    Dog.prototype = Object.create(Animal.prototype)
    Dog.prototype.constructor = Dog

    let newDog = new Dog(30, 'Graff', 'meat');
    let newCat = new Cat(20, 'Garfield', 'fish');
    console.log(JSON.stringify(newDog.Hunt(), null, 2));
    console.log(JSON.stringify(newDog, null, 2));
    console.log(JSON.stringify(newCat, null, 2));
};
