
const totalPriceElement = document.querySelector('.total');
const cards = document.querySelectorAll('.card-body');


function updateTotalPrice() {
    let total = 0;
    cards.forEach(card => {
        const quantity = parseInt(card.querySelector('.quantity').innerText);
        const unitPrice = parseFloat(card.querySelector('.unit-price').innerText.replace('$', ''));
        total += quantity * unitPrice;
    });
    totalPriceElement.innerText = `${total} $`;
}


function changeQuantity(card, increment) {
    const quantityElement = card.querySelector('.quantity');
    let quantity = parseInt(quantityElement.innerText);
    quantity += increment;

    
    if (quantity < 0) {
        quantity = 0;
    }
    quantityElement.innerText = quantity;
    updateTotalPrice();
}

function deleteItem(card) {
    card.remove();
    updateTotalPrice();
}


function toggleLike(heartIcon) {
    heartIcon.classList.toggle('liked');
}


cards.forEach(card => {
    const plusButton = card.querySelector('.fa-plus-circle');
    const minusButton = card.querySelector('.fa-minus-circle');
    const deleteButton = card.querySelector('.fa-trash-alt');
    const heartButton = card.querySelector('.fa-heart');

    plusButton.addEventListener('click', () => changeQuantity(card, 1));
    minusButton.addEventListener('click', () => changeQuantity(card, -1));
    deleteButton.addEventListener('click', () => deleteItem(card));
    heartButton.addEventListener('click', () => toggleLike(heartButton));
});


updateTotalPrice();