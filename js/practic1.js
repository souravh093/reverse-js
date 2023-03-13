document.getElementById('addBtn').addEventListener('click', () => {
    
    const inputField = document.getElementById('inputField').value;
    const inputQuantity = document.getElementById('inputQuantity').value;
    displayProduct(inputField, inputQuantity);
    saveProductToLocalStorage(inputField, inputQuantity);
});

const displayProduct = (item, quantity) => {
    const container =  document.getElementById('showItem')
    container.innerHTML += `<li>${item}: ${quantity}</li>`
}


const getStorageShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    return cart;
}

const saveProductToLocalStorage = (item, quantity) => {
    const cart = getStorageShoppingCart();
    cart[item] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
}

const displayProductFormLocalStorage = (    ) => {
    const savedCart = getStorageShoppingCart();
    for (const item in savedCart) {
        const quantity = savedCart[item];
        displayProduct(item, quantity)
    }
}


displayProductFormLocalStorage();


