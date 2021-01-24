// The Object class represents one of JavaScript's data types.
// It is used to store various keyed collections and more complex entities.

var iphone = {
    Name: "iPhone 12 Pro Max",
    Display: "6.7inch Super Retina XDR display",
    Camera: "Pro 12MP camera system (Ultra Wide, Wide, and Telephoto)",
    frontCamera: "12MP TrueDepth camera",
    faceID: true,
    Chip: "A14 Bionic chip with next-generation Neural Engine",
    waterResistant: true,
    Height: "5.78 inches",
    width: "71.5mm",
    Depth: "0.29 inch ",
    Weight: "6.66 ounces",
    Capacity: "128GB, 256GB, 512GB",
}
console.table(iphone);
// console.log(iphone);
console.log(iphone.Name);
iphone.faceID = false;
console.log(iphone.faceID);