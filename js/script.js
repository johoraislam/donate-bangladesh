const historyContainer = document.getElementById("history-container");
const cardContainer = document.getElementById("card-container");
const historyButton = document.getElementById("history-btn");
const donationButton = document.getElementById("donation-btn");
const donationHistory = document.getElementById("donation-history");
const modal = document.getElementById("my_modal_1");

const accountBalanceEl = document.querySelectorAll(".account-balance");


const updateAccountBalance = function (newBalance) {
    accountBalanceEl.forEach((element) => {
        element.innerText = newBalance;
    });
};

// Function to get field value by ID
const getFieldValuebyID = function (id) {
    const inputButton = parseFloat(document.getElementById(id).value);
    return inputButton;
};

// Function to get text field value
const gettextField = function (id) {
    let textField = parseFloat(document.getElementById(id).innerText);
    return textField;
};


document.getElementById("donate-btn").addEventListener("click", function () {
    const noakhaliDonation = getFieldValuebyID("noakhali-donation");
    const donatedAmount = gettextField("total-donation");
    let accountBalance = parseFloat(accountBalanceEl[0].innerText);

    if (noakhaliDonation > accountBalance) {
        return alert("Insufficient balance");
    } else if (noakhaliDonation <= 0) {
        return alert("Invalid amount number");
    } else if (isNaN(noakhaliDonation)) {
        return alert("Write a valid number");
    } else {
        modal.showModal();
        document.getElementById("total-donation").innerText = noakhaliDonation + donatedAmount;
        let totalAccountBal = accountBalance - noakhaliDonation;
        updateAccountBalance(totalAccountBal);
    }


    const historyCard = document.createElement("div");
    historyCard.className = "rounded-lg border border-[#111111] border-opacity-10 px-4 py-5";
    historyCard.innerHTML = `
    <h1 class="text-2xl font-bold tracking-wider">${noakhaliDonation.toFixed(2)} taka has been donated for flood at Noakhali, Bangladesh</h1>
    <p class="text-lg mt-2 text-[#1111111] text-opacity-70">Date: ${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
  `;
    historyContainer.insertBefore(historyCard, historyContainer.firstChild);
});


document.getElementById("donate-btn-2").addEventListener("click", function () {
    const feniDonation = getFieldValuebyID("feni-donation");
    const donatedAmount = gettextField("total-donation-2");
    let accountBalance = parseFloat(accountBalanceEl[0].innerText);

    if (feniDonation > accountBalance) {
        return alert("Insufficient balance");
    } else if (feniDonation <= 0) {
        return alert("Invalid amount number");
    } else if (isNaN(feniDonation)) {
        return alert("Write a valid number");
    } else {
        modal.showModal();
        document.getElementById("total-donation-2").innerText = feniDonation + donatedAmount;
        let totalAccountBal = accountBalance - feniDonation;
        updateAccountBalance(totalAccountBal);
    }

    // Add donation history
    const historyCard = document.createElement("div");
    historyCard.className = "rounded-lg border border-[#111111] border-opacity-10 px-4 py-5";
    historyCard.innerHTML = `
    <h1 class="text-2xl font-bold tracking-wider">${feniDonation.toFixed(2)} taka has been donated for flood at Feni, Bangladesh</h1>
    <p class="text-lg mt-2 text-[#1111111] text-opacity-70">Date: ${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
  `;
    historyContainer.insertBefore(historyCard, historyContainer.firstChild);
});


document.getElementById("donate-btn-3").addEventListener("click", function () {
    const quotaDonation = getFieldValuebyID("quota-donation");
    const donatedAmount = gettextField("total-donation-3");
    let accountBalance = parseFloat(accountBalanceEl[0].innerText);

    if (quotaDonation > accountBalance) {
        return alert("Insufficient balance");
    } else if (quotaDonation <= 0) {
        return alert("Invalid amount number");
    } else if (isNaN(quotaDonation)) {
        return alert("Write a valid number");
    } else {
        modal.showModal();
        document.getElementById("total-donation-3").innerText = quotaDonation + donatedAmount;
        let totalAccountBal = accountBalance - quotaDonation;
        updateAccountBalance(totalAccountBal);
    }

    // Added donation history
    const historyCard = document.createElement("div");
    historyCard.className = "rounded-lg border border-[#111111] border-opacity-10 px-4 py-5";
    historyCard.innerHTML = `
    <h1 class="text-2xl font-bold tracking-wider">${quotaDonation.toFixed(2)} taka has been donated for Quota Donation in Bangladesh</h1>
    <p class="text-lg mt-2 text-[#1111111] text-opacity-70">Date: ${new Date().toLocaleDateString()} (Bangladesh Standard Time)</p>
  `;
    historyContainer.insertBefore(historyCard, historyContainer.firstChild);
});

// History button functionality
historyButton.addEventListener("click", function () {
    historyButton.classList.add("bg-[#B4F461]", "border");
    donationButton.classList.remove("bg-[#B4F461]", "border");
    cardContainer.classList.add("hidden");
    historyContainer.classList.remove("hidden");
});

// Donation button functionality
donationButton.addEventListener("click", function () {
    cardContainer.classList.remove("hidden");
    historyContainer.classList.add("hidden");
    donationButton.classList.add("bg-[#B4F461]", "border");
    historyButton.classList.remove("bg-[#B4F461]", "border");
});