var sum = 0;
var count = 0;
var check = 0;
for (var i = 2; count < 30; i++) {
    for (var j = 1; j <= i; j++) {
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
