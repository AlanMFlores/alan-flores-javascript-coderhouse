// Featured Products Container 

let featuredProducts = document.querySelector('.featured-products-grid')

// Render de Productos en Home

const renderFeaturedProducts = () => {
    for (const product of products) {
        let card = document.createElement('div');
        card.classList.add('product-card', product.category);
        card.innerHTML = ` <div class="product-card-image">
                                <a href='${product.link}'>
                                    <img src=./${product.image} alt="product card image">
                                </a>
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
        `
        featuredProducts.append(card);
    }
}

renderFeaturedProducts();