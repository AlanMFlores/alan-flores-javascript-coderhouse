// Catálogo Container

let catalogueGrid = document.querySelector('.catalogue-products');

// Render de Productos

const renderProducts = () => {
    for (const product of products) {
        let card = document.createElement('div');
        card.classList.add('product-card', product.category, 'hide');
        card.innerHTML = ` <div class="product-card-image">
                                <a href='../${product.link}'>
                                    <img src=../${product.image} alt="product card image">
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
        catalogueGrid.append(card);
    }
}

renderProducts();

// Botones de categorias

const todos = document.getElementById('todos');
const aros = document.getElementById('aros');
const arosArcilla = document.getElementById('aros-arcilla');
const collares = document.getElementById('collares');
const pulseras = document.getElementById('pulseras');


// Funcion para filtrar los productos por categoría

function filterProduct(value) {
    let buttons = document.querySelectorAll('.categories-filter-btn')
    buttons.forEach(button => {
        if(button.innerText.toLowerCase().includes((value.toLowerCase()))) {
            button.classList.add('category-active');
        } else {
            button.classList.remove('category-active');
        }
    })

    let elements = document.querySelectorAll('.product-card');

    elements.forEach( (element) => {
        if(value == 'todos') {
            element.classList.remove('hide');
        } else if(element.classList.contains(value)) {
            element.classList.remove('hide')
        } else {
            element.classList.add('hide');
        }
    });
}

// Renderizado Inicial

window.onload = () => {
    filterProduct('todos');
}

// Filtro de los Productos según Categorías

todos.addEventListener('click', () => {
    filterProduct('todos')
    filters.classList.remove('show-filters');
});
aros.addEventListener('click', () => {
    filterProduct('aros')
    filters.classList.remove('show-filters');
});
arosArcilla.addEventListener('click', () => {
    filterProduct('aros-arcilla')
    filters.classList.remove('show-filters');
});
collares.addEventListener('click', () => {
    filterProduct('collares')
    filters.classList.remove('show-filters');
});
pulseras.addEventListener('click', () => {
    filterProduct('pulseras')
    filters.classList.remove('show-filters');
});


// Busuqeda por Nombre

document.getElementById('product-name-submit').addEventListener('click', () => {
    let searchInput = document.getElementById('product-name').value;
    let elements = document.querySelectorAll('.product-card-name');
    let cards = document.querySelectorAll('.product-card');

    elements.forEach((element, index) => {
        if(element.innerText.toLowerCase().includes(searchInput.toLowerCase())) {
            cards[index].classList.remove('hide');
            filters.classList.remove('show-filters')
        } else {
            cards[index].classList.add('hide');
            filters.classList.remove('show-filters')
        }
    })
})





























