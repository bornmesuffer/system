function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
function srarch_bar() {
    let input= document.getElementById("mySearch").value;
    input=input.toLowerCase();
    let x = document.getElementByClassName("tablinks")
    for (i=0; i<x.length; i++) {
    if(!x[i].innerHTML.toLowerCase().includes(input)) {
    x[i].style.display="none";
}
else {
  x[i].style.display = "tab_item";
}
}
}
function myFunction() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more")
  let btnText = document.getElementById("myreadmore")
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction1() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more1")
  let btnText = document.getElementById("myreadmore1")
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction2() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more2")
  let btnText = document.getElementById("myreadmore2")
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
function myFunction3() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more3")
  let btnText = document.getElementById("myreadmore3")
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  }
  else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
// function myFunctionB() {
//   let dots = document.getElementById("dots");
//   let moreText = document.getElementById("moreB")
//   let btnText = document.getElementById("myreadmoreB")
//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   }
//   else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// }