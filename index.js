const focusSearchBar = () => {
  document.getElementById("serachbar").style.outline = "2px solid #f7e325";
};
const removefocusOnSearchBar = () => {
  document.getElementById("serachbar").style.outline = "none";
};


let slideIndex = 0;
showSlides(0);
// Next/previous controls
function plusSlides(n) {
  console.log(n);
  if (n < 0 && slideIndex == 0) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex -= 2;
  }
  showSlides(slideIndex);
}
function showSlides(n = 0) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}