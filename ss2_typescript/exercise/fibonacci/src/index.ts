// happy coding 👻
let fibonacci = function (number: number): number {
    if (number == 0) {
        return 0
    }
    if (number == 1) {
        return 1
    }
    return fibonacci(number - 1) + fibonacci(number - 2)
}
let sum : number = 0;
let arr: Array<number> = [];
let main = function (num: number): number {
    for (let i = 0; i < num; i++) {
        arr.push(fibonacci(i));
    }
    console.log("Các số trong dãy fibonacci là: ")
    for(let value of arr) {
        console.log(value);
        sum+= value;
    }
    return sum;
}
console.log("Tổng là: "+main(10));