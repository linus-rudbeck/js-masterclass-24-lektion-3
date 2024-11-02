// For-loopen
for (let i = 0; i < 5; i++) {
    console.log("I loopen");

    console.log(i)
}


// While-loopen
let x = 0;
while (x < 5) {
    console.log("While!", x);
    x++;
}



// Funktion för att slumpa ett nummer
function getRandomNumber() {
    return Math.round(Math.random() * 10);
}


// Slumpa tills vi får 7
let randomNumber = 0;
while (randomNumber != 7) {
    randomNumber = getRandomNumber();
    console.log(randomNumber);
}


// If-sats i en loop
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " är jämnt");
    }
    else {
        console.log(i + " är udda")
    }
}


// For-loop och DOM
let list1 = document.querySelector("#list1");

for (let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    li.innerText = "Number " + i;
    list1.appendChild(li);
}


// For-loop och DOM 2
let numberInput = document.querySelector("#number-input")
let numberButton = document.querySelector("#number-button")
let list2 = document.querySelector("#list2");

numberButton.addEventListener("click", function () {
    list2.innerHTML = "";
    let numberOfListItems = Number(numberInput.value);

    for (let i = 0; i < numberOfListItems; i++) {
        let li = document.createElement("li");
        li.innerText = "Number " + i;
        list2.appendChild(li);
    }
});


// While & DOM
let blocks = document.querySelector("#blocks"); // Hämtar blocks-boxen

numberButton.addEventListener("click", function(){
    blocks.innerHTML = ""; // Töm boxen
    let number = 0; // Sätt startnummer till 0

    while(number != 7){
        number = getRandomNumber(); // Hämta slumpat nummer
        let div = document.createElement("div"); // Skapa div-element

        // Styling
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.backgroundColor = "lightblue";
        div.style.border = "1px solid black"

        div.innerText = number; // Lägg in text
        blocks.appendChild(div) // Lägg till på sidan
    }

})



// Guess game
let guessInput = document.querySelector("#guess-input");
let guessButton = document.querySelector("#guess-button");
let guessOutput = document.querySelector("#guess-output");
let numberToGuess = getRandomNumber();
console.log(numberToGuess);

guessButton.addEventListener("click", function(){
    let guessedNumber = Number(guessInput.value);

    if(guessedNumber === numberToGuess){
        guessOutput.innerText = "Rätt gissat. Du vinner en gås!"
    }
    else{
        guessOutput.innerText = "Du vinner inte.... 😩"
    }
});