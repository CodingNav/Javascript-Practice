// This file doesn't include any HTML or CSS, 
// however it has content linked to the HTML

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("button").onclick = inc;
}
)

let counter = 0
function inc() {
    // update the variable by one
    counter = counter + 1;
    // update the innerHTML of the #score element
    document.querySelector("#score").innerHTML = `Score: ${counter}`;

    if (counter >= 10) {
        counter = 0
        document.querySelector("#score").innerHTML = "You Win!"
    }
}