// The Map object holds key-value pairs and remembers the original insertion order of the keys. 
// Any value (both objects and primitive values) may be used as either a key or a value.

var myMap = new Map();

myMap.set(0, "Zero");
myMap.set(1, "One");
myMap.set(2, "Two");
myMap.set(3, "Three");
myMap.set(4, "Four");
myMap.set(5, "Five");

console.log(myMap);

//grab value from map

// it is also called for of loop
for (let key of myMap.keys()) {
    console.log(`Key is ${key}`);
}

for (let values of myMap.values()) {
    console.log(`Key is ${values}`);
}

for (let [key, values] of myMap) {
    console.log(`Key is: ${key} and the value is: ${values}`);
}

// gives you the value insted of key
myMap.forEach((key) => console.log(`${key}`));

myMap.forEach((v, k) => console.log(`key: ${k} values: ${v}`));


myMap.delete(0);
console.log(myMap);
