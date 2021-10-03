// while the window is being scrolled, apply/remove stickiness
window.onscroll = function() {setStickiness()};

// access the navbar element by it's ID
let navbar = document.getElementById("navbar");

// access how far the navbar element is from the top
let sticky = navbar.offsetTop;

// apply/remove stickiness to navbar
function setStickiness() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
