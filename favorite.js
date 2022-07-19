// Añadir productos a Favoritos

let favBtn = document.querySelector('.fav-check');
let favoriteIcon = document.querySelector('.favorite-icon');
let productCode = document.querySelector('.product-code').innerText;


favBtn.addEventListener('click', () => {

    let favoritesProducts = [];
    localStorage.setItem('favoritesProducts', JSON.stringify(favoritesProducts))
    let favoritesStorage = JSON.parse(localStorage.getItem('favoritesProducts'));

    for(const product of products) {
        if(productCode == product.id && favBtn.id == 'false') {
            let stringifiedProduct = JSON.stringify(product);
            favoritesStorage.push(stringifiedProduct);
            localStorage.setItem('favoritesProducts', JSON.stringify(favoritesStorage));
            favBtn.id == 'true'
            console.log(favoritesStorage);
        } else if(favBtn.id == 'true'){
            localStorage.removeItem('favoritesProducts');
            localStorage.setItem('favoritesProducts', favoritesStorage);
            favBtn.id == 'false'
            console.log();
        }
    }

    if(favBtn.id == 'false') {

        favoriteIcon.classList.add('fav-product');
        favBtn.id = 'true';
    } else {
        favoriteIcon.classList.remove('fav-product');
        favBtn.id = 'false';favoritesStorage
    }

})


// let productId = document.querySelector('.product-code').innerText;
let favListContainer = document.querySelector('.favorites-list');

// Render de producto agregado a favoritos

const favoriteRender = (product) => {
        let favCard = document.createElement('div');
        favCard.classList.add('favorites-list-item');
        favCard.innerHTML = `<img src="../${product.link}" alt="">
                             <div class="favorites-list-item-info">
                                 <h3 class="product-name">${product.name}</h3>
                                 <p class="product-price">${product.price}}</p>
                                 <button class="delete">Eliminar de Favoritos</button>
                             </div>`;
        favListContainer.append(favCard);
}


