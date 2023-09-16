// Menu

const body = document.body;
const bgColorsBody = ["#ffb457", "#91C8E4", "#bfbff8", "#ffe797", "#cffff1"];
const btnColors = ["#ff8c00", "#068FFF", "#4343f5", "#e0b115", "#65ddb7"];
const menu = body.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

// #9999fb Dark Purple Hex -- #adadfb Lighter // Beige F5F5DC // Orange ffb457

function clickItem(item, index) {
  menu.style.removeProperty("--timeOut");

  if (activeItem === item) return;

  if (activeItem) {
    activeItem.classList.remove("active");
  }

  item.classList.add("active");
  body.style.backgroundColor = bgColorsBody[index];
  activeItem = item;
  offsetMenuBorder(activeItem, menuBorder);
}

function offsetMenuBorder(element, menuBorder) {
  const offsetActiveItem = element.getBoundingClientRect();
  const left =
    Math.floor(
      offsetActiveItem.left -
        menu.offsetLeft -
        (menuBorder.offsetWidth - offsetActiveItem.width) / 2
    ) + "px";
  menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => clickItem(item, index));
});

window.addEventListener("resize", () => {
  offsetMenuBorder(activeItem, menuBorder);
  menu.style.setProperty("--timeOut", "none");
});

// End of Menu

// Pages
let pages = document.getElementsByClassName("page");
for (let i = 0; i < pages.length; i++) {
  pages[i].style.display = "none";
}

// Show the first page by default
document.getElementById("home").style.display = "block";
document.getElementById("home").style.opacity = "1";

// Function to open a page
function openPage(evt, pageName) {
  // Hide all pages
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
    pages[i].style.opacity = "0";
  }

  // Show the specific page
  document.getElementById(pageName).style.display = "block";
  setTimeout(function () {
    document.getElementById(pageName).style.opacity = "1";
  }, 10);
}

// Contact Me Button

const contactBtn = document.querySelector("#contact__menu-button")

document.querySelector("#contact__button").addEventListener("click", function() {
  contactBtn.click();
});
// document.querySelector("#contact__button-g").addEventListener("click", function() {
//   contactBtn.click();
// });

// ========================== Loading Page ================>

let loader = document.getElementById("loader");
let loaderText = loader.querySelector("h1");
let progressBar = document.getElementById("progressBar");
// let website = document.getElementById("website");

let progress = 0;

// Define the colors for the background animation
let colors = ["#cffff1", "#bfbff8", "#ffb457"];
// "#ffe797",, "#068FFF"

let loadingInterval = setInterval(() => {
  progress += 1;
  // loaderText.textContent = progress + "%";

  // Update the background color of the loader
  let colorIndex = Math.floor(progress / (100 / colors.length));
  loader.style.backgroundColor = colors[colorIndex];

  // Update the value of the progress bar
  progressBar.value = progress;

  if (progress === 110) {
    clearInterval(loadingInterval);

    //
    // Remove the loader from the page
    loader.parentNode.removeChild(loader);
  }
}, 18);

// ===============================> End of Loading Page <===================================//

const menuLinks = document.querySelectorAll(".menu button");

// Add click event listener to each link
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Scroll to top of page
    window.scrollTo(0, 0);
  });
});

// Email Contact Form

function sendEmail() {

  let name = document.getElementById("contact__name").value;
  let email = document.getElementById("contact__email").value;
  let message = document.getElementById("contact__message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all the fields before sending the email.");
    return;
  }

  let data = {
    name: name,
    email: email,
    message: message,
  };

  const serviceID = "service_zopljre";
  const templateID = "template_xkei7il";

  emailjs
    .send(serviceID, templateID, data)
    .then((res) => {
      document.getElementById("contact__name").value = "";
      document.getElementById("contact__email").value = "";
      document.getElementById("contact__message").value = "";
      console.log(res);
      alert("Your Message Was Sent Successfully");
    })
    .catch((err) => console.log(err));
}


// Detail Button for Skills

let currentButtonIndex = 0;
const buttons = document.querySelectorAll('.menu__item');
const buttonCount = buttons.length;
let lastScrollTime = 0;

function handleScroll(event) {
  // Throttle scroll events
  if (Date.now() - lastScrollTime < 1000) return;
  lastScrollTime = Date.now();

  if (event.deltaY > 0 && currentButtonIndex < buttonCount - 1) {
    // Scroll down
    currentButtonIndex++;
    buttons[currentButtonIndex].click();
  } else if (event.deltaY < 0 && currentButtonIndex > 0) {
    // Scroll up
    currentButtonIndex--;
    buttons[currentButtonIndex].click();
  }
}

document.addEventListener('wheel', handleScroll);
document.addEventListener('touchmove', handleScroll);

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentButtonIndex = index;
  });
});

// Swipe Effect Changing The Page for Mobile

// let touchStartX = 0;
// let touchEndX = 0;
// let touchStartY = 0;
// let touchEndY = 0;
//
// function handleTouchStart(event) {
//   touchStartX = event.touches[0].clientX;
//   touchStartY = event.touches[0].clientY;
// }
//
// function handleTouchMove(event) {
//   touchEndX = event.changedTouches[0].clientX;
//   touchEndY = event.changedTouches[0].clientY;
// }
//
// function handleTouchEnd() {
//   if (Math.abs(touchEndY - touchStartY) < Math.abs(touchEndX - touchStartX)) {
//     if (touchEndX < touchStartX && currentButtonIndex < buttonCount - 1) {
//       // Swipe left
//       currentButtonIndex++;
//       buttons[currentButtonIndex].click();
//       setTimeout(() => window.scroll(0, 0), 100);
//     } else if (touchEndX > touchStartX && currentButtonIndex > 0) {
//       // Swipe right
//       currentButtonIndex--;
//       buttons[currentButtonIndex].click();
//       setTimeout(() => window.scroll(0, 0), 100);
//     }
//   }
// }
//
// document.addEventListener('touchstart', handleTouchStart);
// document.addEventListener('touchmove', handleTouchMove);
// document.addEventListener('touchend', handleTouchEnd);


// ------------ Back to Top Button ------------->

let backToTopButton = document.getElementById('back-to-top');
let arrowIcon = document.querySelector('#back-to-top i');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    if (i === 0) {
      backToTopButton.style.display = 'none';
    } else {
      backToTopButton.style.display = 'block';
      // backToTopButton.addEventListener('mouseover', () => {
      //   arrowIcon.style.color = bgColorsBody[i];
      // })
    }
  });
}

// backToTopButton.addEventListener('mouseout', function() {
//   arrowIcon.style.color = "#1d1d27"
// });

document.getElementById('back-to-top').addEventListener('click', function() {
  buttons[0].click();
});

// ------------------ Nav Bar ----------------------->

const burger = document.querySelector(".burger");
// const infoIcon = document.querySelector(".burger i")

function navToggle(e) {
  if (!e.target.classList.contains("active")) {
    e.target.classList.add("active");
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -20%)" });
    document.body.classList.add("hide");
  } else {
    e.target.classList.remove("active");
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -20%)" });
    document.body.classList.remove("hide");
  }
}

burger.addEventListener("click", navToggle);

// burger.addEventListener('mouseout', function() {
//   infoIcon.style.color = "#1d1d27"
// });
// burger.addEventListener("mouseover", (e) => {
//   if (e.target.classList.contains("active")) {
//   infoIcon.style.color = "#F5F5DC";
//   } else {
//     infoIcon.style.color = bgColorsBody[currentButtonIndex];
//   }
// });