

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  if(scrolled < 35){
    document.getElementById("myBar").style.background = "red";
} else if(scrolled < 70){
     document.getElementById("myBar").style.background = "blue";
}
else{
    document.getElementById("myBar").style.background = "green";
}

document.getElementById("myBar").style.width = scrolled + "%";

// back to top
//Get the button
var mybutton = document.getElementById("myBtn");

if (scrolled > 16) {
  mybutton.style.display = "block";
} else {
  mybutton.style.display = "none";
}


// back to top

}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}







