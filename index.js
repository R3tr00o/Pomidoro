"use strict";

const btnMode = document.querySelectorAll(".btn-mode");

btnMode.forEach((e) => e.addEventListener("click", changeMode));

function changeMode(e) {
  const targetMode = e.target;
  const modeContainer = targetMode.parentNode;

  modeContainer
    .querySelector("[aria-selected='true']")
    .setAttribute("aria-selected", false);

  targetMode.setAttribute("aria-selected", true);
}

// Settings open system
const modalOpen = document.querySelector(".btn-settings");
const modalWindow = document.querySelector(".modal-settings");
const btnCloseModal = document.querySelector(".btn-close");

modalOpen.addEventListener("click", (e) => {
  if (modalWindow.hasAttribute("hidden")) {
    modalWindow.removeAttribute("hidden");
  } else {
    modalWindow.setAttribute("hidden", "");
  }
});

btnCloseModal.addEventListener("click", () => {
  modalWindow.setAttribute("hidden", "");
});
