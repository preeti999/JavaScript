//operators

var sellingPrice = 199;
var listingPrice = 799;

//formula 
var discountPrice = ((listingPrice-sellingPrice) /listingPrice) * 100;
console.log(discountPrice);

var displayDisciuntPersentage = Math.round(discountPrice);
console.log(displayDisciuntPersentage+"% OFF");