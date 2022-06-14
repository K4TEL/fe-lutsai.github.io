var n = (26 % 10) + 1;
console.log(n);

var elements = document.body.getElementsByTagName("*");

var elem1 = elements[n];
elem1.id = "first";

var elem2 = elements[n+1];
elem2.id = "second";

document.getElementById("first").addEventListener('click', function onClick(event) {
  event.target.classList.toggle("active");
});

document.querySelector("#second").addEventListener('click', function onClick(event) {
  event.target.classList.toggle("active");
});

var picture = document.getElementById("picture");
var original = picture.src;
var mod = "https://dutchreview.com/wp-content/uploads/red-light-district-3292225_1920-1.jpg";

document.getElementById("zoom").addEventListener('click', function onClick(event) {
  picture.classList.toggle("zoom");
});
document.getElementById("less").addEventListener('click', function onClick(event) {
  picture.classList.toggle("less");
});

document.getElementById("add").addEventListener('click', function onClick(event) {
  picture.src=mod;
});
document.getElementById("rem").addEventListener('click', function onClick(event) {
  picture.src=original;
});
