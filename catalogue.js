const products = [
    {
        name:'Aros Circulares',
        id: '001',
        price: 600, 
        category: 'Aros', 
        stock: 5,
        image:'/images/products/aros-arcilla/aros-arcilla-circulo-chico-negro.jpg', 
        variacion: [
            {
                color: 'blanco',
                id: '001BL',
                image: '/images/products/aros-arcilla/aros-arcilla-circulo-chico-blanco.jpg'
            },
            {
                color: 'amarillo',
                id: '001AM',
                image: '/images/products/aros-arcilla/aros-arcilla-circulo-chico-amarillo.jpg'
            },
            {
                color: 'mandarina',
                id: '001NR',
                image: '/images/products/aros-arcilla/aros-arcilla-circulo-chico-mandarina.jpg'
            },
            {
                color: 'negro',
                id: '001NE',
                image: '/images/products/aros-arcilla/aros-arcilla-circulo-chico-negro.jpg'
            },
            {
                color: 'verde',
                id: '001VD',
                image: '/images/products/aros-arcilla/aros-arcilla-circulo-chico-verde.jpg'
            },
            {
                color: 'salmón',
                id: '001SL',
                image: '/images/products/aros-arcilla/aros-arcilla-circulo-chico-salmon.jpg'
            },
            {
                color: 'rojo',
                id: '001RO',
                image: '/images/products/aros-arcilla/aros-arcilla-circulo-chico-rojo.jpg'
            }
        ]
    },
    {
        name:'Aros Botones', 
        id: '002', 
        price: 520, 
        category: 'Aros', 
        stock: 5, 
        image:'/images/products/aros-arcilla/aros-arcilla-botones-negro-naranja.jpg', 
        variacion: [
            {
                color: 'negro',
                id: '002NE',
                image: '/images/products/aros-arcilla/aros-arcilla-botones-negro.jpg'
            },
            {
                color: 'blanco',
                id: '002BL',
                image: '/images/products/aros-arcilla/aros-arcilla-botones-blanco.jpg'
            },
            {
                color: 'negro-naranja',
                id: '002N-N',
                image: '/images/products/aros-arcilla/aros-arcilla-botones-negro-naranja.jpg'
            },
            {
                color: 'blanco-naranja',
                id: '002B-N',
                image: '/images/products/aros-arcilla/aros-arcilla-botones-blanco-naranja.jpg'
            }
        ]
    },
    {
        name:'Aros Animal Print', 
        id: '003', 
        price: 550, 
        category: 'Aros', 
        stock: 5, 
        image:'/images/products/aros-arcilla/aros-animal-print-rojo.jpg', 
        variacion: [
            {
                color: 'blanco',
                id: '003BL',
                image: '/images/products/aros-arcilla/aros-animal-print-blanco.jpg'
            },
            {
                color: 'rojo',
                id: '003RO',
                image: '/images/products/aros-arcilla/aros-animal-print-rojo.jpg'
            },
            {
                color: 'verde',
                id: '003VD',
                image: '/images/products/aros-arcilla/aros-animal-print-verde.jpg'
            },
            {
                color: 'mandarina',
                id: '003MN',
                image: '/images/products/aros-arcilla/aros-animal-print-mandarina.jpg'
            },
            {
                color: 'mostaza',
                id: '003MZ',
                image: '/images/products/aros-arcilla/aros-animal-print-mostaza.jpg'
            },
            {
                color: 'naranja',
                id: '003NR',
                image: '/images/products/aros-arcilla/aros-animal-print-naranja.jpg'
            }
        ]
    },
    {
        name:'Aros Barquitos', 
        id: '004', 
        price: 540, 
        category: 'Aros', 
        stock: 5, 
        image:'/images/products/aros-arcilla/aros-arcilla-barco-pequeño-mandarina.jpg', 
        variacion: [
            {
                color: 'mandarina',
                id: '004NR',
                image: '/images/products/aros-arcilla/aros-arcilla-barco-pequeño-mandarina.jpg'
            },
            {
                color: 'negro',
                id: '004NE',
                image: '/images/products/aros-arcilla/aros-arcilla-barco-pequeño-negro.jpg'
            }
        ]
    },
    {
        name:'Aros Pétalos', 
        id: '005', 
        price: 550, 
        category: 'Aros', 
        stock: 5, 
        image:'/images/products/aros-arcilla/aros-petalos-blancos.jpg', 
        variacion: [
            {
                color: 'blanco',
                id: '005BL',
                image: '/images/products/aros-arcilla/aros-petalos-blancos.jpg'
            }
        ]
    },
    {
        name:'Aros Redondos', 
        id: '006', 
        price: 600, 
        category: 'Aros', 
        stock: 5, 
        image:'/images/products/aros-arcilla/aros-arcilla-redondos-salmon.jpg', 
        variacion: [
            {
                color: 'blanco',
                id: '006BL',
                image: '/images/products/aros-arcilla/aros-arcilla-redondos-blanco.jpg'
            },
            {
                color: 'salmon',
                id: '006SL',
                image: '/images/products/aros-arcilla/aros-arcilla-redondos-salmon.jpg'
            },
            {
                color: 'amarillo',
                id: '006AM',
                image: '/images/products/aros-arcilla/aros-arcilla-redondos-amarillo.jpg'
            },
            {
                color: 'mandarina',
                id: '006MN',
                image: '/images/products/aros-arcilla/aros-arcilla-redondos-mandarina.jpg'
            },
            {
                color: 'negro',
                id: '006NE',
                image: '/images/products/aros-arcilla/aros-arcilla-redondos-negro.jpg'
            },
            {
                color: 'rojo',
                id: '006RO',
                image: '/images/products/aros-arcilla/aros-arcilla-redondos-rojo.jpg'
            }
        ]
    },
    {
        name:'Aros Tres Piezas', 
        id: '007', 
        price: 600, 
        category: 'Aros', 
        stock: 5, 
        image:'/images/products/aros-arcilla/aros-arcilla-tres-piezas-blanco.jpg', 
        variacion: [
            {
                color: 'blanco',
                id: '007BL',
                image: '/images/products/aros-arcilla/aros-arcilla-tres-piezas-blanco.jpg'
            },
        ]
    },
    {
        name:'Collar Audrey', 
        id: '008', 
        price: 2400, 
        category: 'Collares', 
        stock: 2, 
        image:'/images/products/collares/collar-audrey.jpg', 
        variacion: [
            {
                color: 'plateado',
                id: '008PL',
                image: '/images/products/collares/collar-audrey.jpg'
            },
        ]
    },
    {
        name:'Collar Estrellas', 
        id: '009', 
        price: 1500, 
        category: 'Collares', 
        stock: 2, 
        image:'/images/products/collares/collar-estrellas.jpg', 
        variacion: [
            {
                color: 'plateado',
                id: '009PL',
                image: '/images/products/collares/collar-estrellas.jpg'
            },
        ]
    },
    {
        name:'Collar Love', 
        id: '007', 
        price: 1400, 
        category: 'Collares', 
        stock: 2, 
        image:'/images/products/collares/collar-love.jpg', 
        variacion: [
            {
                color: 'plateado',
                id: '010PL',
                image: '/images/products/collares/collar-love.jpg'
            },
        ]
    },
    {
        name:'Collar Mariposas', 
        id: '007', 
        price: 1600, 
        category: 'Collares', 
        stock: 2, 
        image:'/images/products/collares/collar-mariposas.jpg', 
        variacion: [
            {
                color: 'plateado',
                id: '011PL',
                image: '/images/products/collares/collar-mariposas.jpg'
            },
        ]
    },

]

