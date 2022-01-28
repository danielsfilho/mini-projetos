
let result = fizzBuzz(15)
console.log(result)

function fizzBuzz(entry) {
    if (typeof entry != 'number') {
        return 'Não é um número'
    }
    if(entry % 3 === 0 && entry % 5 === 0) {
        return 'fizzBuzz'
    }
    if(entry % 3 === 0) {
        return 'Fizz'
    }
    if(entry % 5 === 0) {
        return 'Buzz'
    }
    return entry
}