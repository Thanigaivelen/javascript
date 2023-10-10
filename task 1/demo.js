
function isPrimeRegular(n) {
    if (n <= 1) {
        return 0;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return 0;
        }
    }
    return 1;
}


const isPrimeAnonymous = function(n) {
    if (n <= 1) {
        return 0;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return 0;
        }
    }
    return 1;
};

const isPrimeArrow = (n) => {
    if (n <= 1) {
        return 0;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return 0;
        }
    }
    return 1;
};


function printPrimes(count, isPrimeFunction) {
    let primes = [];
    let num = 2;
    while (primes.length < count) {
        if (isPrimeFunction(num)) {
            primes.push(num);
        }
        num++;
    }
    return primes;
}


console.log("Using Regular Function:", printPrimes(100, isPrimeRegular));
console.log("Using Anonymous Function:", printPrimes(100, isPrimeAnonymous));
console.log("Using Arrow Function:", printPrimes(100, isPrimeArrow));
