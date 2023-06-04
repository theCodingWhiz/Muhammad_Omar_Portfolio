// Toggle icon navbar
let menuIcons = document.querySelectorAll("#menu-icon");
let navbars = document.querySelectorAll(".navbar");

menuIcons.forEach((menuIcon, index) => {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbars[index].classList.toggle("active");
  };
});

// Scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelectorAll(`header nav a[href="#${id}"]`)
        .forEach((link) => {
          link.classList.add("active");
        });
    }
  });

  let headers = document.querySelectorAll("header");

  headers.forEach((header) => {
    header.classList.toggle("sticky", window.scrollY > 100);
  });

  // Remove toggle menu when click link
  menuIcons.forEach((menuIcon) => {
    menuIcon.classList.remove("bx-x");
  });
  navbars.forEach((navbar) => {
    navbar.classList.remove("active");
  });
};

// Scroll reveal animation
ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .service-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed.js
const typed = new Typed(".multiple-text", {
  strings: [
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Send email using SMTP.js
// Attach event listener to form submission
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form field values
    let fullName = document.querySelector('input[name="fullName"]').value;
    let emailAddress = document.querySelector(
      'input[name="emailAddress"]'
    ).value;
    let phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
    let emailSubject = document.querySelector(
      'input[name="emailSubject"]'
    ).value;
    let message = document.querySelector('textarea[name="message"]').value;

    // Create email body
    let emailBody = "Full Name: " + fullName + "<br>";
    emailBody += "Email Address: " + emailAddress + "<br>";
    emailBody += "Phone Number: " + phoneNumber + "<br>";
    emailBody += "Message: " + message;

    // Send email using SMTP.js
 // Send email using SMTP.js
// Attach event listener to form submission
document.querySelector("#contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get form field values
  let fullName = document.querySelector('input[name="fullName"]').value;
  let emailAddress = document.querySelector('input[name="emailAddress"]').value;
  let phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
  let emailSubject = document.querySelector('input[name="emailSubject"]').value;
  let message = document.querySelector('textarea[name="message"]').value;

  // Create email body
  let emailBody = "Full Name: " + fullName + "<br>";
  emailBody += "Email Address: " + emailAddress + "<br>";
  emailBody += "Phone Number: " + phoneNumber + "<br>";
  emailBody += "Message: " + message;

  // Send email using SMTP.js
