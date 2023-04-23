document.getElementById("nav").addEventListener("mouseover", function () {
  document.getElementById("nav").style.backgroundColor = "white";
  document.getElementById("navHeading").style.color = "black";
  document.getElementsByTagName("ul")[0].style.color = "black";

});

document.getElementById("nav").addEventListener("mouseout", function () {
  document.getElementById("nav").style.backgroundColor = null;
  document.getElementById("navHeading").style.color = null;
  document.getElementsByTagName("ul")[0].style.color = null;
});