// Catálogo Container

let catalogueGrid = document.querySelector('.catalogue-products');


// Modal de Filtros

const filters = document.querySelector('.catalogue-filters');
const showFilters = document.getElementById('show-filters')
const backBtn = document.getElementById('back-btn');


// Evento para mostrar los filtros

showFilters.addEventListener('click', () => {
    filters.classList.add('show-filters')
})

backBtn.addEventListener('click', () => {
    filters.classList.remove('show-filters')
})


// Filtros

// Filtro por nombre

let filterNameBtn = document.getElementById('product-name-submit');

filterNameBtn.addEventListener('click', () => {
    let filterName = document.getElementById('product-name').value;
    let matchProductName = filterName.toLowerCase();
    let productFound = products.filter(prod => prod.name.toLowerCase().includes(matchProductName));

    for (const product of productFound) {
        let card = document.createElement('div');
        card.className = 'product-card'
        card.innerHTML = ` <div class="product-card-image">
                                <img src=${product.image} alt="product card image">
                            </div>
                            <div class="product-card-description">
                                <div class="product-card-info">
                                    <p class="product-card-name">${product.name}</p>
                                    <p class="product-card-price">$${product.price.toFixed(2)}</p>
                                </div>
                                <div class="product-card-stars">
                                    <img src="/images/stars.png" alt="product card stars">
                                </div>
                            </div>
        `
        catalogueGrid.append(card);
    }

    filters.classList.remove('show-filters')

});