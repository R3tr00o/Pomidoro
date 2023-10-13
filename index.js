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
