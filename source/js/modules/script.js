const modal = document.querySelector(".modal");
const hintScreenTablet = modal.querySelector("span");
const body = document.querySelector("body");
const promo = document.querySelector(".main__promo");
const windowWidth = window.innerWidth;
const TABLET = 768;

const hideMainScreen = function () {
  if (modal && windowWidth <= TABLET) {
    hintScreenTablet.textContent = "Кликните на экран";
    document.addEventListener("click", onClick);
  } else if (modal && windowWidth >= TABLET) {
    document.addEventListener("keydown", onEnterPress);
  }
};

const onEnterPress = function (evt) {
  if (evt.key === "Enter") {
    hideModal();
    document.removeEventListener("keydown", onEnterPress);
  }
};

const onClick = function () {
  hideModal();
  document.removeEventListener("click", onClick);
};

const hideModal = function () {
  modal.classList.add("modal--hide");
};

const showLogoScreen = function () {
  body.addEventListener("click", togglePromoBlock);
};

const togglePromoBlock = function () {
  if (
    modal.classList.contains("modal--hide") &&
    modal &&
    windowWidth <= TABLET
  ) {
    promo.classList.toggle("main__promo--show");
  }
};

export { hideMainScreen, showLogoScreen };
