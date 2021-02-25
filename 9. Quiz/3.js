var firstLanguage = {
    speak: 5,
    write: 5,
};

var secondLanguage = firstLanguage;
firstLanguage.write = 4;
console.log(firstLanguage.write);
console.log(secondLanguage.write);