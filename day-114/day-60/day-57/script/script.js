let container = document.querySelector('.wrapper__slide__container');
let product = document.querySelector('.featured-product__slide');
let dealySells = document.querySelector('.daily-sells__product-slide');




document.querySelector('.wrapper__slide__left-btn').addEventListener('click', function() {
    let slide = document.querySelector('.a');
    container.appendChild(slide)
})
document.querySelector('.wrapper__slide__right-btn').addEventListener('click', function() {
    let slide = document.querySelector('.a');
    container.appendChild(slide)
})


document.querySelector('.featured-categories__left-btn').addEventListener('click', function() {
    let slide = document.querySelectorAll('.featured-product-card');
    product.appendChild(slide.item(0))
})

document.querySelector('.featured-categories__right-btn').addEventListener('click', function() {
    let slide = document.querySelectorAll('.featured-product-card');
    product.prepend(slide.item(10))
})



document.querySelector('.daily-sells__left-btn').addEventListener('click', function() {
    let slide = document.querySelectorAll('.daily-sells__container');
    dealySells.appendChild(slide.item(0))
})
document.querySelector('.daily-sells__right-btn').addEventListener('click', function() {
    let slide = document.querySelectorAll('.daily-sells__container');
    dealySells.prepend(slide.item(4))
})



