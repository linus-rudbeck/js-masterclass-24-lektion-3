console.log("If check");

let ageInput = document.querySelector("#age");
let checkButton = document.querySelector("#check");
let outputParagraph = document.querySelector("#output")

checkButton.addEventListener("click", function () {

    let age = Number(ageInput.value);

    if (age >= 18) {
        outputParagraph.innerText = "Du är myndig";
    }
    else {
        outputParagraph.innerText = "Inte myndig";
    }

})
