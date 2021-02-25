const gfg = (x) => (y) => x + y;

const addTwo = gfg(2);
console.log(addTwo(3));
const addTen = gfg(10);
console.log(addTen(30));