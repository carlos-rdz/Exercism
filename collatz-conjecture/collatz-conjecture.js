export function steps(number){
    if (number <= 0){
        throw 'Only positive numbers are allowed'
    } else if (number === 1){
        return equals1()
    } else {
        return collatz(number)
}}


function equals1(){
    return 0
}
function collatz(number){
    let count = 0
        while(number > 1){
            if (number % 2 === 0){
                number /= 2;
                count ++
            } else {
                number = (number * 3) + 1
                count ++
            } 
        } return count
} 
