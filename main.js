const container = document.querySelector(".container");

let drawing = false;
document.addEventListener("mousedown", () => drawing = true);
document.addEventListener("mouseup", () => drawing = false);

container.addEventListener("dragstart", e => e.preventDefault());
container.addEventListener("mousedown", e => e.preventDefault());


function childsquare(size) {
    const div = document.createElement("div");
    div.classList.add("square");
    const square = document.querySelectorAll(".square");

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    div.addEventListener("mousedown", function () {
        div.style.background = "red";

    });


    div.addEventListener("mouseenter", function () {
        if (drawing) {

            div.style.background = "red";
        }
    });

    container.append(div);

}

function grid() {
    container.innerHTML = "";
    const size = 960 / n;
    for (let i = 1; i <= n * n; i++) {
        childsquare(size);
    }



}

const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    let n = parseInt(prompt("Enter the size of Grid"));
}
)


grid(64);

