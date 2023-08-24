const divRed = document.querySelector("#red");
const divOrange = document.querySelector("#orange");
const divGreen = document.querySelector("#green");

startApplication();

function startApplication(){
    setInterval(lunchProgram, 2000);
}

function lunchProgram() {
    if (divRed.style.backgroundColor === "" && divOrange.style.backgroundColor === "" && divGreen.style.backgroundColor === "") {
        divRed.style.backgroundColor = divRed.id;
    } else {
        if (divRed.style.backgroundColor === divRed.id && divOrange.style.backgroundColor === "" && divGreen.style.backgroundColor === "") {
            divRed.style.backgroundColor = "";
            divOrange.style.backgroundColor = divOrange.id;
        } else if (divRed.style.backgroundColor === "" && divOrange.style.backgroundColor === divOrange.id && divGreen.style.backgroundColor === "") {
            divOrange.style.backgroundColor = "";
            divGreen.style.backgroundColor = divGreen.id;
        } else if (divRed.style.backgroundColor === "" && divOrange.style.backgroundColor === "" && divGreen.style.backgroundColor === divGreen.id) {
            divGreen.style.backgroundColor = "";
            divRed.style.backgroundColor = divRed.id;
        }
    }
}