

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}

let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

let counter =  0;
do {
    counter += 1;
    console.log(counter);
} while (!counter > 10);
console.log(counter);