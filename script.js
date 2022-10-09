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
