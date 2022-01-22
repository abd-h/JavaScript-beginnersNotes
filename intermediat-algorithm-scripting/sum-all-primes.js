/*              Sum All Primes

Aprime number is a whole number greater than 1 with exactly two divisos: 1 and itself.
For example, 2 is a prime number because it is divisible by 1 and 2. Incontrast, 4 is not
prime since it is devisible by 1, 2 and 4.

Rewrite sumPromes so it returns the sum of all prome numbers that are less than or 
equal to num.*/

function primeNumber(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false
        }
    }
    return true
}
console.log(primeNumber(7));

function sumPrimes(num) {

    let s = [2];
    for(let i = 3; i <= num; i+= 2) {
      if(primeNumber(i)) {
          s.push(i);
      }
    }
    return s.reduce((a, b) => a + b)
}
console.log(sumPrimes(977));