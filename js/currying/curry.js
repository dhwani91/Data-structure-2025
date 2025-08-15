// const buildSandwitch = ingredient1 => ingredient2 => ingredient3 => `${ingredient1} ${ingredient2} ${ingredient3}`;
// const mySandwitch = buildSandwitch("bread")("bean-patty")("tomato");
// console.log(mySandwitch);
//
//
// const multiply10 = (a,b,c,d) => {
//     return a*b*c*10;
// };
//
// const curried = (fn) => (...args) => {
//     return fn(...args)
// }
//
// const multiple5 = curried(multiply10)(5);
// console.log(multiple5);
//
//
// const sum =(a, b) => a + b;
//
// function curry(func) {
//     // args takes arguments in the form of array eg - [a, b, c]
//     return function curriedFunc(...args) {
//         //check if current args passed equals the number of args function expects
//         console.log("$$args.length", args.length);
//         console.log("$$fn.length", func.length)
//         if(args.length >= func.length) {
//             // if yes, we spread args elements to pass into func (spread). This is our base case.
//             return func(...args)
//         } else {
//             /* if not, we return a function that collects the next arguments passed in next and
//             we recursively call curriedFunc, accumulating and spreading the values of args first and then
//             the values of next. next will take into consideration a variable amount of next arguments
//             e.g (1, 2) (1) (1,2,3) */
//             return function(...next) {
//                 return curriedFunc(...args,...next);
//             }
//         }
//     }
// }
//
//
// const curryFn = curry(multiply10);
// console.log(curryFn(10)(20)(30)(40))



// let hello1 = 8;
// const arr = [{user: 8, duration: 50, equipment: ['bench']},{user: 9, duration: 50, equipment: ['bench']}];
// const res = arr.find((ele) =>
//     ele.user === hello1);
// console.log(res)


const set = new Set(["foo", "bar", "baz", "foo"]);
// console.log(set);
// console.log(typeof set);
// console.log(Array.from(set));


const mySet1 = new Set();

mySet1.add(1); // Set(1) { 1 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add(5); // Set(2) { 1, 5 }
mySet1.add("some text"); // Set(3) { 1, 5, 'some text' }
const o = { a: 1, b: 2 };
mySet1.add(o);

mySet1.add({ a: 1, b: 2 });

console.log(mySet1.values());

console.log(Array.from(mySet1));