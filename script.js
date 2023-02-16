"use strict";

const modalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");
const openBtns = document.querySelectorAll(".show-modal");

const closeModal = () => {
  modalEl.classList.add("hidden");
  overlayEl.classList.add("hidden");
};

const openModal = () => {
  modalEl.classList.remove("hidden");
  overlayEl.classList.remove("hidden");
};

for (let i = 0; i < openBtns.length; i++) {
  openBtns[i].addEventListener("click", openModal);
}

closeBtn.addEventListener("click", closeModal);

overlayEl.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modalEl.classList.contains("hidden")) {
    closeModal();
  }
});
