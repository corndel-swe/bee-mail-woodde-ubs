function fibonacci(n) {
    // this function will return the nth Fibonacci number.

    if (n == 1) {
        return 0
    }

    if (n == 2) {
        return 1
    }

    return fibonacci(n - 1) + fibonacci(n - 2)

}

console.log(fibonacci(9))


function sumTo(n) {
    // this function sums the numbers
    if (n == 1) {
        return 1
    } else {
        return n + sumTo(n - 1)
    }

}

console.log(sumTo(12))

function factorial(n) {
    // this function provides a factorial
    if (n == 1 || n == 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(6))

function length(str) {
    console.log(`Current string: "${str}"`)
    // this function returns the length of a string
    if (str === "") {
        return 0
    } else {
        return 1 + length(str.slice(1))
    }
}
console.log('testing')






