const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}

/*
//grabing the color
var color = getBGColor(pink);

pink.addEventListener("click", () => {
    center.style.background = color;
});
*/

const magicColorChanger = (element, color) => {

    return element.addEventListener("mouseover", () => {
        center.style.background = color;
    });

}


magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));


// setInterval(() => {
//     center.style.background="";
// },2 )
