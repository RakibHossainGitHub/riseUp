// preloader
let preloader = document.getElementById("preloader");
window.addEventListener("load", function () {
  preloader.style.display = "none";
});

//active navebar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};
//nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

//contact
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "username",
    Password: "password",
    To: "rakibulislam016477@gmail.com",
    From: document.getElementById("gmail").value,
    Subject: "riseup message",
    Body:
      "Name: " +
      document.getElementById("firstName").value +
      document.getElementById("lastName").value +
      "<br> Email: " +
      document.getElementById("gmail").value +
      "<br> Phone no: " +
      document.getElementById("phone").value +
      "<br> Message: " +
      document.getElementById("message").value
  }).then((message) => alert("message sent succesfully"));
}
