var num = 50;

for (var i = 0; i < num; i++) {
    if (i % 3 == 0) {
        console.log(i + " -> Fizz");
    }
    else if (i % 5 == 0) {
        console.log(i + " -> Buzz");
    }
    else {
        console.log(i);
    }
}

