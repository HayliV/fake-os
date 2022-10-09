const open = document.getElementById("open");
const start_container = document.getElementById("start_container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
    start_container.classList.toggle("show");
});

close.addEventListener("click", () => {
    start_container.classList.remove("show");
});
