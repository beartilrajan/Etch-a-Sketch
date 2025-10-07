let a;

let randomMode = true;

function randomcolor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const container = document.querySelector(".container");

let drawing = false;
document.addEventListener("mousedown", () => drawing = true);
document.addEventListener("mouseup", () => drawing = false);

container.addEventListener("dragstart", e => e.preventDefault());
container.addEventListener("mousedown", e => e.preventDefault());



function childsquare(size, color) {
    const div = document.createElement("div");

    div.classList.add("square");

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;

    div.addEventListener("mousedown", function () {
        if (!randomMode) {
            div.style.background = randomcolor();
        }
        else{
            div.style.background = color.value;
        }
    });


    div.addEventListener("mouseenter", function () {
        if (drawing) {
                    if (!randomMode) {
            div.style.background = randomcolor();
        }
        else{
            div.style.background = color.value;
        }
        }
    });

    container.append(div);

}


const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    let n = parseInt(prompt("Enter the size of Grid"));
    if (n > 0 && n <= 100) {
        grid(n);
    }
    else {
        alert("Enter valid number between 1 to 100 ")
    }
}
)

const random = document.getElementById("random")
random.addEventListener("click", function () {
    randomMode = !randomMode;
    random.textContent = randomMode ? "Random: ON" : "Random: OFF";
})




function grid(n) {
    container.innerHTML = "";
    const color = document.getElementById("color");
    const size = 600 / n;
    for (let i = 1; i <= n * n; i++) {
        childsquare(size, color);
    }
}


grid(32);
