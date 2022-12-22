let sum: number = 0;
let count: number = 0;
let check: number = 0;
for (let i = 2; count < 30; i++) {
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            check++;
        }
    }
    if (check == 2) {
        sum += i;
        count++;
    }
    check = 0;
}
console.log(sum);
