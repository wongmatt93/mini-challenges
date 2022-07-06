//variables
const vending = document.querySelectorAll(".vending");
const totalParagraph = document.querySelector(".total");
let total = 0;
const wallet = document.querySelector(".coin-container");
const coinForm = document.querySelector(".coin-form");
const walletParagraph = document.querySelector(".wallet-total");
let walletTotal = 0;
const currency = [
  {
    name: "quarter",
    value: 0.25,
  },
  {
    name: "dime",
    value: 0.1,
  },
  {
    name: "nickel",
    value: 0.05,
  },
  {
    name: "penny",
    value: 0.01,
  },
];
const lightBulb = document.querySelector(".light-bulb");
const switches = document.querySelectorAll(".light-switch");

//Vending Machine
vending.forEach((button) => {
  button.addEventListener("click", () => {
    total += parseInt(button.value, 10);
    totalParagraph.textContent = `Total: $${total.toFixed(2)}`;
  });
});

//Make Money!
coinForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const quantity = document.querySelector("#how-many").value;
  const coinType = document.querySelector("#coin-type").value;

  for (let i = 0; i < quantity; i++) {
    let newCoin = document.createElement("li");
    coinType == "penny"
      ? (walletTotal += 0.01)
      : coinType == "nickel"
      ? (walletTotal += 0.05)
      : coinType == "dime"
      ? (walletTotal += 0.1)
      : (walletTotal += 0.25);
    newCoin.classList.add("coin", coinType);
    newCoin.textContent = coinType;
    wallet.append(newCoin);
    walletParagraph.innerHTML = `Total: $${walletTotal.toFixed(2)}`;
    newCoin.addEventListener("click", () => {
      newCoin.className == "coin penny"
        ? (walletTotal -= 0.01)
        : newCoin.className == "coin nickel"
        ? (walletTotal -= 0.05)
        : newCoin.className == "coin dime"
        ? (walletTotal -= 0.1)
        : (walletTotal -= 0.25);
      newCoin.remove();
      walletParagraph.innerHTML = `Total: $${walletTotal.toFixed(2)}`;
    });
  }
});

//LIGHT BULB
switches.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    if (button.value == "light-on") {
      lightBulb.classList.add("light-active");
    } else if (button.value == "light-off") {
      lightBulb.classList.remove("light-active");
    } else if (button.value == "light-toggle") {
      lightBulb.classList.toggle("light-active");
    } else if (button.value == "light-end") {
      lightBulb.remove();
      switches.forEach((button) => {
        button.disabled = true;
      });
    }
  });
});
