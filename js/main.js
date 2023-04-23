document.getElementsByTagName("nav")[0].addEventListener("mouseover", function () {
  document.getElementsByTagName("nav")[0].style.backgroundColor = "white";
  document.getElementById("navHeading").style.color = "black";
  document.getElementsByTagName("ul")[0].style.color = "black";

});

document.getElementsByTagName("nav")[0].addEventListener("mouseout", function () {
  document.getElementsByTagName("nav")[0].style.backgroundColor = null;
  document.getElementById("navHeading").style.color = null;
  document.getElementsByTagName("ul")[0].style.color = null;
});
