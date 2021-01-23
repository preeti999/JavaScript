// for (let i = 0; i < 10; i++) {
//     console.log(i);   
// }

var dressName = [
    "Midi Dress",
    "Off the Shoulder",
    "Bodycon Dress",
    "A-Line Dress",
    "Mini Dress",
    "Maxi Dress",
    10,
    12000,
    "Peplum Dress",
    "Sweater Dress",
    "Pencil Dress",
    455500,
    "Shirt Dress",
    "Slip Dress",
    "Kimono Dress"
]

// ******* FOR LOOP ************

/*

// TO PRINT ALL THE DRESS
for (let i = 0; i < dressName.length; i++) {
    // console.log(dressName[i]);
}

// CONTINUE, BREAK
for (let i = 0; i < dressName.length; i++) {
    // if(typeof dressName[i] === "string") continue;
    // if(typeof dressName[i] !== "string") continue;
    if(typeof dressName[i] !== "string") break;
    console.log(dressName[i]);
}

*/

//*********** WHILE LOOP ********************/

/*

let i = 0;
while(i<dressName.length){
    console.log(dressName[i]);
    i++;
}

//do while
console.log("********Do while********");
let check =100;
do{
    console.log(check);
    i++
}while(check<10);

*/

//************** FOR EACH LOOP ******************/
// for each loop is method in the array
//*******tricky question */
// let i =0;
// for(;;){
//     if(i>3) break;
//     console.log(i);
//     i++
// }

/*

// dressName.forEach( (dress) => (console.log(dress)) );
//another way
dressName.forEach( (dress) => {
    console.log(dress)
});

*/

// FOR IN FOR OUT LOOP
// OUT ==> used in loops
// IN ==> used in objects
const website = ["Youtube", "Facebook", "Instagram"];
for (const n of website) {
    console.log(n);
}
const shortCut = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "facebook",
}
for (const index in shortCut) {
    console.log(`Keys are: ${index}, and it's values is: ${shortCut[index]}`);
}