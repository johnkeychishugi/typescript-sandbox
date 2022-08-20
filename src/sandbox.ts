// let character = 'Chishugi';
// let age = 30;
// let isBlackBelt = false;

// //character = 20;
// character = 'Ornale';

// // age = "yoshi"
// age = 9;

// // isBlackBelt = "yes";
// isBlackBelt = true;

// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// }

// console.log(circ(7.5));

// let names = ['john', 'iragi', 'chishugi'];

// // names = 'kkk';

// names.push('tooo');
// // names.push(3);
// // names[0] = 1;

// let numbers = [10, 55, 44, 55];

// numbers.push(444);
// // numbers.push('fffff');
// // numbers[3] = 'f';

// let mixed = ['key', 2, 'ddd', '33', 3, 2, false];

// mixed.push(1);
// mixed.push('ffff');
// mixed.push(false)


// let ninja = {
//     name: 'john',
//     belt: 'black',
//     age: 26
// };

// ninja.age = 87;
// ninja.name = 'MANANA';
// // names.age = 'fff';

// ninja = {
//     name: 'sff',
//     belt: 'ddd',
//     age: 7
// }

// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// // age = 'ffff';
// age = 55;

// let ninjas: string[] = [];

// ninjas = [1,34,5,5]
// ninjas.push('jfjf');

// let mixed: (string|number|boolean)[] = [];

// mixed.push('heelo');
// mixed.push(333);
// mixed.push(false);

// console.log(mixed);

// let uid: string|number;

// uid = 'jjjj';
// uid = 222;
// // uid = false;

// let ninjaOne: object;

// ninjaOne = { name: 'jogn', ager: 99};
// // ninjaOne = []

// let ninjaTwo: {
//     name: string,
//     age: number,
//     belColour: string
// };

// ninjaTwo = { name: 'fff', age: 99, belColour: 'ddd'}

// let age: any = 65;

// age = '888';
// console.log(age);
// age = false;
// console.log(age);
// age = 88
// console.log(age);
// age = { name: 'fff', age: 99, belColour: 'ddd'}
// console.log(age);

// let mixed: any[] = [];
// mixed.push('6dddd6');
// mixed.push(false);
// mixed.push(66);
// mixed.push('trd');
// console.log(mixed);

// let ninja: {
//     name: any,
//     age: any
// }

// ninja = {
//     name: 'jjf',
//     age: 'd999'
// }

// console.log(ninja);
// console.log('test');

// let greet: Function; 
// // greet =222

// greet = () => {
//     console.log('Hello world');
// }

// const add = (a: number, b: number, c: number|string = 10): void => {
//     console.log(a + b);
//     console.log(c);
// }

// add(5,10, 'ddfff');

// const minus = (a: number, b: number) => {
//     return a + b;
// }

// let result = minus(12, 9);

// type StringOrNumber = string|number;
// type User = {name: string, uid: StringOrNumber};

// const logDetails = (uid: StringOrNumber, item: string): void => {
//     console.log(`${item} has uid of ${uid}`);
// }

// const greet = (user: User): void => {
//     console.log(`${user.name} says Hello`);
// }

// let greet: Function;
// let greet: (a: string, b: string) => void;

// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// }

// let calc: (a: number, b: number, c: string|number) => number;

// calc = (numOne: number, numTwo: number, action: string|number) => {
//     if (action === 'add') {
//         return numOne + numTwo;
//     } else {
//          return numOne - numTwo;
//     }
// }

// type person = {name: string, age: number};
// let logDetails: (obj: person) => void;
// logDetails = (ninja: person) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`)
// }


