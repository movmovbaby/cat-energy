
const pageHeaderWrapper = document.querySelector(".page-header__wrapper");
const navToggle = pageHeaderWrapper.querySelector(".page-header__nav-toggle");
const mainNav = pageHeaderWrapper.querySelector(".main-nav ");

navToggle.addEventListener("click", function () {
  if (pageHeaderWrapper.classList.contains("page-header__wrapper--nav-closed")) {
    pageHeaderWrapper.classList.remove("page-header__wrapper--nav-closed");
    pageHeaderWrapper.classList.add(".page-header__wrapper--nav-opened");
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  }
  else if (pageHeaderWrapper.classList.contains(".page-header__wrapper--nav-opened")) {
    pageHeaderWrapper.classList.remove(".page-header__wrapper--nav-opened");
    pageHeaderWrapper.classList.add("page-header__wrapper--nav-closed");
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
  }

})
