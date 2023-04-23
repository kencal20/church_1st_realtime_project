document;
//   .getElementsByTagName("nav")[0]
//   .addEventListener("mouseover", function () {
//     document.getElementsByTagName("nav")[0].style.backgroundColor = "white";
//     document.getElementById("navHeading").style.color = "black";
//     document.getElementsByTagName("ul")[0].style.color = "black";
//     document.getElementsByTagName("select")[0].style.backgroundColor = "grey";
//     document.getElementsByTagName("select")[0].style.color = "white";
//   });

// document
//   .getElementsByTagName("nav")[0]
//   .addEventListener("mouseout", function () {
//     document.getElementsByTagName("nav")[0].style.backgroundColor = null;
//     document.getElementById("navHeading").style.color = null;
//     document.getElementsByTagName("ul")[0].style.color = null;
//     document.getElementsByTagName("select")[0].style.backgroundColor = null;
//     document.getElementsByTagName("select")[0].style.color = null;
//   });

const currentYear = new Date().getFullYear();
const copyrightSymbol = "All rights reserved  &copy; ";

document.getElementsByTagName("p")[0].innerHTML =copyrightSymbol+currentYear ;
