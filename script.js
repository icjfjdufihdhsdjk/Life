const gate = document.getElementById("gate");

let opened = false;

gate.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    gate.classList.add("open");
    document.body.classList.add("open");

});
