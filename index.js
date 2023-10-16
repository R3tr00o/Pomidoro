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
const btnApply = document.querySelector(".btn-apply");

btnApply.addEventListener("click", customTimeSet);

function customTimeSet() {
  let pomidoroTime = document.querySelector("#pomidoro-set");
  let shortTime = document.querySelector("#short-break-set");
  let longTime = document.querySelector("#long-break-set");

  pomidoroTime.value = isCustomTime(pomidoroTime);
  shortTime.value = isCustomTime(shortTime);
  longTime.value = isCustomTime(longTime);

  // Check if time values are proper
  isProperValue(pomidoroTime, shortTime, longTime);

  console.log(pomidoroTime.value);
  console.log(shortTime.value);
  console.log(longTime.value);
}

const isCustomTime = function (time) {
  const timeNum = Number(time.value);
  const timePlcHld = Number(time.placeholder);

  if (timeNum !== 0) {
    if (timeNum !== timePlcHld) {
      // return user defined value
      return timeNum;
    } else {
      // return basic value
      return timePlcHld;
    }
  } else {
    return timePlcHld;
  }
};

function isProperValue(timePM, timeSB, timeLB) {
  const times = [timePM, timeSB, timeLB];
  let isError = 0;

  times.forEach((time) => {
    let timeNumber = Number(time.value);

    if (timeNumber >= time.max || timeNumber <= time.min) {
      (isError = 1), (timeNumber = time.placeholder);
    }
  });

  if (isError) {
    alert("You enter wrong value, please use on from range");
  }
}
