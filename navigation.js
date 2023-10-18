function home() {
  var element = document.getElementById("home");
  element.classList.add("active");
  var element2 = document.getElementById("aboutus");
  element2.classList.remove("active");
  var element3 = document.getElementById("contact");
  element2.classList.remove("active");
}

function about() {
  var element = document.getElementById("aboutus");
  element.classList.add("active");
  var element2 = document.getElementById("home");
  element2.classList.remove("active");
  var element3 = document.getElementById("contact");
  element3.classList.remove("active");
}

function contact() {
  var element = document.getElementById("contact");
  element.classList.add("active");
  var element2 = document.getElementById("aboutus");
  element2.classList.remove("active");
  var element3 = document.getElementById("contact");
  element3.classList.remove("active");
}
