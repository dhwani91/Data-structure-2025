function curry(func) {
    // args takes arguments in the form of array eg - [a, b, c]
    return function curriedFunc(...args) {
        //check if current args passed equals the number of args function expects
        console.log("$$args.length", args.length);
        console.log("$$fn.length", func.length)
        if(args.length >= func.length) {
            // if yes, we spread args elements to pass into func (spread). This is our base case.
            return func(...args)
        } else {
            /* if not, we return a function that collects the next arguments passed in next and
            we recursively call curriedFunc, accumulating and spreading the values of args first and then
            the values of next. next will take into consideration a variable amount of next arguments
            e.g (1, 2) (1) (1,2,3) */
            return function(...next) {
                return curriedFunc(...args,...next);
            }
        }
    }
}


//https://chatgpt.com/c/686d964a-d050-800c-a325-b147e525a616


const curryFn = curry(multiply10);
console.log(curryFn(10)(20)(30)(40))