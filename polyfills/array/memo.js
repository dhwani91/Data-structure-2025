const memoize = (fn) => {
    let cache= {};
    return (...args) => {
        if(args.toString() in cache){
            console.log("$$from cache", args.toString());
            return cache[args.toString()];
        }
        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    }
}

 const multiply3 = (num) => {
    return num * 3;
 }

 const add3  =(num1, num2, num3) => {
    return num1 + num2 + num3;
 }

 const addMany =(...args) => {
   return  args.reduce((acc, cur) => acc + cur)
 }

const memo3 = memoize(add3);
console.log(memo3(12,10,15))
console.log(memo3(12,10,15))
console.log(memo3(12,11,15))


const mul3 = memoize(multiply3);
console.log(mul3(12))
console.log(mul3(12))
console.log(mul3(15))

const sum = memoize(addMany);
console.log(sum(12,11,10))
console.log(sum(12,11,10))
console.log(sum(15,1))