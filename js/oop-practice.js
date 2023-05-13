// STEP 1
// function Cat() {
//     console.log('The new cat has been created.');
// }

// const Dog = function() {
//     console.log('The new dog has been created.');
// }

// STEP 2
// const cat1 = new Cat();
// const dog1 = new Dog();

// STEP 3
// class Animal {
//     constructor() {
//         console.log('The Animal has been created.')
//     }
// }

// STEP 4
// class Animal {
//     constructor(animal) {
//         console.log(`The new ${animal} has been created.`)
//     }
// }
// const cat2 = new Animal('cat');

// STEP 5
// function Animal(type, breed, color, height, length) {
//     this._type = type;
//     this._breed = breed;
//     this._color = color;
//     this._height = height;
//     this._length = length;
// }

// // STEP 6
// const cat3 = new Animal('cat', 'siamese', 'gray', '9.5in','18in');

// for (prop in cat3) {
//     console.log(prop);
// }

// STEP 7
// function Animal(type, breed, color, height, length) {
//     this._type = type;
//     this._breed = breed;
//     this._color = color;
//     this._height = height;
//     this._length = length;
//     this.speak = function() {
//         if (type === "dog") {
//             console.log(`The ${this._color} dog is barking.`)
//         } else if (type === "cat") {
//             console.log(`The ${this._color} cat is meowing.`)
//         }
//     }
// }

// const cat4 = new Animal('cat', 'siamese', 'gray', '9.5in','18in');
// cat4.speak();

// STEP 8
// function Animal(type, breed, color, height, length) {
//     let _type = type;
//     let _breed = breed;
//     let _color = color;
//     let _height = height;
//     let _length = length;
//     let checkType = function() {
//         if (_type === "dog") {
//             return "dog";
//         } else if (_type === "cat") {
//             return "cat";
//         }
//     }
//     this.speak = function () {
//         if (checkType() === "dog" || checkType() === "cat") {
//             console.log(`The ${checkType()} has made a noise!`)
//             }
//         }
// }

// const cat5 = new Animal('cat', 'siamese', 'gray', '9.5in','18in');
// cat5.speak();

// STEP 9
String.prototype.findWords = function(word) {
    let re = new RegExp(`\\b${word}\\b`, "gim");
    let arr = this.match(re);
    alert(arr.length);
}

let text = "This is a test for my own String method. This is just a test. Testing testing testing. Yay...my test is working!"
text.findWords("test");