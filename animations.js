// // Animaciones

// // Modal de Filtros

// const filters = document.querySelector('.catalogue-filters');
// const showFilters = document.getElementById('show-filters')
// const backBtn = document.getElementById('back-btn');

// // Evento para mostrar los filtros

// showFilters.addEventListener('click', () => {
//     filters.classList.add('show-filters')
// })

// backBtn.addEventListener('click', () => {
//     filters.classList.remove('show-filters')
// })


// Menu Mobile

const hambMenu = document.querySelector('.hamb-menu-btn');
const menuList = document.querySelector('.nav--list-menu');
const closeMenu = document.querySelector('.close-menu');

hambMenu.addEventListener('click', () => {
    menuList.classList.add('show-menu');
})

closeMenu.addEventListener('click', () => {
    menuList.classList.remove('show-menu');
})