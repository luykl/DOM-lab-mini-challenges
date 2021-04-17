//challenge 1
const limeCola = document.getElementById("lime-cola");
const saltedPeanuts = document.getElementById("salted-peanuts");
const chocolateBar = document.getElementById("chocolate-bar");
const fruitGummies = document.getElementById("fruit-gummies");
let displayTotal = document. getElementById("total-cost")
let totalCost = 0


limeCola.addEventListener("click", () => {
    totalCost = totalCost + 2;
    displayTotal.innerText = totalCost;
    console.log(totalCost);
});
saltedPeanuts.addEventListener("click", () => {
    totalCost = totalCost + 3;
    displayTotal.innerText = totalCost;
    console.log(totalCost);
});
chocolateBar.addEventListener("click", () => {
    totalCost = totalCost + 4;
    displayTotal.innerText = totalCost;
    console.log(totalCost);
});
fruitGummies.addEventListener("click", () => {
    totalCost = totalCost + 6;
    displayTotal.innerText = totalCost;
    console.log(totalCost);
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



