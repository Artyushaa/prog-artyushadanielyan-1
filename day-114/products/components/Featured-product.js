export function FeaturedProductCard({ name, quantity, url, classname }) {
    return (
        <>
            <div className={classname}>
                <img src={url} alt="" className="featured-product__pictured" />
                <p className="featured-product-name">{name}</p>
                <p className="featured-product-quantity">{quantity}</p>
            </div>
        </>
    )
}

export function FeaturedProductThreeCard({ name, url }) {
    return (
        <>
            <div className="featured-product-three-card">
                <img src={url} alt="" className="featured-product__three-pictured" />
                <p className="featured-product__three-card-header">{name}</p>
                <button className="featured-product__three-card-btn">Shop Now<i
                    className="fa-solid fa-arrow-right-long"></i></button>
            </div>
        </>
    )
}


export default function FeaturedProduct() {
    return (
        <>
            <div className="featured-product-container">
                <div className="featured-categories">
                    <p className="featured-categories__text">Fetured Categories</p>
                    <ul className="featured-categories__item">
                        <li className="featured-categories__list"><a className="featured-categories__click" href="#">Cake & Milk</a>
                        </li>
                        <li className="featured-categories__list"><a className="featured-categories__click" href="#">Coffes &
                            Teas</a></li>
                        <li className="featured-categories__list"><a
                            className="featured-categories__click featured-categories--green-text" href="#">Ped Froods</a>
                        </li>
                        <li className="featured-categories__list"><a className="featured-categories__click" href="#">Vegetables</a>
                        </li>
                    </ul>
                    <div className="featured-categories__btn-container">
                        <button className="featured-categories__left-btn"><i className="fa-solid fa-arrow-left"></i></button>
                        <button className="featured-categories__right-btn"><i
                            className="fa-solid fa-arrow-right right"></i></button>
                    </div>
                </div>

                <div className="featured-product">
                    <div className="featured-product__slide">
                        <FeaturedProductCard name="Cake & Milk" quantity="26 items" url="img/shop/cat-13.png" classname="featured-product-card" />
                        <FeaturedProductCard name="Oganic Kiwi" quantity="28 items" url="img/shop/cat-12.png" classname="featured-product-card featured-product--pink1" />
                        <FeaturedProductCard name="Peach" quantity="14 items" url="img/shop/cat-11.png" classname="featured-product-card featured-product--aqua" />
                        <FeaturedProductCard name="Red Apple" quantity=" 54items" url="img/shop/cat-9.png" classname="featured-product-card featured-product--pink2" />
                        <FeaturedProductCard name="Snack" quantity="56 items" url="img/shop/cat-3.png" classname="featured-product-card featured-product--pink3" />
                        <FeaturedProductCard name="Vegetables" quantity="72 items" url="img/shop/cat-1.png" classname="featured-product-card featured-product--pink1" />
                        <FeaturedProductCard name="Strawberry" quantity="36 items" url="img/shop/cat-2.png" classname="featured-product-card" />
                        <FeaturedProductCard name="Black lum" quantity="123 items" url="img/shop/cat-4.png" classname="featured-product-card featured-product--pink4" />
                        <FeaturedProductCard name="Custrad apple" quantity="34 items" url="img/shop/cat-5.png" classname="featured-product-card featured-product--pink1" />
                        <FeaturedProductCard name="Coffe & Tea" quantity="89 items" url="img/shop/cat-14.png" classname="featured-product-card featured-product--pink5" />
                        <FeaturedProductCard name="Headphone" quantity="87 items" url="img/shop/cat-15.png" classname="featured-product-card featured-product--aqua" />
                    </div>
                </div>

                <div className="featured-product__three-card-container">
                    <FeaturedProductThreeCard name='Everyday Fresh & Clean with Our Products' url='img/banner/banner-1.png' />
                    <FeaturedProductThreeCard name='Make your Breakfast Healthy and Easy' url='img/banner/banner-2.png' />
                    <FeaturedProductThreeCard name='The best Organic Products Online' url='img/banner/banner-3.png' />
                </div>
            </div>
        </>
    )
}