var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = "";
var currentBand = "";
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");


// Start looping
for (var loopTracker = 0; loopTracker < bands.length; loopTracker += 1) {
  var currentBand = `<p>${bands[loopTracker]}</p>`
  bandElement.innerHTML += currentBand;

}

for (var loopTracker = 0; loopTracker < vegetables.length; loopTracker += 1) {
  var currentVeggie = `<p>${vegetables[loopTracker]}</p>`
  veggieElement.innerHTML += currentVeggie;
}
