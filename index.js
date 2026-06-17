function rollDice(){

    let numOfDice = document.getElementById("numOfDice").value;
    let diceResult = document.getElementById("diceResult");
    let diceimages = document.getElementById("diceimages");
    let values = [];
    let images = [];

    for (let i = 0; i < numOfDice; i++) {

        let value = Math.floor(Math.random() *6) + 1;
        values.push(value);
        images.push(`<img src="Dice_images/${value}.jpg" alt = "Dice ${value}"/>`);

    }

    diceResult.textContent = `dice: ${values.join(", ")}`;

    diceimages.innerHTML = `${images.join(" ")}`;
}   
