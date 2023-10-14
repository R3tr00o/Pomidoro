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

  // set time from setting to display from current mode
  if (targetMode.textContent.includes("pomodoro")) {
  } else if (targetMode.textContent.includes("short break")) {
  } else {
  }
}

/* 
<p class="fs-800 letter-spacing-2" id="display-time">
  <span id="display-minute">25</span>:<span id="display-second">00</span>
</p>
*/
const pomodoroSetting = document.querySelector("#pomidoro-set").placeholder;

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

// Settings applying
const pomidoroTime = document.querySelector("#pomidoro-set");
const shortTime = document.querySelector("#short-break-set");
const longTime = document.querySelector("#long-break-set");
const btnApply = document.querySelector(".btn-apply");

btnApply.addEventListener("click", () => {});
