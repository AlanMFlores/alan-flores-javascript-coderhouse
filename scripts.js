// Cálculo de Stock

let arosStock = 5;

function productStock(stock) {
    console.log(`El stock del producto es de ${stock}`)
    while(stock > 0) {
        console.log(`Venta de Producto ${stock}`)
        stock--;
        console.log(`El stock del producto es de ${stock}`)
    }
}

productStock(arosStock);


// Cálculo de Descuento

let productPrice = 700; // Dinero
let discount = 15; // Porcentaje

function discountCalculation(price, discount) {
    let savedAmount = (price * discount) / 100;
    let priceWithDiscount = price - savedAmount;
    
    console.log(`El precio final es de $${priceWithDiscount}`);
    console.log(`Estás ahorrando $${savedAmount}`);
}

discountCalculation(productPrice, discount);

// Cálculo de Producto + Envío

let finalProductPrice = 595;
let shippingCost = 350;

function productAndShipping(product, shipping) {
    let finalPrice = product + shipping;
    console.log(`El costo final es de $${finalPrice} - Costo de Envío: $${shipping}`);
}

productAndShipping(finalProductPrice, shippingCost);


// Calculo Envío Gratis

function purchaseFreeShipping(purchaseAmount, shippingCost) {
    if(purchaseAmount >= 2500) {
        console.log(`El costo final es de $${purchaseAmount} - Costo de Envío: $0`);
    } else {
        let finalPrice = purchaseAmount + shippingCost;
        console.log(`El costo final es de $${finalPrice} - Costo de Envío: $${shippingCost}`);
    }
}

purchaseFreeShipping(2650, shippingCost);
purchaseFreeShipping(finalProductPrice, shippingCost);