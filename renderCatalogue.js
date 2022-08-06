// Catálogo Container

let catalogueGrid = document.querySelector('.catalogue-products');

// Render de Productos en Catálogo

const getProducts = async () => {
    try {
        const products = await fetch('../data/products.json');
        const parsedProducts = await products.json();

        parsedProducts.forEach(product => {
            let card = document.createElement('div');
            card.classList.add('product-card', product.category, 'hide');
            card.innerHTML = ` <div class="product-card-image">
                                        <img src=../${product.image} alt="product card image">
                                    </a>
                                    <div class="product-card-favorite">
                                        <button class="fav-check" id="false">
                                            <i class="fa-solid fa-heart" id=${product.id}></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="product-card-description">
                                    <div class="product-card-info">
                                        <p class="product-card-name">${product.name}</p>
                                        <p class="product-card-price">$${product.price.toFixed(2)}</p>
                                    </div>
                                    <div class="product-card-stars">
                                        <img src="../images/stars.png" alt="product card stars">
                                    </div>
                                </div>
                                <div class="product-card-purchase">
                                    <button class="cart-btn">Agregar al Carrito</buton>
                                    <button class="purchase-btn">Comprar</buton>
                                </div>
            `
            catalogueGrid.append(card);
        })

    } catch(error) {
        const errorMessage = document.createElement('p');
        errorMessage.innerHTML = `No se han podido obtener los productos. Intenta nuevamente en unos minutos.`
        catalogueGrid.append(errorMessage);
        catalogueGrid.classList.add('error-render');
    }
}

getProducts();