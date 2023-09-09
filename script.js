window.addEventListener("scroll", (e) => {
  const nav = document.querySelector(".main-header");
  if (window.pageYOffset > 0) {
    document.getElementById("button").style.display = "block";
    nav.classList.add("navbar-scroll");
  } else {
    document.getElementById("button").style.display = "none";
    nav.classList.remove("navbar-scroll");
  }
});

const gotToTop = function () {
  document.documentElement.scrollTop = 0;
};
const displayMenu = function () {
  document.querySelector(".navbar-collapse").classList.toggle("collapse");
};

const showDropdown = function () {
  document
    .querySelector(".dropdown-content")
    .classList.toggle("dropdown-collapse");
};

document
  .querySelector(".navbar-toggler")
  .addEventListener("click", displayMenu);

document.getElementById("button").addEventListener("click", gotToTop);

document.querySelector(".dropdown").addEventListener("click", showDropdown);
