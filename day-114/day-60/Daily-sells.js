export default function DailySellsProducts(props) {
    const {
        descroptionName, 
    } = props;

    return (
        <>
            <div class="daily-sells__container">
                <div class="daily-sells__descriptions daily-sells__descriptions--width">{descroptionName}</div>
                <img src="./img/shop/product-1-1.jpg" alt="" class="daily-sells__pictured"/>

                    <a href="#" class="daily-sells__text-category">Snack</a>
                    <a href="#" class="daily-sells__description-dish">Seeds of Change Organic Quinoa, Brown, & Red
                        Rice</a>
                    <div class="daily-sells__fa-star-container">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="daily-sells__price-add-container">
                        <div class="daily-sells__price">
                            <span class="daily-sells--color-green">$28.85 <span
                                class="daily-sells__discount-price">$32.0</span></span>
                        </div>
                        <div class="daily-sells__line"></div>
                        <div class="daily-sells__add">
                            <i class="fa-solid fa-cart-shopping"></i>
                            Add To Cart
                        </div>
                    </div>
            </div>
        </>
    )
}

export default function DailySells() {
    return (
        <>
            <div class="daily-sells-container">
                <div class="daily-sells__categories">
                    <p class="daily-sells__categories-header">Daily Best Sells</p>
                    <ul class="daily-sells__item">
                        <li class="daily-sells__list">
                            <a href="#" class="daily-sells__click daily-sells_click--color-green">Featured</a>
                        </li>
                        <li class="daily-sells__list">
                            <a href="#" class="daily-sells__click">Popular</a>
                        </li>
                        <li class="daily-sells__list">
                            <a href="#" class="daily-sells__click">New added</a>
                        </li>
                    </ul>
                </div>

                <div class="daily-sells__product">
                    <button class="daily-sells__left-btn"><i class="fa-solid fa-arrow-left"></i></button>
                    <button class="daily-sells__right-btn"><i class="fa-solid fa-arrow-right right"></i></button>
                    <div class="daily-sells__nature-card">
                        <p class="daily-sells__nature-title">Bring Nature into your home</p>
                        <img src="./img/banner/banner-4.png" alt="" class="daily-sells__nature-pictured" />
                        <button class="daily-sells__nature-btn">Shop Now<i
                            class="fa-solid fa-arrow-right-long"></i></button>
                    </div>

                    <div class="daily-sells__product-slide">
                        <DailySellsProducts />
                    </div>
                </div>
            </div>
        </>
    )
}