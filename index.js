window.addEventListener("scroll", function () {
  if (window.scrollY > 1000) {
    document.querySelector(".toTop").style.display = "block";
    // document.querySelector(".header").classList.add("scroll");
  } else {
    document.querySelector(".toTop").style.display = "none";
    // document.querySelector(".header").classList.remove("scroll");
  }
});
