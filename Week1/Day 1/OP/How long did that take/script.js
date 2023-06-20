// Calculating prime numbers
Number.prototype.isPrime = () => {
    for (let i = 2; i < this; i++) {
        return (this % i === 0)
            ? false
            : true
    }

}
// and then see how long it takes to find the 10,000th prime number
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e4) {
    return (num.isPrime())
        ? primeCount++
        : num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// Determine if the iterative or recursive Fibonacci function is faster
// recursive
const rFib = (n)=> {
    return (n < 2) 
        ? n
    
    : rFib(n - 1) + rFib(n - 2);
}
rFib(20);
// iterative
const iFib = (n) =>{
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
iFib(20);


// Write a more efficient function to reverse a string
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
