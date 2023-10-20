// function home() {
//   var element = document.getElementById("home");
//   element.classList.add("active");
//   var element2 = document.getElementById("aboutus");
//   element2.classList.remove("active");
//   var element3 = document.getElementById("contact");
//   element2.classList.remove("active");
// }

// function about() {
//   var element = document.getElementById("aboutus");
//   element.classList.add("active");
//   var element2 = document.getElementById("home");
//   element2.classList.remove("active");
//   var element3 = document.getElementById("contact");
//   element3.classList.remove("active");
// }

// function contact() {
//   var element = document.getElementById("contact");
//   element.classList.add("active");
//   var element2 = document.getElementById("aboutus");
//   element2.classList.remove("active");
//   var element3 = document.getElementById("contact");
//   element3.classList.remove("active");
// }

// // Add active class to the current button (highlight it)
// const menuItems = document.getElementsByClassName("nav-link");
// const navItems = document.getElementsByClassName("nav-item");

// for (let i = 0; i < menuItems.length; i++) {
//   if (menuItems[i].href === location.href) {
//     navItems[i].className += " active";
//   }
// }

/* Code for changing active  
            link on clicking */
// var btns = $(".nav-link");

// console.log(btns);

// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function () {
//     var current = document.getElementsByClassName("active");

//     current[0].className = current[0].className.replace(" active", "");

//     this.className += " active";
//   });
// }

// const links = document.querySelector(".nav-link");
// for (let i = 0; i < links.length; i++) {
//   links[i].addEventListener("click", () => {
//     const active = document.querySelector(".active");
//     if (active) {
//       active.classList.remove("active");
//     }
//     links[i].classList.add("active");
//   });
// }
