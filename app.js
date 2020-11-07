var lengthUnits = ["nm","um","mm", "cm","m", "km", "mi","yd","ft","in","nmi"];

//Testing with 1 length unit.
console.log(cnvr$(2, "cm","m"));

//Testing with all the length units.
console.log(cnvr$(2, "mm",...lengthUnits));

// Induce invalid unit Error.
// console.log(cnvr$(2, "um","bob"));

//Induce Negative Amount Error.
console.log(cnvr$(-1, "nmi","m"));
