function updateTotal() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);

    const memory = parseInt(document.getElementById('memory-price').innerText);
    const storage = parseInt(document.getElementById('storage-price').innerText);
    const delivery = parseInt(document.getElementById('delivery-charge').innerText);
    const subTotal = bestPrice + memory +
        storage + delivery;
    const subTotalAmount = document.getElementById('sub-total');
    subTotalAmount.innerText = subTotal;
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = subTotal;
}
document.getElementById('pomo-button').addEventListener('click', function () {
    const getPomoCode = document.getElementById('pomo-input');
    const pomoCode = getPomoCode.value;
    const getTotal = document.getElementById('grand-total');
    let total = parseFloat(getTotal.innerText);

    if (pomoCode == 'stevekaku') {
        total = total - (total * (20 / 100));

    }

    getTotal.innerText = total;
    getPomoCode.value = '';



})


document.getElementById('small-memory').addEventListener('click', function () {
    const smallMemory = document.getElementById('memory-price');
    smallMemory.innerText = '0';
    updateTotal();

})
document.getElementById('large-memory').addEventListener('click', function () {
    const largeMemory = document.getElementById('memory-price');
    largeMemory.innerText = '180';
    updateTotal();

})
document.getElementById('smallStorage-memory').addEventListener('click', function () {
    const smallStorageMemory = document.getElementById('storage-price');
    smallStorageMemory.innerText = '0';
    updateTotal();

})
document.getElementById('mediumStorage-memory').addEventListener('click', function () {
    const mediumStorageMemory = document.getElementById('storage-price');
    mediumStorageMemory.innerText = '100';
    updateTotal();

})
document.getElementById('largeStorage-memory').addEventListener('click', function () {
    const largeStorageMemory = document.getElementById('storage-price');
    largeStorageMemory.innerText = '180';
    updateTotal();

})
document.getElementById('free-delivery').addEventListener('click', function () {
    const freeDelivery = document.getElementById('delivery-charge');
    freeDelivery.innerText = '0';
    updateTotal();
})
document.getElementById('cost-delivery').addEventListener('click', function () {
    const costDelivery = document.getElementById('delivery-charge');
    costDelivery.innerText = '20';
    updateTotal();
})

