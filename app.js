const button = document.getElementById("button")

const circle = document.getElementById("circle")
const square = document.getElementById("square")
const rectangle = document.getElementById("rectangle")

const box = document.getElementById("box")

let oldValue = 0 
let numberIntheShape = 1

button.onclick=()=>{ 

    let n = document.getElementById("number").value;
    n = Number(oldValue) + Number(n)

    for (let j=numberIntheShape; j <= n; j++) {
        var shape = document.createElement("div")
        shape.innerHTML += numberIntheShape; 
        if (circle.checked) {
            shape.classList.add("circle")

        } else if (square.checked) {
            shape.classList.add("square")

        } else if (rectangle.checked) {
            shape.classList.add("rectangle")
            
        }


        box.appendChild(shape);
        numberIntheShape++
        oldValue = box.lastElementChild.innerHTML;
    }
}