const products = [
    {
        name:'Aros Circulares',
        id: '001',
        price: 600, 
        category: 'Aros', 
        stock: 5, 
        image:'images/products/aros-arcilla-circulo-chico-negro.jpg', 
        variacion: [
            {
                color: 'blanco',
                id: '001BL',
                image: 'images/products/aros-arcilla-circulo-chico-blanco.jpg'
            },
            {
                color: 'amarillo',
                id: '001AM',
                image: 'images/products/aros-arcilla-circulo-chico-amarillo.jpg'
            },
            {
                color: 'mandarina',
                id: '001NR',
                image: 'images/products/aros-arcilla-circulo-chico-mandarina.jpg'
            },
            {
                color: 'negro',
                id: '001NE',
                image: 'images/products/aros-arcilla-circulo-chico-negro.jpg'
            },
            {
                color: 'verde',
                id: '001VD',
                image: 'images/products/aros-arcilla-circulo-chico-verde.jpg'
            },
            {
                color: 'salmón',
                id: '001SL',
                image: 'images/products/aros-arcilla-circulo-chico-salmon.jpg'
            },
            {
                color: 'rojo',
                id: '001RO',
                image: 'images/products/aros-arcilla-circulo-chico-rojo.jpg'
            }
        ]
    },
    {
        name:'Aros Botones', 
        id: '002', 
        price: 520, 
        category: 'Aros', 
        stock: 5, 
        image:'images/products/aros-arcilla-botones-negro-naranja.jpg', 
        variacion: [
            {
                color: 'negro',
                id: '002NE',
                image: 'images/products/aros-arcilla-botones-negro.jpg'
            },
            {
                color: 'blanco',
                id: '002BL',
                image: 'images/products/aros-arcilla-botones-blanco.jpg'
            },
            {
                color: 'negro-naranja',
                id: '002N-N',
                image: 'images/products/aros-arcilla-botones-negro-naranja.jpg'
            },
            {
                color: 'blanco-naranja',
                id: '002B-N',
                image: 'images/products/aros-arcilla-botones-blanco-naranja.jpg'
            }
        ]
    },
    {
        name:'Aros Animal Print', 
        id: '003', 
        price: 550, 
        category: 'Aros', 
        stock: 5, 
        image:'images/products/aros-animal-print-rojo.jpg', 
        variacion: [
            {
                color: 'blanco',
                id: '003BL',
                image: 'images/products/aros-animal-print-blanco.jpg'
            },
            {
                color: 'rojo',
                id: '003RO',
                image: 'images/products/aros-animal-print-rojo.jpg'
            },
            {
                color: 'verde',
                id: '003VD',
                image: 'images/products/aros-animal-print-verde.jpg'
            },
            {
                color: 'mandarina',
                id: '003MN',
                image: 'images/products/aros-animal-print-mandarina.jpg'
            },
            {
                color: 'mostaza',
                id: '003MZ',
                image: 'images/products/aros-animal-print-mostaza.jpg'
            },
            {
                color: 'naranja',
                id: '003NR',
                image: 'images/products/aros-animal-print-naranja.jpg'
            }
        ]
    },
    {
        name:'Aros Barquitos', 
        id: '004', 
        price: 540, 
        category: 'Aros', 
        stock: 5, 
        image:'images/products/aros-arcilla-barco-pequeño-mandarina.jpg', 
        variacion: [
            {
                color: 'mandarina',
                id: '004NR',
                image: 'images/products/aros-arcilla-barco-pequeño-mandarina.jpg'
            },
            {
                color: 'negro',
                id: '004NE',
                image: 'images/products/aros-arcilla-barco-pequeño-negro.jpg'
            }
        ]
    },
    {
        name:'Aros Pétalos', 
        id: '005', 
        price: 550, 
        category: 'Aros', 
        stock: 5, 
        image:'images/products/aros-petalos-blancos.jpg', 
        variacion: [
            {
                color: 'blanco',
                id: '005BL',
                image: 'images/products/aros-petalos-blancos.jpg'
            }
        ]
    },
    {
        name:'Aros Redondos', 
        id: '006', 
        price: 600, 
        category: 'Aros', 
        stock: 5, 
        image:'images/products/aros-arcilla-redondos-salmon.jpg', 
        variacion: [
            {
                color: 'blanco',
                id: '006BL',
                image: 'images/products/aros-arcilla-redondos-blanco.jpg'
            },
            {
                color: 'salmon',
                id: '006SL',
                image: 'images/products/aros-arcilla-redondos-salmon.jpg'
            },
            {
                color: 'amarillo',
                id: '006AM',
                image: 'images/products/aros-arcilla-redondos-amarillo.jpg'
            },
            {
                color: 'mandarina',
                id: '006MN',
                image: 'images/products/aros-arcilla-redondos-mandarina.jpg'
            },
            {
                color: 'negro',
                id: '006NE',
                image: 'images/products/aros-arcilla-redondos-negro.jpg'
            },
            {
                color: 'rojo',
                id: '006RO',
                image: 'images/products/aros-arcilla-redondos-rojo.jpg'
            }
        ]
    },
    {
        name:'Aros Tres Piezas', 
        id: '007', 
        price: 600, 
        category: 'Aros', 
        stock: 5, 
        image:'images/products/aros-arcilla-tres-piezas-blanco.jpg', 
        variacion: [
            {
                color: 'blanco',
                id: '007BL',
                image: 'images/products/aros-arcilla-tres-piezas-blanco.jpg'
            },
        ]
    },
    
]

// Filtro de productos por precio

function priceFilter(products, price) {
    let prices = []
    for(let i=0; i < products.length; i++) {
        if(products[i].price <= price) {
            prices.push(`- ${products[i].name}`)
        }
    }
    let listedProducts = prices.join(' ')
    return `Los productos con valores menores a $${price} son: ${listedProducts}`;
}

console.log(priceFilter(products, 550));


// Funcion para buscar productos por nombre

let userProductSearch = prompt('¿Qué producto estás buscando?')

function findProduct(product) {
    let matchProductName = product.toLowerCase();
    let productFound = products.filter(prod => prod.name.toLowerCase().includes(matchProductName));
    let matchedProducts = [];
    for(let i=0; i < productFound.length; i++) {
        matchedProducts.push(productFound[i].name);
    }
    alert(matchedProducts);
}

console.log(findProduct(userProductSearch));


// Funcion para buscar productos por categoría

let userCategorySearch = prompt('¿Qué categoría de producto estás buscando?')

function findCategory(category) {
    let matchCategoryName = category.toLowerCase();
    let productFound = products.filter(cat => cat.category.toLowerCase().includes(matchCategoryName));
    let matchedProducts = [];
    for(let i=0; i < productFound.length; i++) {
        matchedProducts.push(productFound[i].name);
    }
    alert(matchedProducts);
}

console.log(findCategory(userCategorySearch))


// Renderizado de productos en inicio

let productGrids = document.querySelector('.featured-products-grid');

for (const product of products) {
    let card = document.createElement('div');
    card.className = 'product-card'
    card.innerHTML = ` <div class="product-card-image">
                            <img src=${product.image} alt="product card image">
                        </div>
                        <div class="product-card-description">
                            <div class="product-card-info">
                                <h3 class="product-card-name">${product.name}</h3>
                                <p class="product-card-price">$${product.price.toFixed(2)}</p>
                            </div>
                            <div class="product-card-stars">
                                <img src="images/stars.png" alt="product card stars">
                            </div>
                        </div>
    `
    productGrids.append(card);
}


