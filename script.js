//challenge 1
const limeCola = document.getElementById("lime-cola");
const saltedPeanuts = document.getElementById("salted-peanuts");
const chocolateBar = document.getElementById("chocolate-bar");
const fruitGummies = document.getElementById("fruit-gummies");
let displayTotal = document. getElementById("total-cost")
let totalCost = 0

function addToTotal (itemPrice) {
    totalCost = totalCost + itemPrice;
    displayTotal.innerText = totalCost;
}

limeCola.addEventListener("click", () => {
    addToTotal(2);
});

saltedPeanuts.addEventListener("click", () => {
    addToTotal(3);
});

chocolateBar.addEventListener("click", () => {
    addToTotal(4);
});

fruitGummies.addEventListener("click", () => {
    addToTotal(6);
});



//challenge 2
let moneyForm = document.querySelector("form");
moneyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputs = document.querySelectorAll(".input");
    let howMany = Number(inputs[0].value);
    let whichCoin = inputs[1].value;
    const coinsHere = document.getElementById("coins-here");
    
    for (let i = 0; i < howMany; i++) {
        let coin = document.createElement("div");
        coin.classList.add("coin");
        coin.classList.add(`${whichCoin}`);
        coin.innerText = whichCoin;
        coinsHere.append(coin);
        coin.addEventListener("click", (event) => {
            event.target.remove();
        })
    }
  
})


//challenge 3
let lightBulb = document.querySelector(".light-bulb");
let on = document.getElementById("on");
let off = document.getElementById("off");
let toggle = document.getElementById("toggle");
let end = document.getElementById("end");

on.addEventListener("click", () => {
    lightBulb.classList.add("on");
    lightBulb.classList.remove("off");
});

off.addEventListener("click", () => {
    lightBulb.classList.add("off");
    lightBulb.classList.remove("on");
});

toggle.addEventListener("click", () => {
    lightBulb.classList.toggle("on");
});

end.addEventListener("click", () => {
    lightBulb.remove();
    on.disabled = true;
    off.disabled = true;
    toggle.disabled = true;
    end.disabled = true;

})



