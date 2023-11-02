"use strict";

const btnMode = document.querySelectorAll(".btn-mode");
const displayTime = document.querySelector("#display-time");
let activeBtn = document.querySelector("[aria-selected='true']");
console.log(activeBtn);

// Time values
let pomidoro = 25;
let shortBreak = 5;
let longBreak = 15;

btnMode.forEach((e) => e.addEventListener("click", changeMode));

function changeMode(e) {
  const targetMode = e.target;
  const modeContainer = targetMode.parentNode;

  modeContainer
    .querySelector("[aria-selected='true']")
    .setAttribute("aria-selected", false);

  targetMode.setAttribute("aria-selected", true);
  activeBtn = targetMode;
  // set time from setting to display from current mode
  if (targetMode.textContent.includes("pomodoro")) {
    displayTimer(pomidoro);
  } else if (targetMode.textContent.includes("short break")) {
    displayTimer(shortBreak);
  } else {
    displayTimer(longBreak);
  }
}

function displayTimer(time) {
  if (time < 10) {
    displayTime.textContent = `0${time}:00`;
  } else {
    displayTime.textContent = `${time}:00`;
  }
}

const pomodoroSetting = document.querySelector("#pomidoro-set").placeholder;

// Settings open system
const modalOpen = document.querySelector(".btn-settings");
const modalWindow = document.querySelector(".modal-settings");
const btnCloseModal = document.querySelector(".btn-close");

modalOpen.addEventListener("click", () => {
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

  pomidoro = Number(pomidoroTime.value);
  shortBreak = Number(shortTime.value);
  longBreak = Number(longTime.value);

  if (activeBtn.textContent.includes("pomodoro")) {
    displayTimer(pomidoro);
  } else if (activeBtn.textContent.includes("short break")) {
    displayTimer(shortBreak);
  } else {
    displayTimer(longBreak);
  }
}

const isCustomTime = function (time) {
  const timeNum = Number(time.value);
  const timePlcHld = Number(time.placeholder);

  if (timeNum > -1) {
    if (timeNum !== timePlcHld && timeNum !== 0) {
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

    if (timeNumber > time.max || timeNumber < time.min) {
      time.value = "";
      isError = 1;
    }
  });

  if (isError) {
    alert("You enter wrong value, please use on from range");
  }
}

let intervalID;

const btnStart = document.querySelector(".btn-start");

btnStart.addEventListener("click", selectTime);

function selectTime() {
  if (!btnStart.classList.contains("active")) {
    btnStart.classList.add("active");
    btnStart.textContent = "Pause";
    if (activeBtn.id == "pomidoro") {
      startTimer(pomidoro);
    } else if (activeBtn.id === "short-break") {
      startTimer(shortBreak);
    } else if (activeBtn.id === "long-break") {
      startTimer(longBreak);
    }
  } else {
    clearInterval(intervalID);
    btnStart.classList.remove("active");
    btnStart.textContent = "Start";
  }
}

function startTimer(duration) {
  let timer = duration;
  let minutes;
  let seconds;
  intervalID = setInterval(function () {
    minutes = parseInt(timer / 60, 10) * 1000;
    seconds = parseInt(timer % 60, 10) * 1000;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    displayTime.textContent = `${minutes}:${seconds}`;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

function isActive(button) {
  if (button.classList.contains("active")) {
  } else {
  }
}
