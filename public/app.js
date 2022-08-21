import Invoice from "./classes/invoice.js";
import ListTemplate from "./classes/ListTemplate.js";
import Payment from "./classes/Payment.js";
const form = document.querySelector('.new-item-form');
;
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//List items
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// //GENERICS
// const addID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid};
// }
// let docOne = addID({name: 'Johgn', age: 33});
// // let docTwo = addID('jjj');
// console.log(docOne.name);
// //ENUMS
// enum ResourceType { BOOK, AUTHOR, DIRECTOR, PERSON }
// //With Interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: ResourceType;
//     data: T;
// };
// const docThree: Resource<object> = {
//     uid: 2,
//     resourceName: ResourceType.AUTHOR,
//     data: { name: 'shuam' }
// }
// const docFour: Resource<string[]> = {
//     uid: 99,
//     resourceName: ResourceType.DIRECTOR,
//     data: ['ddd', 'ddd', 'g']
// }
// console.log(docThree, docFour);
//tuples
let arr = ['ray', 25, true];
arr[0] = false;
arr[1] = 'john';
arr = [233, 'jg', false];
let tup = ['jhon', 33, false];
tup[0] = 'chishugi';
tup[1] = 988;
tup[2] = true;
let student;
student = ['John', 323232];
