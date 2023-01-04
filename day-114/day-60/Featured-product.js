export default function FeaturedProduct(props) {
    const {
        productName, productCuantity
    } = props;


    return (
        <>
            <div class="featured-product-card">
                <img src="./img/shop/cat-13.png" alt="" class="featured-product__pictured" />
                <p class="featured-product-name">{productName}</p>
                <p class="featured-product-quantity">{productCuantity}</p>
            </div>
        </>
    )
}

export default function SuggestionsProduct(props) {
    const {
        productName
    } = props;

    return (
        <>
            <div class="featured-product-three-card">
                <img src="./img/banner/banner-1.png" alt="" class="featured-product__three-pictured" />
                <p class="featured-product__three-card-header">{productName}</p>
                <button class="featured-product__three-card-btn">Shop Now<i
                    class="fa-solid fa-arrow-right-long"></i></button>
            </div>
        </>
    )
}


export default function Featured(props) {
    const {

    } = props;

    return (
        <>
            <div class="featured-product-container">
                <div class="featured-categories">
                    <p class="featured-categories__text">Fetured Categories</p>
                    <ul class="featured-categories__item">
                        <li class="featured-categories__list"><a class="featured-categories__click" href="#">Cake & Milk</a>
                        </li>
                        <li class="featured-categories__list"><a class="featured-categories__click" href="#">Coffes &
                            Teas</a></li>
                        <li class="featured-categories__list"><a
                            class="featured-categories__click featured-categories--green-text" href="#">Ped Froods</a>
                        </li>
                        <li class="featured-categories__list"><a class="featured-categories__click" href="#">Vegetables</a>
                        </li>
                    </ul>
                    <div class="featured-categories__btn-container">
                        <button class="featured-categories__left-btn"><i class="fa-solid fa-arrow-left"></i></button>
                        <button class="featured-categories__right-btn"><i
                            class="fa-solid fa-arrow-right right"></i></button>
                    </div>
                </div>

                <div class="featured-product">
                    <div class="featured-product__slide">
                        <FeaturedProduct productName="Cake & Milk"
                            productCuantity='26 items' />
                        <FeaturedProduct productName="Oganic Kiwi"
                            productCuantity='28 items' />
                        <FeaturedProduct productName="Peach"
                            productCuantity='14 items' />
                        <FeaturedProduct productName="Read Apple"
                            productCuantity='54 items' />
                        <FeaturedProduct productName="Snack"
                            productCuantity='56 items' />
                        <FeaturedProduct productName="Vegetables"
                            productCuantity='72 items' />
                        <FeaturedProduct productName="Strawberry"
                            productCuantity='36 items' />
                        <FeaturedProduct productName="Black lum"
                            productCuantity='123 items' />
                        <FeaturedProduct productName="Custrad apple"
                            productCuantity='34 items' />
                        <FeaturedProduct productName="Coffe & Tea"
                            productCuantity='89 items' />
                        <FeaturedProduct productName="Headphone"
                            productCuantity='87 items' />
                    </div>
                </div>

                <div class="featured-product__three-card-container">
                    <SuggestionsProduct productName='Everyday Fresh & Clean with Our Products'/>
                    <SuggestionsProduct productName='Make your Breakfast Healthy and Easy'/>
                    <SuggestionsProduct productName='The best Organic Products Online'/>
                </div>
            </div>
        </>
    )
}