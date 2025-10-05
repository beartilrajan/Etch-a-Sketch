const container = document.querySelector(".container");

let drawing = false;
document.addEventListener("mousedown", () => drawing = true);
document.addEventListener("mouseup", () => drawing = false);

container.addEventListener("dragstart", e => e.preventDefault());
container.addEventListener("mousedown", e=> e.preventDefault());


function grid() {
    const div = document.createElement("div");
    div.classList.add("square");
    const squares = document.querySelectorAll(".square");

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






for (let i = 1; i <= 16 * 16; i++) {
    grid();
}

/*     

    div.addEventListener("mouseover",function(){
        
    });
 */