// toggling start menu

const open = document.getElementById("open");
const start_container = document.getElementById("start_container");

open.addEventListener("click", () => {
    start_container.classList.toggle("show");
});

// opening Age of Empires App

const startAoE = document.getElementById("startAoE");
const AoE_container = document.getElementById("AoE_container");

startAoE.addEventListener("click", () => {
    AoE_container.classList.toggle("start");
});

// adding current time

// const today = new Date();
// const time = today.getHours() + ":" + today.getMinutes();
// document.getElementById("currentTime").innerHTML = time;

// trying am/pm format

const today = new Date();
const time = today.toLocaleString("en-AU", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
});
document.getElementById("currentTime").innerHTML = time;

// opening Notepad

const startNotepad = document.getElementById("startNotepad");
const notepad_container = document.getElementById("notepad_container");

startNotepad.addEventListener("click", () => {
    notepad_container.classList.toggle("start1");
});

// opening Internet Explorer

const startInternet = document.getElementById("startInternet");
const internetContainer = document.getElementById("window_container");
const closeInternet = document.getElementById("closeInternet");

startInternet.addEventListener("click", () => {
    internetContainer.classList.add("start2");
});

closeInternet.addEventListener("click", () => {
    internetContainer.classList.remove("start2");
});
