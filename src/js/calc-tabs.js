let tabItem = document.querySelectorAll('.calc-tabs__triggers-item');
let contentItem = document.querySelectorAll('.calc-tabs__content-item');

tabItem.forEach((item) => 
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');

        tabItem.forEach((child) => child.classList.remove('calc-tabs__triggers-item--active'));
        contentItem.forEach((child) => child.classList.remove('calc-tabs__content-item--active'));

        item.classList.add('calc-tabs__triggers-item--active');
        document.getElementById(id).classList.add('calc-tabs__content-item--active');
    })
);