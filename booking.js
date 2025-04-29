let totalPrice = 0;
const orderList = [];

function addOrder() {
    const orderInput = document.getElementById("orderInput");
    const order = orderInput.value;
    if (foodPrices[order]) {
        totalPrice += foodPrices[order];
        orderList.push(order);
        updateOrderPreview();
    } else {
        alert("Item not available.");
    }
    orderInput.value = ''; // Clear input after adding
}

function updateOrderPreview() {
    const orderListElement = document.getElementById("orderList");
    const priceCalculator = document.getElementById("priceCalculator");
    orderListElement.innerHTML = orderList.map(item => `<li>${item}</li>`).join('');
    priceCalculator.value = orderList.map(item => `${item}: ₹${foodPrices[item]}`).join('\n');
    document.getElementById("totalAmount").innerText = totalPrice;
}
